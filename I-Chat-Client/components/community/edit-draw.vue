<template>
	<view class="edit-draw">
		<!-- 遮罩层 -->
		<view v-if="mask" class="tui-drawer-mask" :class="{'tui-drawer-mask_show':editDrawFlag}"
			@click="handleCloseMask"></view>
		<!-- 编辑插槽 -->
		<view class="tui-drawer-container" :class="['tui-drawer-container_' + mode,editDrawFlag? mode + '_show':'']"
			:style="{ width: drawerWidth, height: drawerHeight }">
			<slot />
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref,
		watch
	} from "vue";
	const props = defineProps({
		mask: {
			type: Boolean,
			default: true
		},
		editDrawVisible: {
			type: Boolean,
		},
		mode: {
			type: String,
			default: 'left'
		},
		drawerWidth: {
			type: String,
			default: '30%'
		},
		drawerHeight: {
			type: String,
			default: '100%'
		},
	})
	const editDrawFlag = ref < boolean > (false)
	watch(() => props.editDrawVisible, (newValue) => {
		editDrawFlag.value = newValue
	})
	// 关闭遮罩层
	const handleCloseMask = () => {
		editDrawFlag.value = false
	}
</script>

<style lang="scss" scoped>
	.edit-draw {

		// 遮罩层
		.tui-drawer-mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			// 盖过图片
			z-index: 8888;

			background-color: rgba(0, 0, 0, 0.6);
			// 动画初始形态
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease-in-out;
		}

		// 遮罩层动画展示结果
		.tui-drawer-mask_show {
			visibility: visible;
			opacity: 1;
		}

		// 编辑器框架
		.tui-drawer-container {
			position: fixed;

			transition: all 0.3s ease-in-out;
			z-index: 99999;
			opacity: 0;
			background-color: #fff;
		}

		// 底部框架  从底部升上来
		.tui-drawer-container_bottom {
			// 这里已经定位到了50% 就一半的宽度超出
			left: 50%;
			bottom: 0;
			transform: translate3d(-50%, 100%, 0);
		}

		.bottom_show {
			opacity: 1;
			// 保持x轴不变，y轴移动上来即可
			transform: translate3d(-50%, 0, 0)
		}

		// 顶部框架  从顶部升下去
		.tui-drawer-container_top {
			left: 50%;
			top: 0;
			transform: translate3d(-50%, -100%, 0);
		}

		.top_show {
			opacity: 1;
			transform: translate3d(-50%, 0, 0);
		}

		// 左侧框架 从左到右
		.tui-drawer-container_left {
			left: 0;
			top: 0;
			transform: translate3d(-100%, 0, 0);
		}

		.left_show {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}

		// 右侧框架 从右到左
		.tui-drawer-container_right {
			right: 0;
			top: 0;
			transform: translate3d(100%, 0, 0);
		}

		.right_show {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
</style>
