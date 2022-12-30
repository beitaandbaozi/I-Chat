<template>
	<view class="community">
		<scroll-view scroll-y class="options-list">
			<template v-for="item in comunityOptions" :key="item.id">
				<view
					:class="['container', {'fix-top':item.id === 1 || item.id === 3 || item.id ===5 || item.id === 7 || item.id === 8 || item.id === 10}]"
					@click="handleClick(item.id)">
					<view class="option">
						<!-- 图标 -->
						<svg class="icon img-icon" aria-hidden="true">
							<use :xlink:href="item.icon"></use>
						</svg>
						<!-- 标题 -->
						<text
							:class="{'no-border':item.id === 0 ||item.id === 2 ||item.id === 4 ||item.id === 6 ||item.id === 7 ||item.id === 9 ||item.id === 10}">{{item.title}}</text>
						<!-- 角标 -->
						<svg class="icon img-more" aria-hidden="true">
							<use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
						</svg>
					</view>
				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import {
		comunityOptions
	} from '@/script/config.js'
	// 跳转总体封装
	const toggleUrl = (url: string) => {
		uni.navigateTo({
			url,
		});
	}
	// 点击跳转
	const handleClick = (value: number) => {
		switch (value) {
			// 跳转到朋友圈具体页面
			case 0:
				toggleUrl('/pages/social-circle/social-circle')
				break;
			default:
				break;
		}
	}
</script>

<style lang="scss" scoped>
	.community {
		height: 100vh;
		width: 100%;

		.options-list {
			height: 100%;
			width: 100%;
			overflow: auto;

			background-color: #ededed;

			.fix-top {
				margin-top: 15rpx;
			}

			.container {
				display: flex;
				align-items: center;
				width: 100%;
				height: 94rpx;
				background: #fff;

				.option {
					display: flex;
					align-items: center;
					width: 100%;

					.img-icon {
						margin-left: 20rpx;
						width: 40rpx;
						height: 40rpx;
					}

					text {
						flex: 1;
						margin-left: 30rpx;
						font-size: 16px;
						height: 100%;
						padding: 20rpx 0;
						border-bottom: 1px solid #e5e5e5;
					}

					.img-more {
						width: 40rpx;
						height: 40rpx;
					}

					.no-border {
						border-bottom: none;
					}
				}
			}

		}
	}
</style>
