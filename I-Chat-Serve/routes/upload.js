var express = require("express");
const app = require("../app");
var router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { msg } = require("../config");

// 上传文件
router.post(
  "/uploadFile",
  multer({
    dest: "upload",
  }).array("file", 1),
  (req, res) => {
    const files = req.files;
    const fileList = [];
    for (let i in files) {
      let file = files[i];
      fs.renameSync(file.path, `upload/${file.filename}${file.originalname}`);
      file.path = `upload/${file.filename}${file.originalname}`;
      fileList.push(file);
    }
    res.send(fileList);
  }
);

// 获取资源文件
router.get("/getFile", (req, res) => {
  req.query.url
    ? res.download(`upload/${req.query.url}`)
    : res.send(msg.error("获取数据失败"));
});

module.exports = router;
