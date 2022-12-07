<script>
	import "@/static/iconfont/iconfont.js"
	import {
		isLogin,
		reLaunch
	} from '@/script/common'
	import store from '@/store/index'

	export default {
		onLaunch: function() {
			if (isLogin()) {
				// 重新赋值sender数据
				const sender = uni.getStorageSync('sender');
				if (sender) {
					store.commit('setPropName', {
						propName: 'sender',
						// 这里是从localStorage中获取的，记得要转换一下数据格式
						value: JSON.parse(sender)
					})
					// 路由跳转
					reLaunch('/chat-user/chat-user')
				}
			} else {
				reLaunch('/index/index')
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("@/static/iconfont/iconfont.css");

	/*每个页面公共css */
	uni-page-body,
	page {
		height: 100%;
	}
</style>
