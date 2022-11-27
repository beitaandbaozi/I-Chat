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
} = require("./query/socket");

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
});

module.exports = app;
