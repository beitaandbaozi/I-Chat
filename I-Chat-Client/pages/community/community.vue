<template>
	<view class="community">
		<scroll-view scroll-y class="options-list">
			<template v-for="item in comunityOptions" :key="item.id">
				<view class="option">
					<!-- 图标 -->
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-pengyouquan"></use>
					</svg>
					<!-- 标题 -->
					<!-- 角标 -->
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
					</svg>
				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import {
		comunityOptions
	} from '@/script/config.js'
</script>

<style lang="scss" scoped>
	.community {
		height: 100vh;
		width: 100%;

		.options-list {
			height: 100%;
			width: 100%;
			overflow: auto;

			background-color: #e5e5e5;

			.option {
				display: flex;
				align-items: center;
				width: 100%;
				background: #fff;
			}
		}
	}
</style>
