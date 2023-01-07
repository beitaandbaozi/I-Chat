<template>
	<view class="social-circle">
		<scroll-view scroll-y class="scroll-container" @scroll="handleScroll">
			<!-- 顶部 -->
			<HeaderBySocial v-model:navbarFlag="navbarFlag" />
			<view class="content">
				<template v-for="(item,index) in communityContentList" :key="index">
					<ContentBySocial :content="item" />
				</template>
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import HeaderBySocial from './components/header-by-social.vue'
	import ContentBySocial from './components/content-by-social.vue'
	import {
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
	const getCommunityData = () => {
		let query = {
			pageIndex: pageIndex.value,
			pageSize: pageSize.value,
			userId: store.state.sender.Id
		}
		post(`${APIURL}/community/getCommunityList`, query).then(res => {
			if (res?.code === 200) {
				let item = res?.data || [];
				communityContentList.value.push(...item)
			} else {
				tipMesg(res?.message)
			}
		})
	}
	onMounted(() => {
		getCommunityData()
	})
	
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
		}
	}
</style>
