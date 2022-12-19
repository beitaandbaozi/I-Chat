import {
	createStore
} from 'vuex'
const store = createStore({
	state: {
		sender: null,
		// 好友列表
		allSessionList: [],
		// socket
		socket: null,
		// 时间戳
		noCode: +new Date(),
		// 本地消息--聊天记录
		// {Avatar: "https://q4.qlogo.cn/headimg_dl?dst_uin=1660797375&spec=100",Content: "<p>1</p>",CreateDateUtc: "2022-11-28- 20:07:01",...}
		conversitionList: [],
		// 发送信息的好友
		sessionList: [],
		sessionSelectId: 0,
		allSessionSelectId: 0,
		// 接收人用户信息
		readyReciver: null,
		// 发送的聊天对象信息
		reciver: null
	},
	mutations: {
		// 更新state中的数据
		setPropName(state, res) {
			state[res.propName] = res.value
		},
		changeReaded(state, res) {
			let userConversition = store.state.conversitionList.filter(
				(x) =>
				x.SendId == res &&
				x.ReciverId == store.state.sender.Id &&
				!x.ReadFlag
			);
			if (userConversition.length > 0) {
				userConversition.map((x) => {
					x.ReadFlag = true;
				});
			}
			let query = {
				SendId: res,
				ReciverId: store.state.sender.Id,
			};
			store.state.socket.emit("changeMsgRead", query);
		},
	}
})

export default store
