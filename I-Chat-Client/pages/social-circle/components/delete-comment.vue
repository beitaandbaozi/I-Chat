<template>
	<view class="delete-comment">
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

		.btn {
			width: 100%;
			height: 50%;
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
