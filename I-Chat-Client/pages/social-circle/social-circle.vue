<template>
	<view class="social-circle">
		<scroll-view scroll-y class="scroll-container" @scroll="handleScroll">
			<!-- 顶部 -->
			<HeaderBySocial v-model:navbarFlag="navbarFlag" />
			<view class="content">
				<ContentBySocial />
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import HeaderBySocial from './components/header-by-social.vue'
	import ContentBySocial from './components/content-by-social.vue'
	import {
		ref
	} from "vue";
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
