<template>
	<view class="chat-content" id="body">
		<!-- 内容 -->
		<scroll-view scroll-y class="chat-content-scroll" :style="{height:contentHeight + 'px'}">
			<template v-for="(item) in conversitionList" :key="item.Id">
				<!-- 本人信息--右侧 -->
				<view v-if="item.SendId === store.state.sender.Id">
					<view class="my-self-infomation">
						<!-- 文本内容 -->
						<view v-if="item.Type === 0" class="text-content" v-html="item.Content">
						</view>
						<!-- 图片内容 -->
						<image v-if="item.Type === 1" class="img-content" :src="item.Content" mode="heightFix"></image>
						<!-- 视频内容 -->
						<!-- 录音 -->
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
						<!-- 录音 -->
					</view>
				</view>
			</template>
		</scroll-view>
		<!-- 文本区域 -->
		<view class="chat-botton" :style="{height:bottomHeight + 'px'}">
			<!-- 输入框 -->
			<view class="input-box" :class="popupLayerClass">
				<view class="textarea-box">
					<view class="text-mode">
						<view class="box">
							<textarea auto-height></textarea>
						</view>
						<!-- 表情包 -->
						<view class="em" @click="handleShowEmjoi">
							<img src="../../static/img/em.png">
						</view>
					</view>
				</view>
				<!-- 功能选项 -->
				<view class="more" @click="handleShowMore">
					<img src="../../static/img/option-add.png">
				</view>
				<!-- 发送按钮 -->
				<view class="send">
					<view class="btn">发送</view>
				</view>
			</view>
			<!-- 底部弹框 -->
			<view class="popup-layer" :class="popupLayerClass">
				<!-- 表情包 -->
				<view class="emjois" :class="{ hidden : hideEmoji }">
					<template v-for="(item, index) in expressions" :key="index">
						<image :src="item.icon" :title="item.title" mode="widthFix"></image>
					</template>
				</view>
				<!-- 功能 -->
				<view class="options" :class="{ hidden : hideMore }">功能</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import store from '@/store/index.js'
	import {
		computed,
		onMounted,
		ref,
		watch
	} from "vue";
	import expressions from "@/static/json/expressions.json"

	// 获取聊天内容
	const conversitionList = computed(() => {
		return store.state.conversitionList.filter((item: any) => {
			return (item.SendId === store.state.sender.Id && item.ReciverId === reciver.value.Id) ||
				(item.ReciverId === store.state.sender.Id && item.SendId === reciver.value.Id)
		})
	})

	// 底部弹框
	const windowHeight = ref < number > (0)
	const contentHeight = ref < number > (0)
	const bottomHeight = ref < number > (50)
	const popupLayerClass = ref < string > ('')
	watch(popupLayerClass, (newValue) => {
		if (newValue === 'showLayer') {
			bottomHeight.value = 238;
		} else {
			bottomHeight.value = 50;
		}
		contentHeight.value = windowHeight.value - bottomHeight.value;
	})
	// 打开弹框
	const openDrew = () => {
		popupLayerClass.value = 'showLayer'
	}
	// 关闭弹框
	const closeDrew = () => {
		popupLayerClass.value = ''
		setTimeout(() => {
			hideMore.value = true;
			hideEmoji.value = true;
		}, 150);
	}

	// 展示更多功能和展示表情包功能
	const hideEmoji = ref < boolean > (true)
	const hideMore = ref < boolean > (true)
	// 展示更多
	const handleShowMore = () => {
		// 隐藏表情包
		hideEmoji.value = true
		if (hideMore.value) {
			hideMore.value = false;
			openDrew()
		} else {
			closeDrew()
		}
	}
	// 展示表情包
	const handleShowEmjoi = () => {
		// 隐藏更多功能
		hideMore.value = true
		if (hideEmoji.value) {
			hideEmoji.value = false;
			openDrew()
		} else {
			closeDrew()
		}
	}

	// 获取设备信息
	const getTelephoneInfo = async () => {
		uni.getSystemInfo({
			success: (res) => {
				// 设置滚动高度
				const query = wx.createSelectorQuery();
				query.select('#body').boundingClientRect();
				query.exec(res => {
					res.map((item) => {
						windowHeight.value = item.height;
					})
				})
				contentHeight.value = windowHeight.value - bottomHeight.value;
			}
		})
	}

	// 动态设置标题
	const reciver = computed(() => store.state.reciver)
	onMounted(() => {
		uni.setNavigationBarTitle({
			title: reciver.value.Name
		})
		// 获取设备信息
		getTelephoneInfo()
	})
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
			transition: all .15s linear;

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
				transition: all .15s linear;
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

				&.showLayer {
					transform: translate3d(0, -50vw, 0);
				}
			}
		}

		// 底部弹框
		.popup-layer {
			transition: all .15s linear;
			width: 100%;
			height: 50vw;
			padding-bottom: 15px;
			background-color: #fff;
			border-top: solid 0.5px #ddd;
			position: fixed;
			z-index: 20;
			top: 100%;
			overflow-y: auto;

			&.showLayer {
				transform: translate3d(0, -50vw, 0);
			}

			.hidden {
				display: none;
			}

			// 表情包
			.emjois {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				padding: 0 20rpx;

				image {
					margin: 10rpx;
					width: 60rpx;
					height: 60rpx
				}


			}
		}
	}
</style>
