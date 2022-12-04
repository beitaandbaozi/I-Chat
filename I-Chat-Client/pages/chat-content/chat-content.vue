<template>
	<view class="chat-content">
		<!-- 内容 -->
		<scroll-view scroll-y class="chat-content-scroll">
			<view v-for="(item) in conversitionList" :key="item.Id">
				<!-- 本人信息--右侧 -->
				<view v-if="item.SendId === store.state.sender.Id">
					<view class="my-self-infomation">
						<!-- 文本内容 -->
						<view v-if="item.Type === 0" class="text-content" v-html="item.Content">
						</view>
						<!-- 图片内容 -->
						<image v-if="item.Type === 1" class="img-content" :src="item.Content" mode="heightFix"></image>
						<!-- 视频内容 -->
						<!-- 头像 -->
						<view class="header">
							<img :src="item.Avatar">
						</view>
					</view>
				</view>

				<!-- 好友信息--左侧 -->
				<view v-else-if="item.SendId === reciver.Id">
					<view class="friend-infomation">
						<!-- 头像 -->
						<view class="header">
							<img :src="item.Avatar">
						</view>
						<!-- 文本内容 -->
						<view v-if="item.Type === 0" class="text-content" v-html="item.Content">
						</view>
						<!-- 图片内容 -->
						<image v-if="item.Type === 1" class="img-content" :src="item.Content" mode="heightFix"></image>
						<!-- 视频内容 -->
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 文本区域 -->
		<view class="chat-botton">
			<!-- 输入框 -->
			<view class="input-box">
				<view class="textarea-box">
					<view class="text-mode">
						<view class="box">
							<textarea auto-height></textarea>
						</view>
						<!-- 表情包 -->
						<view class="em">
							<img src="../../static/img/em.png">
						</view>
					</view>
				</view>
				<!-- 功能选项 -->
				<view class="more">
					<img src="../../static/img/option-add.png">
				</view>
				<!-- 发送按钮 -->
				<view class="send">
					<view class="btn">发送</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script lang="ts" setup>
	import store from '@/store/index.js'
	import {
		computed,
		onMounted
	} from "vue";

	// 动态设置标题
	const reciver = computed(() => store.state.reciver)
	onMounted(() => {
		uni.setNavigationBarTitle({
			title: reciver.value.Name
		})
	})

	// 获取聊天内容
	const conversitionList = computed(() => {
		return store.state.conversitionList.filter((item: any) => {
			return (item.SendId === store.state.sender.Id && item.ReciverId === reciver.value.Id) ||
				(item.ReciverId === store.state.sender.Id && item.SendId === reciver.value.Id)
		})
	})
	console.log(conversitionList.value)
</script>

<style lang="scss" scoped>
	.chat-content {
		height: 100vh !important;

		// 内容
		.chat-content-scroll {
			background: rgb(238, 238, 238);
			width: 100%;
			height: calc(100vh - 100rpx);
			overflow-y: auto;

			// 用户消息
			.my-self-infomation {
				margin-top: 40rpx;
				margin-right: 20rpx;
				display: flex;
				justify-content: flex-end;

				// 文本框
				.text-content {
					margin-right: 40rpx;
					position: relative;
					max-width: 600rpx;
					height: auto;
					border-radius: 20rpx;
					background-color: rgb(229, 243, 253);
					color: #000;
					padding: 10rpx 14rpx;
					line-height: 60rpx;

					&::after {
						content: '';
						display: block;
						width: 0;
						height: 0;
						position: absolute;
						right: -25rpx;
						top: 30rpx;
						border-top: 15px solid rgb(229, 243, 253);
						border-right: 15px solid transparent;
					}
				}

				// 图片
				.img-content {
					width: 400rpx;
					margin-right: 40rpx;
					border-radius: 20rpx;
					// 后端还未写存放图片的路径，所以先用颜色替代
					background-color: #55aaff;
				}

				.header {
					width: 60rpx;
					height: 60rpx;

					img {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
			}

			// 好友消息
			.friend-infomation {
				margin-top: 40rpx;
				margin-left: 20rpx;
				display: flex;
				justify-content: flex-start;

				// 头像
				.header {
					width: 60rpx;
					height: 60rpx;

					img {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}

				// 文本消息
				.text-content {
					margin-left: 40rpx;
					position: relative;
					max-width: 600rpx;
					height: auto;
					border-radius: 20rpx;
					background-color: rgb(255, 255, 255);
					color: #000;
					padding: 10rpx 14rpx;
					line-height: 60rpx;

					&::before {
						content: '';
						display: block;
						width: 0;
						height: 0;
						position: absolute;
						left: -25rpx;
						top: 30rpx;
						border-top: 15px solid rgb(255, 255, 255);
						border-left: 15px solid transparent;
					}
				}

				// 图片
				.img-content {
					width: 400rpx;
					margin-left: 40rpx;
					border-radius: 20rpx;
					// 后端还未写存放图片的路径，所以先用颜色替代
					background-color: #ffaa00;
				}
			}
		}

		// 输入框
		.chat-botton {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100rpx;
			background-color: #f2f2f2;
			position: fixed;
			z-index: 20;
			bottom: -2rpx;
			border-top: solid 1rpx #ddd;
			// transition: all .15s linear;

			.input-box {
				display: flex;
				align-items: center;
				width: 100%;
				// 设置最小高度是方便文本域超出的时候自动往上撑 所以不能定死
				min-height: 100rpx;
				padding: 0 1%;
				background-color: #f2f2f2;
				position: fixed;
				z-index: 20;
				bottom: -2px;
				// transition: all .15s linear;
				border-top: solid 0.5px #ddd;

				.textarea-box {
					width: 100%;
					min-height: 70rpx;

					.text-mode {
						display: flex;
						width: 100%;
						min-height: 70rpx;
						background-color: #fff;
						border-radius: 40rpx;

						.box {
							width: 100%;
							padding-left: 30rpx;
							min-height: 70rpx;
							display: flex;
							align-items: center;

							textarea {
								width: 100%;
							}
						}

						.em {
							margin-top: 10rpx;
							flex-shrink: 0;
							width: 50rpx;
							height: 50rpx;

							img {
								width: 100%;
								height: 100%
							}
						}
					}
				}

				.more {
					flex-shrink: 0;
					width: 50rpx;
					height: 50rpx;

					img {
						width: 100%;
						height: 100%
					}
				}

				.send {
					flex-shrink: 0;
					width: 100rpx;
					height: 100rpx;
					display: flex;
					align-items: center;

					.btn {
						width: 90rpx;
						height: 56rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						background: linear-gradient(to right, #55aaff, #00aaff);
						color: #fff;
						border-radius: 6rpx;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
