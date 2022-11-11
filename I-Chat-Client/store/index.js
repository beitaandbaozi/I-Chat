import {
	createStore
} from 'vuex'
const store = createStore({
	state: {
		sender: null
	},
	mutations: {
		// 更新state中的数据
		setPropName(state, res) {
			state[res.propName] = res.value
		}
	}
})

export default store
