<template>
	<view class="edit-comment">
		<view class="container">
			<!-- 文本域 -->
			<textarea focus="true" maxlength="500" class="comment-textarea" :placeholder="defaultPlaceHolder"
				v-model="textareaContent"></textarea>
			<!-- 操作按钮 -->
			<view class="btn-group">
				<view class="btn btn-cancel" @click="handleCancel">取消</view>
				<view class="btn btn-reset" @click="handleReset">重置</view>
				<view class="btn btn-confirm" @click="handleConfirm">确定</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	const props = defineProps({
		// 回复XXXX、评论
		defaultPlaceHolder: {
			type: String,
			default: '评论'
		}
	})
	const emit = defineEmits(['close', 'handlecommitComment'])
	// 文本域内容
	const textareaContent = ref < string > ('')
	// 取消
	const handleCancel = () => {
		// 文本内容清空
		textareaContent.value = ''
		// 关闭
		emit('close')
	}
	// 重置
	const handleReset = () => {
		// 文本内容清空
		textareaContent.value = ''
	}
	// 确定
	const handleConfirm = () => {
		// 清除文本的空格
		textareaContent.value = textareaContent.value.trim()
		// emit出去
		emit('handlecommitComment', textareaContent.value)
		handleCancel()
	}
</script>

<style lang="scss" scoped>
	.edit-comment {
		width: 100%;
		height: 100%;

		.container {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;


			padding: 16rpx;

			box-sizing: border-box;
			width: 100%;

			background-color: #fff;
			border-radius: 10rpx;

			.comment-textarea {
				margin-bottom: 20rpx;
				padding: 10rpx;

				height: 390rpx;
				width: 100%;

				font-size: 30rpx;
				line-height: 36rpx;
				background-color: #fff;
				box-sizing: border-box;
				box-shadow: 1rpx 1rpx 1rpx 3rpx rgba(0, 0, 0, 0.2);
			}

			.btn-group {
				display: flex;
				justify-content: space-around;
				align-items: center;

				.btn {
					width: 100rpx;
					height: 50rpx;

					text-align: center;
					line-height: 50rpx;
					color: rgba(255, 255, 255);

					font-size: 25rpx;
					border-radius: 10%;
				}

				.btn-cancel {
					background-color: lightcoral;
				}

				.btn-reset {
					background-color: lightskyblue;
				}

				.btn-confirm {
					background-color: lightsalmon;
				}
			}
		}

	}
</style>
