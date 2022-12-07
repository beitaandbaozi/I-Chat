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

// 好友列表选项
const friendOption = [{
		title: "新的朋友",
		icon: "#icon-Button-tianjiahaoyou"
	},
	{
		title: "仅聊天的朋友",
		icon: "#icon-xiaoxi"
	},
	{
		title: "群聊",
		icon: "#icon-haoyou"
	},
	{
		title: "标签",
		icon: "#icon-biaoqian"
	},
	{
		title: "公众号",
		icon: "#icon-gongzhonghao"
	}
]

// 我的页面选项
const mineOption = [{
		id: 1,
		title: "服务",
		icon: "#icon-fuwu"
	},
	{
		id: 2,
		title: "收藏",
		icon: "#icon-shoucang"
	},
	{
		id: 3,
		title: "朋友圈",
		icon: "#icon-xingzhuang-tupian"
	},
	{
		id: 4,
		title: "卡包",
		icon: "#icon-sekuaiqiabao"
	},
	{
		id: 5,
		title: "表情",
		icon: "#icon-biaoqing"
	},
	{
		id: 6,
		title: "设置",
		icon: "#icon-shezhi"
	}
]

export {
	APIURL,
	SOCKETAPI,
	emailValidate,
	userNanmeValidate,
	moreIcon,
	friendOption,
	mineOption
}
