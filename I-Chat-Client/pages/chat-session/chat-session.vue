<template>
	<view class="chat-session">
		<scroll-view scroll-y class="session-list">
			<template v-if="sessionList.length > 0">
				<template v-for="(item,index) in sessionList" :key="index">
					<view class="user-list" :data-index="index" @touchstart="handleDrawStart($event)"
						@touchmove="handleDrawMove($event)" @touchend="handleDrawEnd($event)"
						:style="{right: item.RightPadding + 'rpx'}">
						<!-- 数据信息 -->
						<view class="user-content">
							<!-- 左侧 -->
							<view class="left">
								<!-- 头像 -->
								<image :src="item.Avatar"></image>
								<!-- 未读消息 -->
								<template v-if="UnreadCount(item.Id) > 0">
									<view class="unread-count">{{UnreadCount(item.Id)}}</view>
								</template>
							</view>
							<!-- 右侧 -->
							<view class="right">
								<!-- 昵称 -->
								<view class="nick-name">
									{{item.Name}}
								</view>
								<!-- 信息 -->
								<view class="content" v-html="getMessageContent(item.Id)"></view>
							</view>
						</view>
						<!-- 功能 -->
						<view class="options">
							<!-- 标记未读 -->
							<view class="btn-tag">标记未读</view>
							<!-- 不显示 -->
							<view class="btn-top">不显示</view>
							<!-- 删除 -->
							<view class="btn-remove">删除</view>
						</view>
					</view>
				</template>
			</template>
			<template v-else>
				<view>暂时没有消息</view>
			</template>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import {
		computed,
		ref,
	} from "vue";
	import store from '@/store/index.js'
	// 当前消息数据信息
	const sessionList = computed(() => store.state.sessionList)
	// 未读消息数量
	const UnreadCount = computed(() => (id: number) => {
		let currentContent = store.state.conversitionList.filter(
			(item) =>
			item.SendId == id && item.ReciverId == store.state.sender.Id && !item.ReadFlag
		);
		return currentContent.length > 99 ? "99+" : currentContent.length;
	})
	// 最后一条消息的类型
	const getMessageContent = computed(() => (id: number) => {
		let result = '';
		// 根据ID获取对应的聊天内容
		let currentContent = store.state.conversitionList.filter(
			(item) =>
			(item.SendId == store.state.sender.Id && item.ReciverId == id) ||
			(item.SendId == id && item.ReciverId == store.state.sender.Id)
		)
		// 根据最后一条内容的类型来判定消息以哪种形式呈现
		// 文本：照常输出
		// 图片: [图片]
		// 视频: [视频]
		if (currentContent.length > 0) {
			let len = currentContent.length - 1;
			switch (currentContent[len].Type) {
				// 文字
				case 0:
					result = currentContent[len].Content;
					break;
					// 图片
				case 1:
					result = '[图片]'
					break;
					// 视频
				case 2:
					result = '[视频]'
					break;
				default:
					break;
			}
		}
		return result
	})
	// 拖拽呈现功能按钮
	// 鼠标开始拖动的位置
	const startX = ref < number > (0)
	// 按钮的大小->距离
	const delBtnWidth = ref < number > (520)
	// 开始拖动
	const handleDrawStart = (e) => {
		console.log('开始拖动')
		let touchesData = e.touches[0]
		// 这里是将其他的拖动状态设置成0
		for (let index in store.state.sessionList) {
			store.state.sessionList[index].RightPadding = 0;
		}
		startX.value = touchesData.clientX
	}
	// 手指触摸后移动
	const handleDrawMove = (e) => {
		console.log('手指触摸后移动')
		let touch = e.touches[0];
		console.log('手指触摸后移动 startX', startX.value)
		console.log('手指触摸后移动 clientX', touch.clientX)
		// 能够将功能拖出来的条件
		let disX = startX.value - touch.clientX;
		console.log('手指触摸后移动 disX', disX)
		let sessionList = store.state.sessionList;
		if (disX >= 20) {
			if (disX > delBtnWidth.value) {
				disX = delBtnWidth.value;
			}
			// 自定义属性data-index
			sessionList[e.currentTarget.dataset.index].RightPadding = disX;
		} else {
			sessionList[e.currentTarget.dataset.index].RightPadding = 0;
		}
	}
	// 手指触摸结束 -----> 拖到一半停住了，这个时候需要完全展示
	const handleDrawEnd = (e) => {
		console.log('手指触摸结束')
		let sessionList = store.state.sessionList;
		let item = sessionList[e.currentTarget.dataset.index];
		if (item.RightPadding >= delBtnWidth.value / 2) {
			sessionList[e.currentTarget.dataset.index].RightPadding = delBtnWidth.value;
		} else {
			sessionList[e.currentTarget.dataset.index].RightPadding = 0;
		}
	}
</script>

<style lang="scss" scoped>
	.chat-session {
		height: 100vh;
		width: 100%;

		.session-list {
			height: 100%;
			width: 100%;
			overflow: auto;

			.user-list {
				display: flex;
				align-items: center;

				height: 150rpx;
				width: 100%;

				position: relative;

				// 手指拖动呈现删除按钮动画
				transition: all .2s linear;

				// 信息
				.user-content {
					height: 100%;
					width: 100%;
					display: flex;

					// 左侧
					.left {
						width: 18%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;

						position: relative;

						// 头像
						image {
							border-radius: 5%;
							height: 100rpx;
							width: 100rpx;
						}

						// 未读消息数量
						.unread-count {
							position: absolute;
							top: 8rpx;
							right: 2rpx;

							height: 30rpx;
							width: 30rpx;
							border-radius: 50%;
							line-height: 30rpx;
							padding: 5rpx;
							text-align: center;
							background: #EE593C;
							color: #fff;
							font-size: 12px;
						}
					}

					// 右侧
					.right {
						width: 82%;
						height: 100%;
						border-bottom: 1px solid #EFEFEF;
						text-align: left;

						// 昵称
						.nick-name {
							height: 40px;
							line-height: 40px;
						}

						// 消息内容
						.content {
							font-size: 12px !important;
							color: #707070;
							width: 98%;
							// 超过时以省略号处理
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
				}

				// 选项
				.options {
					display: flex;

					position: absolute;
					top: 0;
					right: -520rpx;

					width: 520rpx;
					height: 150rpx;
					color: white;

					text-align: center;
					line-height: 150rpx;
					// 标记未读
					.btn-tag {
						width: 200rpx;
						height: 100%;
						background-color: #3D83E5;
					}

					// 不显示
					.btn-top {
						width: 160rpx;
						height: 100%;
						background-color: #EEA151;
					}

					// 删除
					.btn-remove {
						width: 160rpx;
						height: 100%;
						background-color: #FF5252;
					}
				}
			}

		}
	}
</style>
