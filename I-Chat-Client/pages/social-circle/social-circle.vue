<template>
	<view class="social-circle">
		<scroll-view scroll-y class="scroll-container" @scroll="handleScroll" refresher-enabled="true"
			:refresher-triggered="refresherFlag" :refresher-threshold="50" refresher-background="#000"
			:scroll-top="scrollTop" @refresherrefresh="onRefresh" @scrolltolower="handleLoadMore">
			<!-- 顶部 -->
			<HeaderBySocial v-model:navbarFlag="navbarFlag" @handleNavRefresh="handleNavRefresh"
				@handleRefresh="onRefresh" />
			<!-- 消息提醒 -->
			<template v-if="unReadCommunityList.length > 0">
				<view class="unread-message-container">
					<view class="unread-message" @click="handleGotoMessageDetail">
						<view class="avatar">
							<image :src="unReadCommunityList[unReadCommunityList.length - 1].AvatarUrl"></image>
						</view>
						<view class="content">{{unReadCommunityList.length}}条新消息</view>
					</view>
				</view>
			</template>
			<template v-if="communityContentList.length > 0">
				<view class="content">
					<template v-for="(item,index) in communityContentList" :key="index">
						<ContentBySocial :content="item" @handleRefresh="onRefresh" />
					</template>
				</view>
			</template>
			<template v-else>
				<view class="empty">
					数据还没加载出来呢🥺😢😭
				</view>
			</template>
			<!-- 滑动到底部加载数据时，数据上限 -->
			<template v-if="loadMore">
				<view class="load-more">😆👉世界尽头啦</view>
			</template>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import HeaderBySocial from './components/header-by-social.vue'
	import ContentBySocial from './components/content-by-social.vue'
	import {
		nextTick,
		onMounted,
		ref
	} from "vue";
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

	// 导航flag
	const navbarFlag = ref < boolean > (false)
	// 滚动触发
	const handleScroll = (e) => {
		oldScrollTop.value = e.detail.scrollTop
		if (e.detail.scrollTop >= 345) {
			navbarFlag.value = true;
		} else {
			navbarFlag.value = false;
		}
	}
	// 获取朋友圈数据
	const pageIndex = ref < number > (1)
	const pageSize = ref < number > (10)
	// 存储朋友圈数据
	const communityContentList = ref < any > ([])
	const getCommunityData = (isRefrsh ? : boolean) => {
		// 表示是下拉刷新更新朋友圈数据
		if (isRefrsh) {
			refresherFlag.value = true
		}
		let query = {
			pageIndex: pageIndex.value,
			pageSize: pageSize.value,
			userId: store.state.sender.Id
		}
		post(`${APIURL}/community/getCommunityList`, query).then(res => {
			if (res?.code === 200) {
				let item = res?.data || [];
				communityContentList.value.push(...item)
				if (res?.data.length < pageSize.value) {
					// 说明加载来的数据不足10条----->说明已经到极限数据了
					loadMore.value = true
				}
			} else {
				tipMesg(res?.message)
			}
		}).finally(() => {
			// 表示是下拉刷新更新朋友圈数据
			if (isRefrsh) {
				refresherFlag.value = false
			}
		})
	}
	onMounted(() => {
		getCommunityData()
		// 获取未读的消息
		getUnreadCommunityList()
	})

	// 下拉刷新
	const refresherFlag = ref < boolean > (false)
	const onRefresh = () => {
		if (refresherFlag.value) return;
		// 初始化页数、页码等状态
		pageIndex.value = 1;
		pageSize.value = 10;
		refresherFlag.value = false;
		// 防止添加重复的数据
		communityContentList.value = [];
		// 获取数据
		getCommunityData(true)
		// 更新未读消息状态
		getUnreadCommunityList()
	}
	// 导航中的刷新朋友圈操作
	const scrollTop = ref < number > (0)
	const oldScrollTop = ref < number > (0)
	const handleNavRefresh = () => {
		// 如果是固定的导航栏刷新时，应该先滚回到顶部，再实现刷新操作
		if (navbarFlag.value) {
			// 解决view层不同步的问题
			scrollTop.value = oldScrollTop.value
			nextTick(() => {
				scrollTop.value = 0
			})
		}
		// 初始化页数、页码等状态
		pageIndex.value = 1;
		pageSize.value = 10;
		refresherFlag.value = false;
		// 防止添加重复的数据
		communityContentList.value = [];
		// 获取数据
		getCommunityData()
		// 更新未读消息状态
		getUnreadCommunityList()
	}
	// 滚动到底部，加载数据
	const loadMore = ref < boolean > (false)
	const handleLoadMore = () => {
		// 如果loadMore为true,说明已经没有数据可以加载了
		if (loadMore.value) return;
		// 更新页数和页码
		pageIndex.value = pageIndex.value + 1;
		getCommunityData()
		// 更新未读消息状态
		getUnreadCommunityList()
	}
	// 获取未读消息
	const unReadCommunityList = ref < any[] > ([])
	const getUnreadCommunityList = () => {
		let model = {
			receiverId: store.state.sender.Id
		}
		post(`${APIURL}/community/getUnreadCommunityList`, model).then(res => {
			if (res?.code === 200) {
				unReadCommunityList.value = res?.data || []
			} else {
				tipMesg(res?.message)
			}
		})
	}
	// 点击消息跳转到消息详情页
	const handleGotoMessageDetail = () => {
		// 标记为已读----->所有的消息都为已读,这里采取传递一个路由参数到详情页面的onLoad处理,这样就不需要重新加载朋友圈页面了
		let hasRead = unReadCommunityList.value.length > 0 ? 1 : 0
		// 消息框消失----->直接将数组清空即可
		unReadCommunityList.value = []
		// 跳转
		uni.navigateTo({
			url: `/pages/social-circle/community-message-details?read=${hasRead}`
		})
	}
</script>

<style lang="scss">
	.social-circle {
		height: 100vh;
		width: 100%;

		.scroll-container {
			height: 100%;
			width: 100%;
			overflow: auto;

			.content {
				width: 100%;
				height: auto;

				// width: 100%;
				// height: 2099rpx;
				// background: beige;
			}

			.unread-message-container {
				width: 100%;

				display: flex;
				justify-content: center;
				align-items: center;

				padding-top: 40rpx;

				.unread-message {
					width: 300rpx;
					height: 70rpx;
					background-color: rgb(97, 97, 97, .7);
					border-radius: 5%;

					display: flex;
					justify-content: space-around;
					align-items: center;

					.avatar {
						margin-left: 10rpx;
						width: 55rpx;
						height: 55rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 5%;
						}
					}

					.content {
						flex: 1;
						font-size: 25rpx;
						color: #fff;
						text-align: center;
					}
				}
			}

			.empty {
				margin-top: 150rpx;
				width: 100%;
				height: 100%;
				text-align: center;
				font-size: 30rpx;
				color: lightblue;
			}

			.load-more {
				text-align: center;
				color: lightgray;
				font-size: 25rpx;
			}

		}

	}
</style>
