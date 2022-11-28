var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

var socket = require("socket.io");

const {
  getUserInfoById,
  updateUserSocketId,
  updateUserOnlineStateById,
  updateUserNoCodeById,
  getContentBySendId,
  getUserByOutTradeNo,
  insertContent,
  updateUserHistorySessionListById,
} = require("./query/socket");

const { nowTime } = require("./config");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const server = app.listen(9527, function () {
  console.log("server running on port 9527");
});
const io = socket(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", function (socket) {
  // 加入聊天
  socket.on("joinChat", async (data) => {
    console.log("joinChat-加入聊天", data);
    try {
      // *** 根据Id获取对应用户信息
      let userInfoById = await getUserInfoById(data.SendId);
      // ??? 若该用户已经登录，将旧设备登录的该账号的用户强制下线
      if (
        userInfoById.state &&
        userInfoById.data.length > 0 &&
        userInfoById.data[0].OnlineState
      ) {
        // * socket.to 即仅向当前房间的客户端广播消息
        socket.to(userInfoById.data[0].OutTradeNo).emit("squeezeOut", {
          noCode: userInfoById.data[0].NoCode,
        });
      }
      // ??? 先分别更新，后续没问题了直接一步更新
      // ??? 根据Id更新用户的socket.id
      await updateUserSocketId(data.SendId, socket.id);
      // ??? 根据Id更新用户的在线状态
      await updateUserOnlineStateById(data.SendId, true);
      // ??? 根据Id更新用户的时间戳
      await updateUserNoCodeById(data.SendId, data.NoCode);
      // ??? 获取用户的聊天内容
      let userContent = await getContentBySendId(data.SendId);
      let conversion = [];
      let historySessionList = [];
      if (userContent.state) {
        conversion = userContent.data;
      }
      if (userInfoById.data[0].HistorySessionList != null) {
        historySessionList = JSON.parse(
          userInfoById.data[0].HistorySessionList
        );
      }
      let result = {
        conversion,
        historySessionList,
      };
      // ??? socket通知前端通讯连接成功
      socket.emit("joinSuccess", result);
    } catch (error) {
      console.log("error", error.message);
    }
  });
  // 断开连接
  socket.on("disconnect", async () => {
    // ??? 根据sockId拿到当前用户信息
    let userInfoBySocketId = await getUserByOutTradeNo(socket.id);
    // ??? 更新当前用户在线状态
    if (userInfoBySocketId.state && userInfoBySocketId.data.length > 0) {
      updateUserOnlineStateById(userInfoBySocketId.data[0].Id, false);
    }
  });
  // 发送消息
  socket.on("sendMsg", async (data) => {
    try {
      // ??? 获取接收者的角色信息
      let receiverInfoResult = await getUserInfoById(
        data.Conversition.ReciverId
      );
      if (!receiverInfoResult.state) {
        console.log("接收数据失败");
        return;
      }
      let receiverInfo = receiverInfoResult.data;
      // ??? 设置消息的状态
      data.Conversition.State = 1;
      data.Conversition.CreateDateUtc = nowTime();
      // ??? 在数据库插入聊天记录
      await insertContent(data.Conversition);
      // ??? 通知 socket 消息接收事件
      if (receiverInfo.length > 0) {
        socket
          .to(receiverInfo[0].OutTradeNo)
          .emit("reviceMsg", data.Conversition);
      }
      // ??? socket emit 消息状态改变事件
      socket.emit("changMsgState", data.Conversition);
      // ??? 将发送者的会话存储到接收者的历史会话中
      if (receiverInfo[0].HistorySessionList != null) {
        // ??? 说明有之前的记录
        let historySessionList = JSON.parse(receiverInfo[0].HistorySessionList);
        let len =
          historySessionList.filter((x) => x.Id === data.Sender.Id)?.length ??
          0;
        if (len === 0) {
          data.Sender.HistorySessionList = "";
          historySessionList.push(data.Sender);
          updateUserHistorySessionListById(
            JSON.stringify(historySessionList),
            receiverInfo[0].Id
          );
        }
      } else {
        let historySessionList = [];
        data.Sender.HistorySessionList = "";
        historySessionList.push(data.Sender);
        updateUserHistorySessionListById(
          JSON.stringify(historySessionList),
          receiverInfo[0].Id
        );
      }
    } catch (error) {
      console.log("发送消息报错", error.message);
    }
  });
});

module.exports = app;
