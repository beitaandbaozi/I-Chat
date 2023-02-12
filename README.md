![logo](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/logo.png?raw=true)

​                                                                     ![vue3](https://img.shields.io/badge/vue3-3)![typescript](https://img.shields.io/badge/typescript-red)![uniapp](https://img.shields.io/badge/uniapp-orange)![mysql](https://img.shields.io/badge/mysql->=8.0-yellow)![nodejs](https://img.shields.io/badge/node->=12.0.0-ff69b4)

------



## 项目介绍

"I-Chat"是基于uniapp开发的一款通讯聊天项目，前端主要使用vue3+ts的形式，后端使用node+mysql来部署。由于是基于uniapp开发，推荐使用前端使用HBuilderX编译器查看源码。

## 项目搭建

### 前端

```
cd  .\I-Chat-Client\
npm install
```

### 后端

```javascript
cd .\I-Chat-Serve\
npm install
node app.js
```

#### 数据库配置

```javascript
./db/index.js

const db = mysql.createConnection({
  host: "", // 主机地址 （默认：localhost）
  user: "", // 用户名
  password: "", // 密码
  database: "" // 数据库
})
```

#### 邮箱配置

```javascript
./config.js

emailConfig: { //邮箱配置
    host: "smtp.qq.com",//邮箱服务器  这里我用的QQ邮箱
    port: 465,//邮箱使用端口
    secure: true,//是否使用默认的465端口
    auth: {
      user: "", // 发送方邮箱地址
      pass: "" // smtp 验证码
    }
  }
```

## 功能列表

### 登录

![login](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/login.png?raw=true)



### 邮箱注册

![regist](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/regist.png?raw=true)![regist-by-qq](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/regist-by-qq.png?raw=true)



### 聊天内容

![chat-content](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/chat-content-emjoi.png?raw=true)![chat-content](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/chat-content-options.png?raw=true)



### 消息列表

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/message-tips.png?raw=true)



### 通讯录

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/user-list.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/friends-info.png?raw=true)



### 朋友圈

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/social.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/send-comment.png?raw=true)

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/replay-comment.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/delete-self-comment.png?raw=true)

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/give-a-like.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/cancle-self-like.png?raw=true)

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/publish-social.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/fixed-navbar.png?raw=true)



![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/social-message-tips.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/social-message-list.png?raw=true)

### 个人信息

![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/self-info.png?raw=true)![](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/selef-info-detail.png?raw=true)



## 不足之处

### 消息列表

- 消息数据排序应该按时间顺序

### 聊天内容

- 初始化时，应该定位到最后一条信息，而不是从第一条信息的位置
- 点击enter应该实现换行
- 没有语音功能

### 朋友圈

- 刷新页面时，调整为滚动位置
- 双击固定导航中的'朋友圈'时，滚动到顶部重新刷新数据

### 个人信息

- 修改密码功能
- 退出登录功能迁移
- 目前没有切换主题(白天、夜晚)功能



## FAQ

## 更新日志

### 2023-2-12

- 主题颜色设计
- 聊天信息，点击图片预览功能

