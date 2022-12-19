<template>
	<view class="chat-session">
		<scroll-view scroll-y class="session-list">
			<template v-if="sessionList.length > 0">
				<template v-for="(item,index) in sessionList" :key="index">
					<view class="user-list">
						<!-- 左侧 -->
						<view class="left">
							<!-- 头像 -->
							<image :src="item.Avatar"></image>
							<!-- 未读消息 -->
							<!-- 记得用v-if判断 -->
							<view class="unread-count">1</view>
						</view>
						<!-- 右侧 -->
						<view class="right">
							<!-- 昵称 -->
							<view class="nick-name">
								{{item.Name}}
							</view>
							<!-- 信息 -->
							<view class="content">

							</view>
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
	} from "vue";
	import store from '@/store/index.js'
	// 当前消息数据信息
	const sessionList = computed(() => store.state.sessionList)
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
		}
	}
</style>
