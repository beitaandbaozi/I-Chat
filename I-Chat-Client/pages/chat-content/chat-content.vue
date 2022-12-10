<template>
	<view class="chat-content" id="body">
		<!-- 内容 -->
		<scroll-view scroll-y class="chat-content-scroll" :style="{height:contentHeight + 'px'}">
			<template v-for="(item) in conversitionList" :key="item.Id">
				<!-- 本人信息--右侧 -->
				<view v-if="item.SendId === store.state.sender.Id">
					<view class="my-self-infomation">
						<!-- 文本内容 -->
						<view v-show="item.Type === 0" class="text-content" v-html="item.Content">
						</view>
						<!-- 图片内容 -->
						<image v-show="item.Type === 1" class="img-content" :src="item.Content" mode="heightFix">
						</image>
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
						<view v-show="item.Type === 0" class="text-content" v-html="item.Content">
						</view>
						<!-- 图片内容 -->
						<image v-show="item.Type === 1" class="img-content" :src="item.Content" mode="heightFix">
						</image>
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
							<textarea auto-height="true" @keydown="savePoint" @keyup="savePoint"
								@onmousedown="savePoint" @onmouseup="savePoint" v-model="sendContent"></textarea>
						</view>
						<!-- 表情包 -->
						<view class="em" @click="handleShowEmjoi">
							<svg class="icon btn-em" aria-hidden="true">
								<use xlink:href="#icon-gentleman"></use>
							</svg>
						</view>
					</view>
				</view>
				<!-- 功能选项 -->
				<view class="more" @click="handleShowMore">
					<svg class="icon btn-more" aria-hidden="true">
						<use xlink:href="#icon-biaoqing1"></use>
					</svg>
				</view>
				<!-- 发送按钮 -->
				<view class="send" @click="sendMessage">
					<view class="btn">发送</view>
				</view>
			</view>
			<!-- 底部弹框 -->
			<view class="popup-layer" :class="popupLayerClass">
				<!-- 表情包 -->
				<view class="emjois" :class="{ hidden : hideEmoji }">
					<template v-for="(item, index) in expressions" :key="index">
						<image :src="item.icon" :title="item.title" @click="insertEmjoi(item.title)" mode="widthFix">
						</image>
					</template>
				</view>
				<!-- 功能 -->
				<view class="options" :class="{ hidden : hideMore }">
					<template v-for="(item,index) in moreIcon" :key="index">
						<svg class="icon btn-option" aria-hidden="true">
							<use :xlink:href="item.icon"></use>
						</svg>
					</template>
				</view>
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
	import {
		moreIcon
	} from '@/script/config.js'
	import {
		tipMesg
	} from '@/script/common.js'

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

	// 文本域内容
	const sendContent = ref < string > ('')
	// 焦点开始位置
	const start = ref < number > (0)
	// 焦点结束位置
	const end = ref < number > (0)
	// 保存焦点位置
	const savePoint = () => {
		console.log('savePoint')
		uni.getSelectedTextRange({
			complete: (res) => {
				start.value = res.start;
				end.value = res.end;
			}
		})
	}

	// 插入表情包
	const insertEmjoi = (emjoi: string) => {
		if (start.value != undefined && end.value != undefined) {
			const pre = sendContent.value.substr(0, start.value)
			const last = sendContent.value.substr(end.value)
			sendContent.value = pre + last + emjoi
			start.value = emjoi.length
			end.value = emjoi.length
		} else {
			sendContent.value += emjoi
		}
	}
	onMounted(() => {
		uni.setNavigationBarTitle({
			title: reciver.value.Name
		})
		// 获取设备信息
		getTelephoneInfo()
	})

	// 信息到本地显示
	const sendMessageToLocal = (data) => {
		let conversitionList = store.state.conversitionList;
		conversitionList.push(data)
		store.commit('setPropName', {
			propName: 'conversitionList',
			value: conversitionList
		})
	}
	// 真实发送消息
	const sendMessageToSocket = (data) => {
		let conversitionListData = {
			Conversition: data,
			ReciverId: reciver.value.Id,
			Sender: store.state.sender
		}
		store.state.socket.emit('sendMsg', conversitionListData)
	}
	// 发送消息
	const sendMessage = () => {
		let message = sendContent.value.trim()
		// 判断是否是空信息
		if (!message.length) {
			tipMesg('不能发送空消息！')
			return
		}
		// 处理表情包   利用正则匹配到是表情包的数据（[害怕]）  然后转换成图片的形式
		const pattern = /\[.*?\]/g;
		const matchResult = message.match(pattern);
		// matchResult为空的话，说明是不包含表情包，都是文本，以文本的情况处理
		if (matchResult) {
			matchResult.forEach((item) => {
				// 去除 []
				const imgName = item.substr(0, item.length - 1).substr(1)
				// 拼接成图片
				const url = `<img src="https://howcode.online/emo/${imgName}.png" class="emo-image">`
				// 替代原来的内容
				message = message.replace(item, url)
			})
		}
		// 处理文本内容  转换成P标签
		message = `<p>${message}</p>`
		// 处理发送需要的参数
		let noCode = +new Date() + ""
		let conversition = {
			SendId: store.state.sender.Id,
			ReciverId: reciver.value.Id,
			Content: message,
			Type: 0,
			State: 0,
			NoCode: noCode,
			CreateDateUtc: '',
			Title: '',
			Description: '',
			Label: '',
			Thumbnail: '',
			ReadFlag: false,
			Avatar: store.state.sender.Avatar,
			SoundStatus: 0
		}
		if (store.state.socket == null) {
			tipMesg('socket实例为空');
			return;
		}
		sendMessageToLocal(conversition)
		sendMessageToSocket(conversition)
	}
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

							.btn-em {
								width: 50rpx;
								height: 50rpx;
							}

						}
					}
				}

				.more {
					flex-shrink: 0;

					.btn-more {
						width: 50rpx;
						height: 50rpx;
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
				display: none !important;
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

			// 功能
			.options {
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.btn-option {
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
</style>
