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
};
