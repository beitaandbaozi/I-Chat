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
				<view class="social-content">
					<view class="left">
						<!-- 头像 -->

					</view>
					<view class="right">
						<!-- 昵称 -->
						<text class="nick-name">昵称</text>
						<!-- 内容 -->
						<!-- 文本内容 -->
						<!-- 图片内容 -->
						<view class="text-content">
						</view>
						<view class="image-content">
						</view>
						<!-- 点赞和评论功能 -->
						<view class="options-flex">
							<!-- 区域 -->
							<template v-if="optionsFlag">
								<view class="options-content">

								</view>
							</template>
							<!-- 按钮 -->
							<view class="options-btn" @click="handleOptions">
								<svg class="icon img-options" aria-hidden="true">
									<use xlink:href="#icon-danse_gongnengjihe-copy"></use>
								</svg>
							</view>
						</view>

						<!-- 点赞区和评论 -->
					</view>
				</view>
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

	// 点赞和评论出现
	const optionsFlag = ref < boolean > (false)
	const handleOptions = () => {
		optionsFlag.value = !optionsFlag.value
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
							margin-right: 40rpx;
						}

						img {
							width: 120rpx;
							height: 120rpx;
							border-radius: 5%;

							margin-right: 60rpx;
						}
					}
				}
			}

			.content {
				width: 100%;
				height: auto;

				// width: 100%;
				// height: 2099rpx;
				// background: beige;
				.social-content {
					margin: 60rpx 40rpx 40rpx 40rpx;
					// height:200rpx;

					display: flex;

					.left {
						width: 60rpx;
						height: 60rpx;
						background-color: beige;
					}

					.right {
						margin-left: 20rpx;

						width: 100%;
						border-bottom: 1px solid #F3F3F3;

						display: flex;
						flex-direction: column;
						justify-content: center;


						// 昵称
						.nick-name {
							color: rgb(87, 107, 149);
							font-size: 15px;
						}

						// 文本内容
						.text-content {
							margin-top: 20rpx;

							width: 100%;
							height: 50rpx;
							background-color: lightblue;
						}

						// 图片内容
						.image-content {
							margin-top: 10rpx;
							width: 100%;
							height: 100rpx;
							background-color: lightcoral;
							// flex 3张换一次
						}

						// 点赞和评论功能
						.options-flex {
							margin: 15rpx 0 20rpx 0;

							height: 60rpx;

							display: flex;
							justify-content: flex-end;
							align-items: center;

							// 区域
							.options-content {
								margin-right: 20rpx;

								width: 250rpx;
								height: 60rpx;
								background-color: rgb(76, 76, 76);
								border-radius: 10rpx;
								
								animation: wakeup .2s ease;
							}

							@keyframes wakeup {
								0% {
									width: 50rpx;
								}
								100% {
									width: 250rpx;
								}
							}

							// 按钮
							.options-btn {

								width: 60rpx;
								height: 40rpx;

								background: rgb(247, 247, 247);

								display: flex;
								justify-content: center;
								align-items: center;

								.img-options {
									width: 60rpx;
									height: 45rpx;
								}
							}

						}


					}
				}
			}
		}
	}
</style>
