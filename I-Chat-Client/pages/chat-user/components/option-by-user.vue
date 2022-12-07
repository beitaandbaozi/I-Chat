<template>
	<view class="option-by-user">
		<template v-for="(item,index) in friendOption" :key="index">
			<view class="default line">
				<view class="option">
					<svg class="icon img-option" aria-hidden="true">
						<use :xlink:href="item.icon"></use>
					</svg>
					<text class="option-content">{{item.title}}</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		friendOption
	} from '@/script/config.js'
</script>

<style lang="scss" scoped>
	.option-by-user {
		margin-top: 40rpx;

		.default {
			background: #fff;

			.option {
				display: flex;
				align-items: center;
				padding: 8rpx;

				.img-option {
					width: 100rpx;
					height: 100rpx;
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
