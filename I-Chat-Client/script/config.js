const APIURL = "/api";
const SOCKETAPI = "ws://localhost:9527";

// 邮箱检验
const emailValidate =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 用户名校验
const userNanmeValidate = /^[\w-]{4,16}$/

// 聊天内容更多功能icon
const moreIcon = [{
		name: "照片",
		icon: "#icon-tupian"
	},
	{
		name: "语音",
		icon: "#icon-yuyinshibieyouhua"
	},
	{
		name: "视频",
		icon: "#icon-shipinbofang"
	},
]


export {
	APIURL,
	SOCKETAPI,
	emailValidate,
	userNanmeValidate,
	moreIcon
}
