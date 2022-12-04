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
		// 本地消息
		conversitionList: [],
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
