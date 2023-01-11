var express = require("express");
const { msg, info, nowTime } = require("../config");
var router = express.Router();
const db = require("../db/index");

//!!! 从数据库获取朋友圈内容
const getCommunityList = ({ pageIndex, pageSize }) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from community order by CreateDateUtc desc limit ${
          (pageIndex - 1) * pageSize
        },${pageSize}`,
        (error, res) => {
          if (error) {
            reject(info.error("获取朋友圈内容数据库查询失败", error));
          } else {
            resolve(info.success(res, "从数据库获取朋友圈内容成功！"));
          }
        }
      );
    } catch (error) {
      reject(info.error("获取朋友圈内容数据库异常", error.message));
    }
  });
};

//!!! 从数据库获取朋友圈喜爱记录
const getCommunityLikeRecord = ({ userId, communityId }) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from community_like_record where UserId = ${userId} and CommunityId = ${communityId}`,
        (error, res) => {
          if (error) {
            reject(info.error("获取朋友圈喜爱记录数据库查询失败", error));
          } else {
            resolve(info.success(res, "从数据库获取朋友圈喜爱记录成功！"));
          }
        }
      );
    } catch (error) {
      reject(info.error("获取朋友圈喜爱记录异常", error.message));
    }
  });
};

//!!! 从数据库获取具体的朋友圈喜爱的用户数据
const getCommunityLikeCount = ({ communityId }) => {
  // 点赞的用户数据列表
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select user.Name from community_like_record join user on community_like_record.UserId = user.Id where community_like_record.CommunityId = ${communityId}`,
        (error, res) => {
          if (error) {
            reject(info.error("获取具体的朋友圈喜爱数量数据库查询失败", error));
          } else {
            resolve(
              info.success(res, "从数据库获取具体的朋友圈喜爱数量成功！")
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("从数据库获取具体的朋友圈喜爱数量异常", error));
    }
  });
};

//!!! 从数据库获取朋友圈评论
const getCommunityCommentList = ({ communityId }) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from community_comment where CommunityId = ${communityId}`,
        (error, res) => {
          if (error) {
            reject(info.error("从数据库获取朋友圈评论数据库查询失败", error));
          } else {
            resolve(
              info.success(res, "从数据库获取朋友圈评论数据库查询成功！")
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("从数据库获取朋友圈评论数据库异常"));
    }
  });
};

// 获取朋友圈内容
router.post("/getCommunityList", async (req, res) => {
  try {
    let model = req.body;
    if (!(model.pageIndex > 0 && model.pageSize > 0)) {
      res.send(msg.error("pageIndex和pageSize都必须大于0"));
      return;
    }
    // *** 获取朋友圈内容
    const communityList = await getCommunityList(model);
    if (communityList.state) {
      let queryData = communityList.data;
      for (let i = 0; i < queryData.length; i++) {
        queryData[i].ImgList = JSON.parse(queryData[i].ImgList);
        // *** 获取朋友圈喜爱记录
        let communityLikedRecord = await getCommunityLikeRecord({
          userId: model.userId,
          communityId: queryData[i].Id,
        });
        if (communityLikedRecord.state) {
          // ??? 是否点赞
          queryData[i].IsLike =
            communityLikedRecord.data?.length > 0 ? true : false;
        }
        // *** 获取朋友圈喜爱数量
        let communityLikeCount = await getCommunityLikeCount({
          communityId: queryData[i].Id,
        });
        queryData[i].LikeNum = communityLikeCount.data;
        // ***获取朋友圈评论
        let communityCommentList = await getCommunityCommentList({
          communityId: queryData[i].Id,
        });
        queryData[i].CommentList = communityCommentList.data;
      }
      res.send(msg.success(queryData, "获取朋友圈成功"));
    } else {
      res.send(msg.error("获取朋友圈内容失败"));
    }
  } catch (error) {
    res.send(msg.error("获取朋友圈数据异常", error.message));
  }
});

//!!! 从数据库新增朋友圈评价
const insertCommunityComment = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `insert into community_comment (CommunityId,SendId,Type,SendName,ReceiverId,ReceiverName,AvatarUrl,Content,
        CreateDateUtc,CommunityImg,CommunityContent) values (${model.communityId},${model.sendId},${model.type},"${model.sendName}",
        ${model.receiverId},"${model.receiverName}","${model.avatarUrl}","${model.content}","${model.createDateUtc}",
        "${model.communityImg}","${model.communityContent}")`,
        (error, res) => {
          if (error) {
            res.send(info.error("新增朋友圈评价数据库异常", error));
          } else {
            resolve(info.success(null, "新增朋友圈评价数据库成功！"));
          }
        }
      );
    } catch (error) {
      reject(info.error("新增朋友圈评论异常！"));
    }
  });
};
// 新增评论
router.post("/insertCommunityComment", (req, res) => {
  try {
    let model = req.body;
    if (!(model.sendId > 0)) {
      res.send(msg.error("请登录再发布"));
      return;
    }
    if (!(model.communityId > 0)) {
      res.send(msg.error("社区Id不得为空"));
      return;
    }
    //!!! 设置时间
    model.createDateUtc = nowTime();
    // *** 插入评论
    const result = insertCommunityComment(model);
    if (result.state) {
      res.send(msg.success(null, "评论成功"));
    } else {
      res.send(msg.error("评论失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

module.exports = router;
