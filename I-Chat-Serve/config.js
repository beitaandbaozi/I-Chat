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
  newUserConfig: {
    Avatar:
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-e9420bcd-26cd-4faf-b47a-9949982f7c41/04727b70-da9d-4923-9d38-20ec565f71c3.jpeg",
  },
  nowTime: function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
    const hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
    const miu =
      now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
    const sec =
      now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
    return (
      +year +
      "-" +
      (month + 1) +
      "-" +
      date +
      "-" +
      hour +
      ":" +
      miu +
      ":" +
      sec
    );
  },
};
