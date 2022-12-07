<template>
	<view class="friend-info-detail">
		<view class="header">
			<view class="left">
				<img :src="readyReciverInfo.Avatar" mode="widthFix">
			</view>
			<view class="right">
				<h3>{{readyReciverInfo.Name}}</h3>
				<text>昵称: {{readyReciverInfo.NickName}}</text>
				<text>微信号: {{readyReciverInfo.Mobile}}</text>
				<text>地区: {{readyReciverInfo.Region}}</text>
			</view>
		</view>
		<!-- 标签 -->
		<view class="tip">
			<text class="title">标签</text>
			<svg class="icon img-more" aria-hidden="true">
				<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
			</svg>
		</view>
		<!-- 朋友权限 -->
		<view class="tip">
			<text class="title">朋友权限</text>
			<svg class="icon img-more" aria-hidden="true">
				<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
			</svg>
		</view>
		<!-- 朋友圈 -->
		<view class="tip social">
			<text class="title">朋友圈</text>
			<svg class="icon img-more" aria-hidden="true">
				<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
			</svg>
		</view>
		<!-- 更多信息 -->
		<view class="tip">
			<text class="title">更多</text>
			<svg class="icon img-more" aria-hidden="true">
				<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
			</svg>
		</view>
		<!-- 交互 -->
		<view class="option">
			<view class="sendMesg" @click="sendMesg">
				<!-- <img src="../../static/img/send-message.png" class="img-option"> -->
				<svg class="icon img-option" aria-hidden="true">
					<use xlink:href="#icon-xiaoxi1"></use>
				</svg>
				<text>发消息</text>
			</view>
			<view class="sendVoice">
				<svg class="icon img-option" aria-hidden="true">
					<use xlink:href="#icon-shipin_o"></use>
				</svg>
				<text>音视频通话</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import store from '@/store/index.js'
	import {
		computed
	} from "vue";

	const readyReciverInfo = computed(() => store.state.readyReciver)

	// 发送消息
	const sendMesg = () => {
		// 设置当前聊天对象的Id
		store.commit("setPropName", {
			propName: "sessionSelectId",
			value: store.state.readyReciver.Id
		})
		// 设置聊天对象信息
		store.commit("setPropName", {
			propName: "reciver",
			value: store.state.readyReciver
		})
		console.log('sessionList', store.state.sessionList)
		let len = store.state.sessionList.filter((item) => item.Id === store.state.readyReciver.Id)?.length ?? 0;
		if (len === 0) {
			let sessionList = store.state.sessionList
			sessionList.push(store.state.readyReciver)
			store.commit("setPropName", {
				propName: "sessionList",
				value: sessionList
			})
			let query = {
				SendId: store.state.sender.Id,
				Revicer: store.state.readyReciver
			}
			store.state.socket.emit("insertHistorySession", query)
		}
		store.commit("changeReaded", store.state.readyReciver.Id)
		// 跳转
		uni.navigateTo({
			url: '/pages/chat-content/chat-content',
		});
	}
</script>

<style lang="scss" scoped>
	.friend-info-detail {
		height: 100vh;
		background: rgb(237, 237, 237);

		.header {
			padding: 30rpx 0 30rpx 30rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			height: 220rpx;
			border-bottom: 1px solid rgb(237, 237, 237);

			.left {
				img {
					width: 110rpx;
					height: 110rpx;
					border-radius: 10rpx;
				}

				margin-bottom: 40rpx;
			}

			.right {
				margin-left: 30rpx;
				display: flex;
				flex-direction: column;

				h3 {
					margin-bottom: 10rpx;
				}

				text {
					font-size: 14px;
					color: rgb(161, 161, 161)
				}
			}
		}

		.tip {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			padding: 0 10rpx;
			background: #fff;
			border-bottom: 1px solid rgb(237, 237, 237);

			.title {
				font-weight: bold;
				font-size: 14px;
			}

			.img-more {
				width: 35rpx;
				height: 35rpx;
			}
		}

		.social {
			height: 110rpx;
			margin-top: 15rpx;
		}

		.option {
			margin-top: 15rpx;

			.sendMesg,
			.sendVoice {
				height: 90rpx;
				background-color: #fff;
				border-bottom: 1px solid rgb(237, 237, 237);
				display: flex;
				justify-content: center;
				align-items: center;

				.img-option {
					width: 50rpx;
					height: 50rpx;
				}

				text {
					color: #8B95AE;
					font-weight: bolder;
				}
			}
		}
	}
</style>
