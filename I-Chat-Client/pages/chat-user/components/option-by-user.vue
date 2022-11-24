<template>
	<view class="option-by-user">
		<view class="default line">
			<view class="option">
				<img src="@/static/img/tj.png" class="img-option">
				<text class="option-content">新的朋友</text>
			</view>
		</view>
		<view class="default line">
			<view class="option">
				<img src="@/static/img/lt.png" class="img-option">
				<text class="option-content">仅聊天的朋友</text>
			</view>
		</view>
		<view class="default line">
			<view class="option">
				<img src="@/static/img/ql.png" class="img-option">
				<text class="option-content">群聊</text>
			</view>
		</view>
		<view class="default line">
			<view class="option">
				<img src="@/static/img/bq.png" class="img-option">
				<text class="option-content">标签</text>
			</view>
		</view>
		<view class="default">
			<view class="option">
				<img src="@/static/img/gzh.png" class="img-option">
				<text class="option-content">公众号</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
	.option-by-user {
		margin-top: 40rpx;
		.default {
			background: #fff;

			.option {
				display: flex;
				align-items: center;
				padding: 8rpx;

				.img-option {
					margin-left: 20rpx;
				}

				.option-content {
					margin-left: 20rpx;
					font-weight: bold;
				}

			}

		}

		.line {
			&::after {
				content: '';
				display: block;
				width: 100%;
				transform: translateX(120rpx);
				border-bottom: 1px solid #e5e5e5;
			}
		}
	}
</style>
