<template>
	<view class="mine">
		<!-- 头部 -->
		<view class="header" @click="toUserInfoDetail">
			<!-- 头像 -->
			<view>
				<img :src="sender.Avatar" alt="头像" class="avatar">
			</view>
			<!-- 个人信息 -->
			<view class="user-info">
				<text class="name">{{sender.NickName}}</text>
				<text class="wechat">微信号：{{sender.Name}}</text>
				<view class="status">
					<view class="btn-status">+ 状态</view>
					<view class="btn-more">...</view>
				</view>
			</view>
			<!-- 更多 -->
			<view class="more">
				<svg class="icon img-coder" aria-hidden="true">
					<use xlink:href="#icon-erweima"></use>
				</svg>
				<svg class="icon img-more" aria-hidden="true">
					<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
				</svg>
			</view>
		</view>
		<!-- 选项 -->
		<template v-for="item in mineOption" :key="item.id">
			<view :class="['container',{'serve':item.id === 1},{'setting':item.id === 6}]">
				<view class="option">
					<svg class="icon img-option" aria-hidden="true">
						<use :xlink:href="item.icon"></use>
					</svg>
					<text
						:class="['content-option', {'no-border':item.id === 5 || item.id === 6}]">{{item.title}}</text>
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</template>
	</view>
</template>

<script setup lang="ts">
	import store from '@/store/index.js'
	import {
		computed
	} from "vue";
	import {
		mineOption
	} from '@/script/config.js'

	const sender = computed(() => store.state.sender)

	// 跳转到个人信息
	const toUserInfoDetail = () => {
		uni.navigateTo({
			url: '/pages/user-info-detail/user-info-detail',
			success: (res) => {
				console.log('success', res)
			},
			fail: (err) => {
				console.log('err', err)
			}
		});
	}
</script>

<style lang="scss" scoped>
	.mine {
		height: 100vh;
		background: rgb(237, 237, 237);

		.header {
			display: flex;
			align-items: center;
			height: 27vh;
			background: #fff;

			.avatar {
				margin-left: 30rpx;
				width: 130rpx;
				height: 130rpx;
				border-radius: 5%;
			}

			.user-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				margin-left: 25rpx;

				.name {
					margin-top: 40rpx;
					font-size: 20px;
					font-weight: bolder;
				}

				.wechat {
					margin-top: 25rpx;
					color: rgb(121, 121, 121)
				}

				.status {
					margin-top: 15rpx;
					display: flex;

					.btn-status {
						width: 80rpx;
						text-align: center;
						border: 1px solid #e5e5e5;
						border-radius: 200px;
						padding: 0 10rpx;
						font-size: 14rpx;
						color: #626363;
						line-height: 23px;
					}

					.btn-more {
						width: 23px;
						text-align: center;
						margin-left: 15rpx;
						border: 1px solid #e5e5e5;
						border-radius: 50%;
						font-size: 14rpx;
						font-weight: bolder;
						color: #626363;
					}
				}
			}

			.more {
				margin-top: 65rpx;

				.img-coder {
					margin-right: 30rpx;
					width: 35rpx;
					height: 35rpx;
				}
			}
		}

		.serve,
		.setting {
			margin: 15rpx 0;
		}


		.img-more {
			margin-right: 30rpx;
			width: 35rpx;
			height: 35rpx;
		}

		.container {
			display: flex;
			align-items: center;
			width: 100%;
			background: #fff;
		}

		.option {
			display: flex;
			align-items: center;
			width: 100%;

			.img-option {
				margin-left: 20rpx;
				width: 40rpx;
				height: 40rpx;
			}

			.content-option {
				flex: 1;
				margin-left: 30rpx;
				font-size: 16px;
				height: 100%;
				padding: 20rpx 0;
				border-bottom: 1px solid #e5e5e5;
			}

			.no-border {
				border-bottom: none;
			}

		}
	}
</style>
