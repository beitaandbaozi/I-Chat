<template>
	<view class="image-content">
		<view :class="[
			{'img-one':imageList.length === 1},
			{'img-secend':imageList.length === 2},
			{'img-tree':imageList.length === 3},
			{'img-four':imageList.length === 4},
			{'img-five-six':imageList.length === 5 || imageList.length === 6},
			{'img-seven-eight-nine':imageList.length === 7 || imageList.length === 8 ||  imageList.length === 9},
			]">
			<template v-for="(item,index) in imageList" :key="index">
				<template v-if="!defaultImageFlag">
					<image :src="item" class="img-info" :data-index="index" @error="handleImageError"
						@tap="handleImgsPreView"></image>
				</template>
				<template v-else>
					<view class="img-info">
						<image :src="defaultImage"></image>
					</view>
				</template>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref,
	} from 'vue'
	const props = defineProps({
		imageList: {
			type: Array,
		}
	})
	// 图片加载出错时，添加默认图片
	const defaultImage = 'http://pets-images.dev-apis.com/pets/none.jpg'
	const defaultImageFlag = ref < boolean > (false)
	const handleImageError = (e) => {
		console.log('image发生error事件，携带值为' + e.detail.errMsg)
		defaultImageFlag.value = true
	}
	// 点击图片预览
	const handleImgsPreView = (e) => {
		// 获取当前的点击的图片索引值
		let currentIndex = 0;
		if (props.imageList) {
			for (let i = 0; i < props.imageList.length; i++) {
				if (i === e.currentTarget.dataset.index) {
					currentIndex = i
					break
				}
			}
		}
		uni.previewImage({
			current: currentIndex,
			urls: props.imageList as string[]
		})
	}
</script>

<style lang="scss" scoped>
	.image-content {
		image {
			width: 100%;
			height: 100%
		}

		// 图片一张时候的样式
		.img-one {
			width: 65%;
			height: 400rpx;

			.img-info {
				width: 100%;
				height: 100%
			}
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
			}
		}
	}
</style>
