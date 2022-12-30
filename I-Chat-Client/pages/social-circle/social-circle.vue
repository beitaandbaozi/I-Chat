<template>
	<view class="social-circle">
		<scroll-view scroll-y class="scroll-container" @scroll="handleScroll">
			<!-- 顶部 -->
			<view class="header">
				<!-- v-show做判断 -->
				<!-- 有背景 -->
				<view class="header-bg">
					<!-- 导航 -->
					<view class="nav" :class="navbarFlag ? 'nav-fixed': ''">
						<template v-for="item in socialCirle" :key="item.id">
							<view class="nav-bars" v-show="item.id === 0 || item.id === 1  || item.id === 2 ">
								<svg class="icon img-icon" aria-hidden="true">
									<use :xlink:href="item.icon"></use>
								</svg>
							</view>
						</template>
						<text class="title" v-show="navbarFlag">朋友圈</text>
						<template v-for="item in socialCirle" :key="item.id">
							<view class="nav-bars" v-show="item.id === 3">
								<svg class="icon img-icon" aria-hidden="true">
									<use :xlink:href="item.icon"></use>
								</svg>
							</view>
						</template>
					</view>
					<view class="bg-image">
						<!-- 后续补充上去吧 -->
					</view>
					<!-- 头像 -->
					<view class="user-info">
						<text>{{userInfo.NickName}}</text>
						<img :src="userInfo.Avatar">
					</view>
				</view>
			</view>
			<view class="content">

			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import {
		socialCirle
	} from '@/script/config.js'
	import {
		computed,
		ref
	} from "vue";
	import store from '@/store/index.js'
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
	// 个人信息
	const userInfo = computed(() => store.state.sender)
</script>

<style lang="scss">
	.social-circle {
		height: 100vh;
		width: 100%;

		.scroll-container {
			height: 100%;
			width: 100%;
			overflow: auto;

			.header {
				.header-bg {
					width: 100%;
					height: 660rpx;
					background: lightblue;

					position: relative;

					.nav {
						background: transparent;

						display: flex;
						align-items: center;
						justify-content: space-between;

						width: 100%;
						height: 70rpx;

						.nav-bars {
							width: 40rpx;
							height: 40rpx;
							margin: 5rpx;

							.img-icon {
								width: 100%;
								height: 100%;
							}
						}

						.nav-right {
							text-align: right;
						}

						.title {
							flex: 1;
							text-align: center;
						}
					}

					.nav-fixed {
						transition: all .35s linear;

						position: fixed;
						top: 0;

						background-color: #eee;

					}

					.user-info {
						position: absolute;
						right: 0;
						bottom: -30rpx;

						display: flex;
						align-items: center;

						text {
							color: #fff;
							margin-right: 20rpx;
						}

						img {
							width: 120rpx;
							height: 120rpx;
							border-radius: 5%;

							margin-right: 20rpx;
						}
					}
				}
			}

			.content {
				width: 100%;
				height: 2099rpx;
				background: beige;
			}
		}
	}
</style>
