<template>
	<view class="chat-content">
		<!-- 内容 -->
		<scroll-view scroll-y class="chat-content-scroll">
			<view></view>
		</scroll-view>
		<!-- 文本区域 -->
		<view class="chat-botton">
			<!-- 输入框 -->
			<view class="input-box">
				<view class="textarea-box">
					<view class="text-mode">
						<view class="box">
							<textarea auto-height></textarea>
						</view>
						<!-- 表情包 -->
						<view class="em">
							<img src="../../static/img/em.png">
						</view>
					</view>
				</view>
				<!-- 功能选项 -->
				<view class="more">
					<img src="../../static/img/option-add.png">
				</view>
				<!-- 发送按钮 -->
				<view class="send">
					<view class="btn">发送</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script lang="ts" setup>
	import store from '@/store/index.js'
	import {
		computed,
		onMounted
	} from "vue";

	const reciver = computed(() => store.state.reciver)
	onMounted(() => {
		uni.setNavigationBarTitle({
			title: reciver.value.Name
		})
	})
</script>

<style lang="scss" scoped>
	.chat-content {
		height: 100vh !important;

		// 内容
		.chat-content-scroll {
			background: rgb(238, 238, 238);
			width: 100%;
			height: calc(100vh - 100rpx);
			overflow-y: auto;
		}

		// 输入框
		.chat-botton {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100rpx;
			background-color: #f2f2f2;
			position: fixed;
			z-index: 20;
			bottom: -2rpx;
			border-top: solid 1rpx #ddd;
			// transition: all .15s linear;

			.input-box {
				display: flex;
				align-items: center;
				width: 100%;
				// 设置最小高度是方便文本域超出的时候自动往上撑 所以不能定死
				min-height: 100rpx;
				padding: 0 1%;
				background-color: #f2f2f2;
				position: fixed;
				z-index: 20;
				bottom: -2px;
				// transition: all .15s linear;
				border-top: solid 0.5px #ddd;

				.textarea-box {
					width: 100%;
					min-height: 70rpx;
					margin-top: 15rpx;

					.text-mode {
						display: flex;
						width: 100%;
						min-height: 70rpx;
						background-color: #fff;
						border-radius: 40rpx;

						.box {
							width: 100%;
							padding-left: 30rpx;
							min-height: 70rpx;
							display: flex;
							align-items: center;

							textarea {
								width: 100%;
							}
						}

						.em {
							margin-top: 5rpx;
							flex-shrink: 0;
							width: 50rpx;
							height: 50rpx;

							img {
								width: 100%;
								height: 100%
							}
						}
					}
				}

				.more {
					flex-shrink: 0;
					width: 50rpx;
					height: 50rpx;

					img {
						width: 100%;
						height: 100%
					}
				}

				.send {
					flex-shrink: 0;
					width: 100rpx;
					height: 100rpx;
					display: flex;
					align-items: center;

					.btn {
						width: 90rpx;
						height: 56rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						background: linear-gradient(to right, #55aaff, #00aaff);
						color: #fff;
						border-radius: 6rpx;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
