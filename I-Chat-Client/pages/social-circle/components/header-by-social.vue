<template>
	<view class="header">
		<view class="header-bg">
			<!-- 导航 -->
			<view class="nav" :class="childNavBarFlag ? 'nav-fixed': ''">
				<template v-for="item in socialCirle" :key="item.id">
					<view class="nav-bars" v-show="item.id === 0 || item.id === 1  || item.id === 2 ">
						<svg class="icon img-icon" aria-hidden="true">
							<use :xlink:href="item.icon"></use>
						</svg>
					</view>
				</template>
				<text class="title" v-show="childNavBarFlag">朋友圈</text>
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
</template>

<script lang="ts" setup>
	import {
		socialCirle
	} from '@/script/config.js'
	import {
		computed,
		ref,
		watch
	} from "vue";
	import store from '@/store/index.js'

	// 接收父组件传递过来的props
	const props = defineProps({
		navbarFlag: Boolean
	})
	// 双向绑定
	const childNavBarFlag = ref < boolean > (false)
	watch(() => props.navbarFlag, (newValue) => {
		childNavBarFlag.value = newValue
	})


	// 个人信息
	const userInfo = computed(() => store.state.sender)
</script>

<style lang="scss">
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
</style>
