<template>
	<view class="community-message-details">
		<scroll-view scroll-y class="scroll-container" @scrolltolower="handleLower">
			<template v-if="messageList.length > 0">
				<template v-for="(item,index) in messageList" :key="index">
					<view class="msg-item" @click="goToDetails">
						<view class="user-img">
							<image :src="item.AvatarUrl"></image>
						</view>
						<view class="desc">
							<view class="name">
								{{item.SendName}}
							</view>
							<view class="content">
								{{item.Content}}
							</view>
						</view>
						<view class="community-content">
							<image v-if="item.CommunityImg" :src="item.CommunityImg" mode=""></image>
							<view v-else>{{item.CommunityContent}}</view>
						</view>
					</view>
				</template>
			</template>
			<!-- 数据还没完全加载出来并且铺满了屏幕 -->
			<view v-if="!loadAll && !autoGet" class="more" @click="getMore">
				查看更多的消息...😏😕
			</view>
			<view v-else-if="loadAll" class="reach-bottom">
				😆👉世界尽头啦
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import store from '@/store/index.js'
	import {
		post
	} from '@/script/request.js'
	import {
		APIURL
	} from '@/script/config.js'
	import {
		tipMesg
	} from '@/script/common.js'
	import {
		ref,
		reactive
	} from 'vue'
	// onLoad接收路由参数
	onLoad((query: any) => {
		let status = query.read == 1 ? 0 : 1;
		getMessageList(status)
		if (query.read == 1) {
			//更新状态
			updateUnreadCommunityStatus()
		}
	})
	// 更新消息阅读状态
	const updateUnreadCommunityStatus = () => {
		let model = {
			receiverId: store.state.sender.Id,
			status: 1,
		}
		post(`${APIURL}/community/updateCommunityContentStateById`, model).then(res => {
			if (res?.code !== 200) {
				tipMesg(res?.message)
			}
		})
	}
	// 所有数据都已经加载完成的flag
	const loadAll = ref < boolean > (false)
	// 消息列表
	const messageList = ref < any[] > ([])
	// 获取消息列表数据
	const pageData = reactive({
		pageIndex: 1,
		pageSize: 10
	})
	const getMessageList = (status = 0, page = null, hasExtra = false) => {
		if (loadAll.value) return;
		let model = {
			receiverId: store.state.sender.Id,
			status
		}
		if (page != null) {
			model.pageIndex = pageData.pageIndex;
			model.pageSize = pageData.pageSize;
			model.extra = hasExtra ? messageList.value.length : 0;
		}
		post(`${APIURL}/community/getCommunityMessageList`, model).then(res => {
			if (res?.code === 200) {
				let item = res?.data || []
				messageList.value.push(...item)
				if (res?.data.length < pageData.pageSize) {
					// 说明加载来的数据不足10条----->说明已经加载完数据库的所有数据了
					loadAll.value = true
				}
			} else {
				tipMesg(res?.message)
			}
		})
	}
	// 滚动到底部，加载数据
	const handleLower = () => {
		if (!autoGet.value) return;
		pageData.pageIndex += 1;
		getMessageList(1, pageData as any);
	}
	// 加载更多消息
	const autoGet = ref < boolean > (false)
	const getMore = () => {
		getMessageList(1, pageData as any, true)
		autoGet.value = true;
	}
	// 点击消息，跳转到朋友圈详情, 埋坑
	const goToDetails = () => {}
</script>

<style lang="scss" scoped>
	.community-message-details {
		width: 100%;
		height: 100%;

		.scroll-container {
			height: 100%;
			width: 100%;
			overflow: auto;

			.msg-item {
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #E8E8E8;
				padding: 20rpx;

				.user-img {
					image {
						width: 100rpx;
						height: 100rpx;
						border-radius: 10rpx;
					}
				}

				.desc {
					width: 500rpx;
					font-size: 26rpx;
					padding: 10rpx;

					.name {
						width: 100%;
						color: #51619C;
						margin-bottom: 4rpx;
					}

					.content {
						width: 100%;
					}
				}

				.community-content {
					width: 100rpx;
					height: 100rpx;

					image {
						height: 100%;
						width: 100%;
					}

					view {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						font-size: 32rpx;
					}
				}
			}

			.more {
				height: 100rpx;
				width: 100%;
				color: #d8d8d8;
			}

			.reach-bottom {
				width: 100%;
				padding: 20rpx;
				color: #ccc;
				font-size: 26rpx;
				text-align: center;
			}
		}
	}
</style>
