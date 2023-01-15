const { response } = require("express");
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
        `insert into community_comment (CommunityId,SendId,Type,SendName,ReceiverId,ReceiverName,AvatarUrl,Content,CreateDateUtc,CommunityImg,CommunityContent)
      values(${model.communityId},${model.sendId},${model.type},"${model.sendName}",${model.receiverId},"${model.receiverName}","${model.avatarUrl}","${model.content}","${model.createDateUtc}","${model.communityImg}","${model.communityContent}");`,
        (err, result) => {
          if (err) {
            reject(info.error("新增社区评论失败"));
          } else {
            resolve(info.success(null, "新增社区评论成功"));
          }
        }
      );
    } catch {
      reject(info.error("新增社区评论异常"));
    }
  });
};
// 新增评论
router.post("/insertCommunityComment", async (req, res) => {
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
    const result = await insertCommunityComment(model);
    if (result.state) {
      res.send(msg.success(null, "评论成功"));
    } else {
      res.send(msg.error("评论失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

//!!! 从数据库根据ID获取最新朋友圈评论Id
const getCommentContentById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from community_comment where CommunityId = ${id}`,
        (error, res) => {
          if (error) {
            console.log(error);
            reject(info.error("从数据库根据ID获取最新朋友圈评论Id数据库异常"));
          } else {
            resolve(
              info.success(
                res,
                "从数据库根据ID获取最新朋友圈评论Id数据库成功！"
              )
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("根据ID获取最新朋友圈评论Id数据库异常"));
    }
  });
};
// 根据id获取最新的评论
router.post("/getCommentContentById", async (req, res) => {
  try {
    let model = req.body;
    if (!(model.communityId > 0)) {
      res.send(msg.error("朋友圈Id不得为空"));
      return;
    }
    // ***根据Id获取最新的评论内容
    const result = await getCommentContentById(model.communityId);
    if (result.state) {
      res.send(msg.success(result.data, "根据Id获取最新的评论内容成功"));
    } else {
      res.send(msg.error("根据Id获取最新的评论内容失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

//!!! 根据Id删除数据库对应的评论
const deleteCommentContentById = ({ id }) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `delete from community_comment where Id = ${id};`,
        (error, res) => {
          if (error) {
            reject(info.error("根据Id删除数据库对应的评论数据库异常"));
          } else {
            resolve(
              info.success(null, "根据Id删除数据库对应的评论数据库成功！")
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("根据Id删除数据库对应的评论异常"));
    }
  });
};
// 根据id删除对应的评论
router.post("/deleteCommentContentById", async (req, res) => {
  try {
    let model = req.body;
    if (!(model.id > 0)) {
      res.send(msg.error("缺乏必要参数"));
      return;
    }
    // *** 根据Id删除数据库对应的评论
    const result = await deleteCommentContentById(model);
    if (result.state) {
      res.send(msg.success(null, "删除成功"));
    } else {
      res.send(msg.error("删除失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});
//!!! 根据用户Id和朋友圈Id对朋友圈进行点赞
const giveALike = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `insert into community_like_record (UserId,CommunityId) values(${model.userId},"${model.communityId}");`,
        (error, res) => {
          if (error) {
            reject(
              info.error(
                "根据用户Id和朋友圈Id对朋友圈进行点赞数据库异常",
                error
              )
            );
          } else {
            resolve(
              info.success(
                null,
                "根据用户Id和朋友圈Id对朋友圈进行点赞数据库成功"
              )
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("根据用户Id和朋友圈Id对朋友圈进行点赞异常"));
    }
  });
};
// 根据用户id和朋友圈id对某一条朋友圈进行点赞操作
router.post("/giveALike", async (req, res) => {
  try {
    let model = req.body;
    if (!(model.userId > 0 && model.communityId > 0)) {
      res.send(msg.error("缺乏必要参数"));
      return;
    }
    // *** 查看一下是否有点赞过
    let isGiveLike = await getCommunityLikeRecord(model);
    if (isGiveLike.state) {
      if (isGiveLike.data.length === 0) {
        // *** 进行点赞操作
        let result = await giveALike(model);
        // *** 获取对应的点赞用户
        if (result.state) {
          let communityLikeCount = await getCommunityLikeCount({
            communityId: model.communityId,
          });
          if (communityLikeCount.state) {
            res.send(msg.success(communityLikeCount.data, "点赞成功"));
          } else {
            res.send(msg.error("点赞异常"));
          }
        } else {
          res.send(msg.error("点赞异常"));
        }
      } else {
        res.send(msg.success(null, "点赞成功"));
      }
    } else {
      res.send(msg.error("点赞失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

// !!! 根据用户Id和朋友圈Id对朋友圈取消点赞
const cancelALike = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `delete from community_like_record where UserId = ${model.userId} and CommunityId = ${model.communityId};`,
        (error, res) => {
          if (error) {
            reject(
              info.error("根据用户Id和朋友圈Id对朋友圈取消点赞数据库异常")
            );
          } else {
            resolve(
              info.success(
                null,
                "根据用户Id和朋友圈Id对朋友圈取消点赞数据库成功！"
              )
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("根据用户Id和朋友圈Id对朋友圈取消点赞异常！"));
    }
  });
};
// 根据用户id和朋友圈id对某一条朋友圈进行取消点赞操作
router.post("/cancelALike", async (req, res) => {
  try {
    let model = req.body;
    if (!(model.userId > 0 && model.communityId > 0)) {
      res.send(msg.error("缺乏必要参数"));
      return;
    }
    // *** 取消点赞
    let result = await cancelALike(model);
    // *** 获取对应的点赞用户
    if (result.state) {
      let communityLikeCount = await getCommunityLikeCount({
        communityId: model.communityId,
      });
      if (communityLikeCount.state) {
        res.send(msg.success(communityLikeCount.data, "取消点赞成功"));
      } else {
        res.send(msg.error("取消点赞异常"));
      }
    } else {
      res.send(msg.error("取消点赞失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});
// !!! 发布朋友圈
const insertCommunitySocial = (community) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `insert into community (PublishId,AvatarUrl,PublishName,Content,ImgList,CreateDateUtc) values (${community.PublishId},"${community.AvatarUrl}","${community.PublishName}","${community.Content}",'${community.ImgList}',"${community.CreateDateUtc}");`,
        (error, res) => {
          if (error) {
            reject(info.error("发布朋友圈数据库异常"));
          } else {
            resolve(info.success(null, "发布朋友圈数据库成功"));
          }
        }
      );
    } catch (error) {
      reject(info.error("发布朋友圈异常"));
    }
  });
};
// 发布朋友圈
router.post("/publishCommunitySocial", async (req, res) => {
  try {
    let model = req.body;
    model.CreateDateUtc = nowTime();
    let result = await insertCommunitySocial(model);
    if (result.state) {
      res.send(msg.success(null, "发布成功"));
    } else {
      res.send(msg.error("发布失败"));
    }
  } catch (error) {
    res.send(msg.error(err.message));
  }
});

//!!! 根据Id从数据库删库对应的朋友圈
const deleteCommunityById = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(`delete from community where Id = ${model.Id}`, (error, res) => {
        if (error) {
          reject(info.error("根据Id从数据库删库对应的朋友圈数据库异常！"));
        } else {
          resolve(
            info.success(null, "根据Id从数据库删库对应的朋友圈数据库成功！")
          );
        }
      });
    } catch (error) {
      reject(info.error("根据Id从数据库删库对应的朋友圈异常！"));
    }
  });
};
// 删除朋友圈
router.post("/deleteCommunityById", async (req, res) => {
  try {
    let model = req.body;
    let result = await deleteCommunityById(model);
    if (result.state) {
      res.send(msg.success(null, "删除成功！"));
    } else {
      res.send(msg.error("删除失败！"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});
//!!! 根据用户id从数据库获取未读的朋友圈信息
const getUnreadCommunityList = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `select * from community_comment where ReceiverId = ${model.receiverId} and SendId != ${model.receiverId} and Status = 0`,
        (error, res) => {
          if (error) {
            reject(info.error("根据用户id从数据库获取未读的朋友圈信息失败"));
          } else {
            resolve(
              info.success(res, "根据用户id从数据库获取未读的朋友圈信息成功")
            );
          }
        }
      );
    } catch (error) {
      reject(info.error("根据用户id从数据库获取未读的朋友圈信息异常"));
    }
  });
};
// 根据用户id获取未读的朋友圈信息
router.post("/getUnreadCommunityList", async (req, res) => {
  try {
    let model = req.body;
    let userUnreadCommunityMessage = await getUnreadCommunityList(model);
    if (userUnreadCommunityMessage.state) {
      res.send(msg.success(userUnreadCommunityMessage.data, "查询成功"));
    } else {
      res.send(msg.error("查询失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});

//!!! 从数据库更新朋友圈消息状态
const updateCommunityContentStateById = (model) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `update community_comment set Status = ${model.status} where ReceiverId = ${model.receiverId}`,
        (err, result) => {
          if (err) {
            reject(info.error("更新用户的消息阅读状态失败"));
          } else {
            resolve(info.success(null, "成功"));
          }
        }
      );
    } catch {
      reject(info.error("更新用户的消息阅读状态异常"));
    }
  });
};
// 更新朋友圈消息阅读状态
router.post("/updateCommunityContentStateById", async (req, res) => {
  try {
    let model = req.body;
    let result = await updateCommunityContentStateById(model);
    if (result.state) {
      res.send(msg.success(result.data, "更新成功"));
    } else {
      res.send(msg.error("更新失败"));
    }
  } catch (error) {
    res.send(msg.error(error.message));
  }
});
module.exports = router;
