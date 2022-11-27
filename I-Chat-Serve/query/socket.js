const db = require("../db/index");
const { info } = require("../config");

// 根据id获取对应用户数据
exports.getUserInfoById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(`select * from user where Id = "${id}"`, (err, res) => {
        if (err) {
          reject(info.error("根据Id获取对应用户信息失败"));
        } else {
          resolve(info.success(res, "根据Id获取对应用户信息成功"));
        }
      });
    } catch (error) {
      reject(info.error("根据Id获取对应用户信息数据库异常"));
    }
  });
};

// 根据id更新用户的socket.id
exports.updateUserSocketId = (id, outTradeNo) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `update user set OutTradeNo = "${outTradeNo}" where Id = "${id}"`,
        (err, res) => {
          if (err) {
            reject(info.error("更新用户socket.id失败"));
          } else {
            resolve(null, "更新用户socket.id成功");
          }
        }
      );
    } catch (error) {
      reject(info.error("更新用户socket.id数据库异常"));
    }
  });
};

// 根据id更新用户的在线状态
exports.updateUserOnlineStateById = (id, onlineState) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `update user set OnlineState = ${onlineState} where Id = "${id}"`,
        (err, res) => {
          if (err) {
            reject(info.error("根据id更新用户的在线状态失败"));
          } else {
            resolve(null, "根据id更新用户的在线状态成功");
          }
        }
      );
    } catch (error) {
      reject(info.err("根据id更新用户的在线状态数据库异常"));
    }
  });
};

// 根据Id更新用户的时间戳
exports.updateUserNoCodeById = (id, noCode) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `update user set NoCode = "${noCode}" where Id = "${id}"`,
        (err, res) => {
          if (err) {
            reject(info.error("根据Id更新用户的时间戳失败"));
          } else {
            resolve(null, "根据Id更新用户的时间成功");
          }
        }
      );
    } catch (error) {
      reject(info.error("根据Id更新用户的时间戳数据库异常"));
    }
  });
};

// 获取用户的聊天内容
exports.getContentBySendId = (id) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from content where SendId ="${id}" or ReciverId ="${id}"`,
        (err, res) => {
          if (err) {
            reject(info.error("获取用户的聊天内容失败"));
          } else {
            resolve(info.success(res, "获取用户的聊天内容成功"));
          }
        }
      );
    } catch (error) {
      reject(info.error("获取用户的聊天内容数据库异常"));
    }
  });
};

// 根据socketId获取用户信息
exports.getUserByOutTradeNo = (outTradeNo) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from user where OutTradeNo = "${outTradeNo}"`,
        (err, user) => {
          if (err) {
            reject(info.error("根据socket.id获取用户信息失败"));
          } else {
            resolve(info.success(user, "根据socket.id获取用户信息成功"));
          }
        }
      );
    } catch {
      reject(info.error("根据socket.id获取用户信息数据库异常"));
    }
  });
};
