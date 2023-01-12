<template>
	<view class="delete-comment">
		<!-- 文字描述 -->
		<text>是否删除我的评论?</text>
		<!-- 删除 -->
		<view class="btn btn-remove" @click="handleDelete">删除</view>
		<!-- 取消 -->
		<view class="btn btn-cancel" @click="handleCancel">取消</view>
	</view>
</template>

<script lang="ts" setup>
	const emit = defineEmits(['close', 'handleDeleteComment'])
	// 取消---->关闭抽屉
	const handleCancel = () => {
		emit('close')
	}
	// 删除---->删除功能
	const handleDelete = () => {
		emit('handleDeleteComment')
	}
</script>

<style lang="scss" scoped>
	.delete-comment {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;

		text {
			height: 25%;
			font-size: 25rpx;
			line-height: 60rpx;
			color: lightsteelblue;
			text-align: center;
			border-bottom: 1px solid #eee;
		}

		.btn {
			width: 100%;
			height: 37.5%;
			border-bottom: 1px solid #eee;
			font-size: 30rpx;
			text-align: center;
		}

		.btn-remove {
			line-height: 120rpx;
			color: lightcoral;
		}

		.btn-cancel {
			line-height: 120rpx;
			color: lightgrey;
			border-bottom: none;
		}
	}
</style>
