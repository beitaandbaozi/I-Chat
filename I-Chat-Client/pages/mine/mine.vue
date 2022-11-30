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
				<img src="../../static/img/coder.png" class="img-coder">
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 服务 -->
		<view class="container serve ">
			<view class="option">
				<img src="../../static/img/serve.png" class="img-option">
				<text class="content-option no-border">服务</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 收藏 -->
		<view class="container collection">
			<view class="option">
				<img src="../../static/img/collection.png" class="img-option">
				<text class="content-option">收藏</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 朋友圈 -->
		<view class="container cirle-friend">
			<view class="option">
				<img src="../../static/img/cirle-friend.png" class="img-option">
				<text class="content-option">朋友圈</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 卡包 -->
		<view class="container wallet">
			<view class="option">
				<img src="../../static/img/wallet.png" class="img-option">
				<text class="content-option">卡包</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 表情 -->
		<view class="container expression">
			<view class="option">
				<img src="../../static/img/expression.png" class="img-option">
				<text class="content-option no-border">表情</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
		<!-- 设置 -->
		<view class="container setting">
			<view class="option">
				<img src="../../static/img/setting.png" class="img-option">
				<text class="content-option no-border">设置</text>
				<img src="../../static/img/more.png" class="img-more">
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import store from '@/store/index.js'
	import {
		computed
	} from "vue";

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
