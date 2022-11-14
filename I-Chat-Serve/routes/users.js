var express = require("express");
const app = require("../app");
var router = express.Router();
const db = require("../db/index");
const { info, msg, emailConfig } = require("../config");
// 邮箱发送模块
const nodemailer = require("nodemailer");

// 存储发送时的校验码
const sessionEmail = [];

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

// 随机生成校验码
const getCode = (num) => {
  const all = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * 62);
    result += all.charAt(index);
  }
  return result;
};

// 登录
router.post("/login", async (req, res) => {
  try {
    let { userName, password } = req.body;
    let queryResult = {
      myInfo: null,
      token: "",
    };
    let result = await getUserInfoByEmail(userName);
    if (result.state) {
      if (result.data.length > 0) {
        queryResult.myInfo = result.data[0];
        if (queryResult.myInfo.Password == password) {
          queryResult.token = newCreateToken();
          res.send(msg.success(queryResult, "成功"));
        } else {
          res.send(msg.error("密码错误"));
          return;
        }
      } else {
        res.send(msg.error("该用户不存在"));
        return;
      }
    } else {
      res.send(msg.error("查询数据失败"));
      return;
    }
  } catch (err) {
    res.send(msg.error(err.message));
  }
});

// 发送邮箱校验码
router.post("/sendVerificationCode", async (req, res) => {
  try {
    let { email, timestamp } = req.body;
    // 校验邮箱是否在本系统被注册过
    let result = await getUserInfoByEmail(email);
    if (result.state) {
      if (result.data.length > 0) {
        res.send(msg.error("该邮箱已经在系统注册过了"));
        return;
      } else {
        // 创建发送邮件的请求对象
        const transport = nodemailer.createTransport(emailConfig);
        const verificationCode = getCode(6);
        // 邮件信息
        const mailObj = {
          //发送方邮箱
          from: `来自<${emailConfig.auth.user}>`,
          to: email,
          subject: "【贝塔-基于uniapp的聊天应用】账号注册",
          // html格式
          html: `您正在注册I-Chat账号，本次请求的邮件验证码是：<b>${verificationCode}</b>（如非本人操作，请忽略该信息）`,
        };
        // 发送邮件
        transport.sendMail(mailObj);
        // 发送这个时刻的校验码
        sessionEmail[timestamp] = verificationCode;
        res.send(msg.success(null, "发送验证码成功"));
      }
    } else {
      res.send(msg.error("获取数据失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

module.exports = router;
