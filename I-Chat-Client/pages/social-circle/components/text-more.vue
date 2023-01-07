<template>
	<view class="text-more">
		<view ref="elementRef" :class="['text-content',{'max-three-line': cssFlag}]">{{model.Content}}</view>
		<!-- 展开和收缩按钮 -->
		<template v-if="approvalFlag">
			<view class="approvalBtn" @click="cssFlag = !cssFlag">{{cssFlag ? '全部':'收起'}}</view>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		nextTick,
		ref,
	} from 'vue'
	// 获取组件实例
	const props = defineProps({
		//内容文本
		model: {
			type: Object,
		},
	})
	const elementRef = ref()
	// 多行省略 -> 出现展开功能和多行样式
	const cssFlag = ref < boolean > (false)
	const approvalFlag = ref < boolean > (false)
	// 内容高度
	const elementHeight = ref < number > (0)
	nextTick(() => {
		// 内容DOM元素====> 获取当前内容的高度，从而判断是否要出现展开和多行样式
		let element = elementRef.value.$el;
		if (element === undefined && props?.model?.Content.length > 100) {
			// 这个时候展示 ===> 因为内容的字数已经超过100个了
			elementHeight.value = 70
		} else if (element !== undefined) {
			elementHeight.value = element?.offsetHeight
		}
		// 判断是否出现展开按钮
		// 60是三行的内容高度
		approvalFlag.value = elementHeight.value > 60
		cssFlag.value = true
	})
</script>

<style lang="scss" scoped>
	.text-more {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.text-content {
			line-height: 40rpx;
			font-size: 30rpx;
		}

		// 三行开始省略
		.max-three-line {
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		.approvalBtn {
			color: #526B94;
		}
	}
</style>
