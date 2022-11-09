// 引入mysql模块
const mysql = require('mysql');
// 连接数据库
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'haschat'
})

// 导出模块
module.exports = db;