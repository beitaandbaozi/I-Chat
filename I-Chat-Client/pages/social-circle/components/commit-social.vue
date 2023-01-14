<template>
	<view class="commit-social">
		<view class="btn-grow">
			<view class="btn btn-cancle" @click="handleCancel">取消</view>
			<view class="btn btn-reset" @click="handleReset">重置</view>
			<view class="btn btn-confirm">发布</view>
		</view>
		<textarea maxlength="2000" placeholder="这一刻的想法....🤔😄😡😔🙂" v-model="textAreaContent"></textarea>
		<!-- 选择图片区域 -->
		<view class="upload-image-box">
			<!-- 上传icon -->
			<!-- 图片数量达到9张的时候消失 -->
			<template v-if="uploadImgList.length < 9">
				<svg class="icon icon-upload" aria-hidden="true" @click="handleUploadImage">
					<use xlink:href="#icon-upload-image"></use>
				</svg>
			</template>
			<template v-for="(item,index) in uploadImgList" :key="index">
				<view class="img-info">
					<svg class="icon icon-delete" aria-hidden="true" @click="handleDeleteImage(index)">
						<use xlink:href="#icon-cuowu"></use>
					</svg>
					<image :src="item"></image>
				</view>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	import {
		APIURL
	} from '@/script/config.js'
	import {
		tipMesg
	} from '@/script/common.js'
	const emit = defineEmits(['handleCancel'])
	// 文本域内容
	const textAreaContent = ref < string > ('')
	// 上传的图片列表
	const uploadImgList = ref < any[] > ([])
	// 点击取消
	const handleCancel = () => {
		// 文本域内容清空
		textAreaContent.value = ''
		// 关闭
		emit('handleCancel')
	}
	// 重置
	const handleReset = () => {
		// 文本域内容清空
		textAreaContent.value = ''
		// 照片清空
	}
	// 上传图片
	const handleUploadImage = () => {
		// 限制图片数量 =====> 由uploadImgList的数量来决定
		let count = 9 - uploadImgList.value.length;
		// 选择图片
		uni.chooseImage({
			count,
			sizeType: ['original', 'compressed'], //原图和压缩图
			sourceType: ['album', 'camera'], //从相册选择
			success: (res) => {
				uni.showLoading({
					title: '上传图片中.....🤯😵😬',
					mask: true
				})
				let tempFilePathsList = res.tempFilePaths;
				for (let i = 0; i < tempFilePathsList.length; i++) {
					// 上传到服务器
					uni.uploadFile({
						url: `${APIURL}/upload/uploadPublishSocialImage`,
						filePath: tempFilePathsList[i],
						name: 'file',
						success: (res) => {
							if (res?.statusCode === 200) {
								let data = JSON.parse(res.data)
								let uploadImage =
									`http://localhost:9527${APIURL}/upload/getPublishSocialImage?url=${data[0].path}`;
								uploadImgList.value.push(uploadImage)
								console.log('----', uploadImgList.value)
							} else {
								tipMesg("上传图片失败😭")
							}
						},
						fail: (res) => {
							tipMesg("上传图片异常😭", res)
						}
					})
				}
			},
		})
	}
	// 删除上传的图片
	const handleDeleteImage = (index: number) => {
		uploadImgList.value.splice(index, 1)
	}
</script>

<style lang="scss" scoped>
	.commit-social {
		width: 100%;
		height: 100%;

		.btn-grow {
			width: 100%;
			height: 120rpx;

			display: flex;
			justify-content: space-between;

			.btn {
				margin: 10rpx;

				width: 100rpx;
				height: 60rpx;
				color: #fff;
				font-size: 35rpx;
				text-align: center;
				line-height: 60rpx;

				border-radius: 10%;
			}

			.btn-cancle {
				color: lightcoral;
			}

			.btn-reset {
				color: lightseagreen;
			}

			.btn-confirm {
				background-color: lightslategray;
			}
		}

		textarea {
			margin: 20rpx;
			width: 96%;
			height: 200rpx;

			font-size: 30rpx;
			line-height: 36rpx;
			text-align: left;
			word-wrap: break-word;

			overflow-y: auto;
			background-color: #fff;

		}

		.upload-image-box {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			margin-top: 20rpx;
			width: 100%;

			.icon-upload {
				height: 200rpx;
				width: 30.3%;
				margin-left: 10rpx;
			}

			.img-info {
				margin: 10rpx 10rpx;
				width: 30%;
				height: 200rpx;
				border-radius: 5%;

				position: relative;

				.icon-delete {
					position: absolute;
					top: 0;
					right: 0;
					z-index: 10;

					width: 40rpx;
					height: 40rpx
				}

				image {
					width: 100%;
					height: 100%
				}
			}
		}
	}
</style>
