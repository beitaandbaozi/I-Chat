module.exports = {
  info: {
    success: function (data, message = "") {
      return {
        state: true,
        message,
        data,
      };
    },
    error: function (message = "") {
      return {
        state: false,
        message,
      };
    },
  },
  msg: {
    success: function (data, message = "") {
      return {
        code: 200,
        message,
        data,
      };
    },
    error: function (message = "") {
      return {
        code: 600,
        message,
      };
    },
  },
  // 邮箱发送模块配置
  emailConfig: {
    host: "smtp.qq.com", //邮箱服务器  这里我用的QQ邮箱
    port: 465, //邮箱使用端口
    secure: true, //是否使用默认的465端口
    auth: {
      user: "2280496040@qq.com", // 发送方邮箱地址
      pass: "qypanpotyxdzdjac", // smtp 验证码
    },
  },
};
