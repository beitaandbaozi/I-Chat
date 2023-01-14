<template>
	<view class="header">
		<view class="header-bg">
			<!-- 导航 -->
			<view class="nav" :class="childNavBarFlag ? 'nav-fixed': ''">
				<template v-for="item in socialCirle" :key="item.id">
					<view class="nav-bars" v-show="item.id === 0 || item.id === 1  || item.id === 2 "
						@click="handleClike(item.id)">
						<svg class="icon img-icon" aria-hidden="true">
							<use :xlink:href="item.icon"></use>
						</svg>
					</view>
				</template>
				<text class="title" v-show="childNavBarFlag">朋友圈</text>
				<template v-for="item in socialCirle" :key="item.id">
					<view class="nav-bars" v-show="item.id === 3" @click="handleClike(item.id)">
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
	<!-- 发布组件 -->
	<edit-draw v-model:drawVisible="publishFlag" mode="bottom" drawerWidth="100%" drawerHeight="100%">
		<commit-social @handleCancel="publishFlag = false"/>
	</edit-draw>
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
	// 抽屉组件
	import EditDraw from '../../../components/community/edit-draw.vue'
	// 发布组件
	import CommitSocial from './commit-social.vue'

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

	const emit = defineEmits(['handleNavRefresh'])
	// 发布朋友圈
	const publishFlag = ref < boolean > (false)
	const publishSocial = () => {
		publishFlag.value = true
	}
	// 点击导航栏上的按钮
	const handleClike = (id: number) => {
		switch (id) {
			case 0:
				// 导航栏后退  ----动画出入后续统一处理一下
				uni.navigateBack({
					delta: 1,
					animationType: 'zoom-in',
					animationDuration: 200
				});
				break;
			case 1:
				// 刷新朋友圈
				emit('handleNavRefresh')
				break;
			case 2:
				// 消息
				break;
			case 3:
				// 发布朋友圈
				publishSocial()
				break;
			default:
				break;
		}
	}
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
				justify-content: space-around;

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
				z-index: 10;

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
