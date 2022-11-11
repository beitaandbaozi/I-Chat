var express = require("express");
const app = require("../app");
var router = express.Router();
const db = require("../db/index");
const { info, msg } = require("../config");

// 根据邮件获取用户信息
const getUserInfoByEmail = (email) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(`select * from user where Email = "${email}"`, (err, res) => {
        if (err) {
          reject(info.error("查询用户列表失败！"));
        } else {
          resolve(info.success(res, "查询用户列表成功！"));
        }
      });
    } catch {
      reject(info.error("查询用户列表异常"));
    }
  });
};

// 随机生成token
const newCreateToken = () => {
  var guid = "";
  for (var i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
  }
  return guid;
};

// 登录
router.post("/login", async (req, res) => {
  try {
    let { userName, password } = req.body;
    let queryResult = {
      myInfo: null,
      token: ""
    }
    let result = await getUserInfoByEmail(userName);
    if (result.state) {
      if (result.data.length > 0) {
        queryResult.myInfo = result.data[0]
        if (queryResult.myInfo.Password == password) {
          queryResult.token = newCreateToken();
          res.send(msg.success(queryResult, '成功'))
        } else {
          res.send(msg.error('密码错误'));
          return;
        }
      } else {
        res.send(msg.error('该用户不存在'));
        return;
      }
    } else {
      res.send(msg.error('查询数据失败'));
      return;
    }
  } catch (err) {
    res.send(msg.error(err.message));
  }
});

module.exports = router;
