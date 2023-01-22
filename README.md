![logo](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/logo.png?raw=true)

​                                                                     ![vue3](https://img.shields.io/badge/vue3-3)![typescript](https://img.shields.io/badge/typescript-red)![uniapp](https://img.shields.io/badge/uniapp-orange)![mysql](https://img.shields.io/badge/mysql->=8.0-yellow)![nodejs](https://img.shields.io/badge/node->=12.0.0-ff69b4)

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

### 功能列表

#### 登录

![login](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/login.png?raw=true)



#### 邮箱注册

![regist](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/regist.png?raw=true)

![regist-by-qq](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/regist-by-qq.png?raw=true)

#### 聊天内容

![content](https://github.com/beitaandbaozi/I-Chat/blob/main/DocumentImage/content.png?raw=true)



- 消息列表

- 通讯录

- 好友信息

- 记录历史聊天内容

- 切换主题

- 发送视频

- 发送语音（仅移动端具备）