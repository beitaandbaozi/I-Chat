<template>
	<view class="image-content">
		<!-- <template v-for="(item,index) in imageList" :key="index">
			<view>
				<image :src="item" mode="widthFix" class="img-info"></image>
			</view>
		</template> -->
		<!-- 一张图片 -->
		<!-- <view class="image-one">
		</view> -->
		<!-- 两张 -->
		<!-- <view class="img-secend">
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
		</view> -->
		<!-- 三张 -->
		<!-- <view class="img-tree">
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
		</view> -->
		<!-- 四张 -->
		<!-- <view class="img-four">
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
			<view class="img-info">
			</view>
		</view> -->
		<!-- 五张、六张 -->
		<!-- <view class="img-five-six">
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
		</view> -->
		<!-- 七张、八张、九张 -->
		<!-- <view class="img-seven-eight-nine">
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
			<view class="img-info"></view>
		</view> -->
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		imageList: {
			type: Array,
			default: []
		}
	})
</script>

<style lang="scss" scoped>
	.image-content {

		// 图片一张时候的样式
		.image-one {
			width: 65%;
			height: 400rpx;
			background-color: brown;
		}

		// 图片两张时候的样式
		.img-secend {
			width: 65%;
			height: 200rpx;

			display: flex;
			align-items: center;

			.img-info {
				margin-right: 10rpx;

				width: 50%;
				height: 100%;
				background-color: beige;
			}
		}

		// 图片三张时候的样式
		.img-tree {
			height: 200rpx;

			display: flex;
			align-items: center;

			.img-info {
				margin-right: 10rpx;

				width: 33.3%;
				height: 100%;
				background-color: rosybrown;
			}
		}

		// 图片四张时候的样式
		.img-four {
			width: 65%;
			height: 400rpx;

			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.img-info {
				box-sizing: content-box;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
				width: 47%;
				height: 47%;
				background-color: lightpink;
			}
		}

		// 图片五张、六张时候的样式
		.img-five-six {
			// 宽度就是100%
			height: 400rpx;

			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.img-info {
				box-sizing: content-box;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
				width: 31.3%;
				height: 48%;
				background-color: lightpink;
			}
		}

		// 图片七张、八张、九张
		.img-seven-eight-nine {
			height: 600rpx;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.img-info {
				box-sizing: content-box;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
				width: 31.3%;
				height: 30%;
				background-color: lightpink;
			}
		}
	}
</style>
