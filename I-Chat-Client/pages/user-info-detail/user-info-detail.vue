<template>
	<view class="user-info-detail">
		<!-- 头像 -->
		<view class="default line">
			<view class="option">
				<text>头像</text>
				<view class="right">
					<img :src="sender.Avatar" class="img-avatar">
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 名称 -->
		<view class="default line">
			<view class="option-name option">
				<text>名字</text>
				<view class="right">
					<text class="content">{{sender.NickName}}</text>
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 拍一拍 -->
		<view class="default line">
			<view class="option-name option">
				<text>拍一拍</text>
				<view class="right">
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 微信号 -->
		<view class="default line">
			<view class="option-name option">
				<text>微信号</text>
				<view class="right">
					<text class="content">{{sender.Name}}</text>
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 二维码 -->
		<view class="default line">
			<view class="option-name option">
				<text>我的二维码</text>
				<view class="right">
					<svg class="icon img-coder" aria-hidden="true">
						<use xlink:href="#icon-erweima"></use>
					</svg>
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 更多 -->
		<view class="default">
			<view class="option-name option">
				<text>更多</text>
				<view class="right">
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 来电铃声 -->
		<view class="default position">
			<view class="option-name option">
				<text>来电铃声</text>
				<view class="right">
					<text class="content">至夏</text>
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 微信豆 -->
		<view class="default position">
			<view class="option-name option">
				<text>微信豆</text>
				<view class="right">
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
		<!-- 我的地址 -->
		<view class="default position">
			<view class="option-name option">
				<text>我的地址</text>
				<view class="right">
					<svg class="icon img-more" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import store from '@/store/index.js'
	import {
		computed
	} from "vue";

	const sender = computed(() => store.state.sender)
</script>

<style lang="scss" scoped>
	.user-info-detail {
		height: 100vh;
		background-color: rgb(237, 237, 237);

		.default {
			background-color: rgb(255, 255, 255);

			.option-name {
				padding: 23rpx 20rpx !important;
			}

			.option {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 12rpx 20rpx;
				box-sizing: border-box;

				.right {
					display: flex;
					align-items: center;

					.content {
						color: rgb(146, 146, 146)
					}

					.img-avatar {
						width: 120rpx;
						height: 120rpx;
						border-radius: 5%;
					}

					.img-more {
						margin-left: 5rpx;
						width: 35rpx;
						height: 35rpx;
					}

					.img-coder {
						margin-left: 5rpx;
						width: 50rpx;
						height: 50rpx;
					}
				}

			}


		}

		.line {
			&::after {
				content: '';
				display: block;
				transform: translateX(20rpx);
				width: 100%;
				border-bottom: 1px solid #e5e5e5;
			}
		}

		.position {
			margin-top: 15rpx;
		}


	}
</style>
