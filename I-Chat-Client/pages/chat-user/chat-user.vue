<template>
	<view class="chat-user">
		<scroll-view scroll-y class="session-list">
			<!-- 搜索框 -->
			<search-by-input></search-by-input>
			<!-- 选项 -->
			<option-by-user></option-by-user>
			<!-- 好友列表 -->
			<list-by-user></list-by-user>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import SearchByInput from './components/search-by-input.vue'
	import OptionByUser from './components/option-by-user.vue'
	import ListByUser from './components/list-by-user.vue'

	import io from '@hyoga/uni-socket.io';
	import {
		SOCKETAPI
	} from '@/script/config.js'
	import store from '@/store/index.js'
	import {
		logout,
		tipMesg,
		reLaunch,
		snedLocal
	} from "@/script/common.js"
	// 初始化socket
	const initSocket = () => {
		// 创建socket对象
		const socket = io(SOCKETAPI, {
			query: {},
			transports: ['websocket', 'polling'],
			timeout: 5000
		})
		// 放入vuex
		store.commit('setPropName', {
			propName: 'socket',
			value: socket
		})
		// socket连接
		store.state.socket.on("connect", () => {
			console.log('前端socket连接')
			// 连接服务器的socket
			store.state.socket.emit("joinChat", {
				SendId: store.state.sender.Id,
				SendName: store.state.sender.Name,
				ReviceId: -1,
				ReviceName: "",
				NoCode: store.state.noCode
			})
		})
		// 多设备在线时，强制旧设备下线
		store.state.socket.on('squeezeOut', (data) => {
			if (data.noCode === store.state.noCode) {
				// 退出登录
				logout()
				// 消息提醒
				tipMesg("账户在其他地方登陆，会话已断开")
				// 路由跳转
				reLaunch('/index/index')
			}
		})
		// 服务端更新完用户端状态，socket连接成功，加入会话成功
		store.state.socket.on("joinSuccess", (data) => {
			console.log('socket----->joinSuccess', data)
			store.commit('setPropName', {
				propName: 'conversitionList',
				value: data.conversion
			});
			if (store.state.sessionList.length === 0) {
				store.commit('setPropName', {
					propName: 'sessionList',
					value: data.historySessionList
				});
			}
		})
		// 断开连接
		store.state.socket.on("disconnect", () => {
			console.log('socket连接断开')
		})
		// 接收信息
		store.state.socket.on("reviceMsg", (data) => {
			console.log('reviceMsg - 接收信息')
			if (data.ReciverId == store.state.sender.Id) {
				for (let item of store.state.sessionList) {
					if (item.id == data.SendId && store.state.sessionSelectId == data.SendId) {
						data.ReadFlag = true;
						let query = {
							SendId: data.SendId,
							ReciverId: store.state.sender.Id
						}
						store.state.socket.emit("changeMsgRead", query)
						break;
					}
				}
			}
			snedLocal(data)
			let len = store.state.sessionList.filter((x) => x.Id == data.SendId)?.length ?? 0;
			if (len === 0) {
				let item = store.state.allSessionList.filter((x) => {
					x.Id == data.SendId
				})
				let sessionList = store.state.sessionList
				sessionList.push(...item)
				store.commit('setPropName', {
					propName: 'sessionList',
					value: sessionList
				})
			}
		})
		// 修改信息状态
		store.state.socket.on("changeMsgState", (data) => {
			console.log('changeMsgState - 修改信息状态')
			let conversitionList = store.state.conversitionList
			conversitionList.map((x) => {
				if (x.NoCode != null && x.NoCode == data.NoCode) {
					x.State = 1;
				}
			})
			store.commit("setPropName", {
				propName: "conversitionList",
				value: conversitionList
			})
		})
	}
	initSocket()
</script>

<style lang="scss" scoped>
	.chat-user {
		height: 100%;
		background-color: rgb(237, 237, 237);

		.session-list {
			height: 100%;
			overflow: auto;
		}
	}
</style>
