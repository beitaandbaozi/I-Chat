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
		sessionSelectId: 0
	},
	mutations: {
		// 更新state中的数据
		setPropName(state, res) {
			state[res.propName] = res.value
		}
	}
})

export default store
