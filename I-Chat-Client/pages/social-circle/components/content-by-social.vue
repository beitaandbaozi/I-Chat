<template>
	<view class="social-content">
		<view class="left">
			<img :src="content.AvatarUrl" alt="avatr">
		</view>
		<view class="right">
			<!-- 昵称 -->
			<text class="nick-name">{{content.PublishName}}</text>
			<!-- 内容 -->
			<!-- 文本内容 -->
			<template v-if="content.Content">
				<view class="text-content">
					<TextMore :model="content" />
				</view>
			</template>
			<!-- 图片内容 -->
			<template v-if="content.ImgList">
				<view class="image-list">
					<ImageContent :imageList="content.ImgList" />
				</view>
			</template>
			<!-- 发布时间、点赞和评论功能 -->
			<view class="publish-options-flex">
				<view class="publish-time">
					{{computedTime(content.CreateDateUtc)}}
				</view>
				<view class="options-flex">
					<!-- 区域 -->
					<template v-if="optionsFlag">
						<view class="options-content">
							<view class="option">
								<template v-if="!content.IsLike">
									<svg class="icon img-option" aria-hidden="true">
										<use xlink:href="#icon-weidianzan"></use>
									</svg>
									<text>赞</text>
								</template>
								<template v-else>
									<svg class="icon img-option" aria-hidden="true">
										<use xlink:href="#icon-dianzan"></use>
									</svg>
									<text>取消</text>
								</template>
							</view>
							<view class="option" @click="handleComment">
								<svg class="icon img-option" aria-hidden="true">
									<use xlink:href="#icon-pinglun"></use>
								</svg>
								<text>评论</text>
							</view>
						</view>
					</template>
					<!-- 按钮 -->
					<view class="options-btn" @click="handleOptions">
						<svg class="icon img-options" aria-hidden="true">
							<use xlink:href="#icon-danse_gongnengjihe-copy"></use>
						</svg>
					</view>
				</view>
				<!-- 点赞区和评论 -->
			</view>
			<!-- 点赞区和评论区 -->
			<template v-if="content.LikeNum.length">
				<view class="like-comment-area">
					<view class="like-area">
						<svg class="icon img-like" aria-hidden="true">
							<use xlink:href="#icon-aixin-copy"></use>
						</svg>
						<!-- 点赞的用户数据 -->
						<view class="like-users">
							<template v-for="(item,index) in content.LikeNum" :key="index">
								<text>{{item.Name}}</text>
							</template>
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
	<!-- 评论组件 -->
	<edit-draw v-model:editDrawVisible="editDrawVisible" mode="bottom" drawerWidth="100%" drawerHeight="40%"
		@updateVisible="handleCloseDraw">
	</edit-draw>
</template>

<script lang="ts" setup>
	// 文本内容组件
	import TextMore from './text-more.vue'
	// 图片内容组件
	import ImageContent from './image-content.vue'
	// 评论组件
	import EditDraw from '../../../components/community/edit-draw.vue'
	import {
		ref
	} from 'vue'
	const props = defineProps({
		content: Object
	})
	// 发布时间处理
	const computedTime = (time: string) => {
		// 开始时间
		const startTime = +new Date(time) + ''
		// 现在时间
		const nowTime = +new Date() + ''
		// 分钟
		const Minutes = 60 * 1000 + ''
		// 小时
		const Hours = 60 * 60 * 1000 + ''
		// 天
		const Days = 24 * 60 * 60 * 1000 + ''
		// 相差天数
		const diffDays = parseInt((nowTime - startTime) / Days)
		// 相差小时
		const diffHours = parseInt((nowTime - startTime) / Hours)
		// 相差分钟
		const diffMinuntes = parseInt((nowTime - startTime) / Minutes)
		if (diffDays !== 0) {
			return diffDays + '天前'
		} else if (diffDays === 0 && diffHours !== 0) {
			return diffHours + '小时前'
		} else if (diffDays === 0 && diffHours === 0 && diffMinuntes !== 0) {
			return diffMinuntes + '分钟前'
		} else if (diffDays === 0 && diffHours === 0 && diffMinuntes === 0) {
			return '刚刚'
		}
	}
	// 朋友圈内容
	const content = props.content
	// 点赞和评论出现
	const optionsFlag = ref < boolean > (false)
	const handleOptions = () => {
		optionsFlag.value = !optionsFlag.value
	}
	// 编辑抽屉组件flag
	const editDrawVisible = ref < boolean > (false)
	// 点击评论按钮 -> 展开评论器组件
	const handleComment = () => {
		// 开启组件
		editDrawVisible.value = true
		// 关闭点赞和评论的模块
		optionsFlag.value = false
	}
	// 关闭评论器组件
	const handleCloseDraw = (value: boolean) => {
		editDrawVisible.value = value
	}
</script>

<style lang="scss">
	.social-content {
		margin: 60rpx 40rpx 40rpx 40rpx;

		display: flex;

		.left {
			img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 5%;
			}
		}

		.right {
			margin-left: 20rpx;

			width: 100%;
			border-bottom: 1px solid #F3F3F3;

			display: flex;
			flex-direction: column;
			justify-content: center;

			// 昵称
			.nick-name {
				color: rgb(87, 107, 149);
				font-size: 15px;
			}

			// 文本内容
			.text-content {
				margin-top: 20rpx;
				width: 100%;
			}

			// 图片内容
			.image-list {
				margin-top: 10rpx;
				width: 100%;
			}

			.publish-options-flex {
				margin: 15rpx 0 20rpx 0;
				height: 60rpx;

				display: flex;
				justify-content: space-between;
				align-items: center;

				// 发布时间
				.publish-time {
					font-size: 25rpx;
					color: rgb(158, 158, 158);
				}

				// 点赞和评论功能
				.options-flex {

					height: 60rpx;

					display: flex;
					justify-content: flex-end;
					align-items: center;

					// 区域
					.options-content {
						margin-right: 20rpx;

						width: 300rpx;
						height: 80rpx;
						background-color: rgb(76, 76, 76);
						border-radius: 10rpx;

						animation: wakeup .2s ease;

						display: flex;
						justify-content: space-around;
						align-items: center;

						.option {
							width: 50%;
							height: 100%;

							display: flex;
							justify-content: center;
							align-items: center;

							.img-option {
								width: 40rpx;
								height: 40rpx;

								margin-right: 10rpx;
							}

							text {
								font-size: 20rpx;
								color: #fff;
							}

							&:active {
								border-radius: 10rpx;
								background-color: rgb(68, 68, 68);
							}
						}
					}

					@keyframes wakeup {
						0% {
							width: 200rpx;
						}

						100% {
							width: 300rpx;
						}
					}

					// 按钮
					.options-btn {
						width: 60rpx;
						height: 40rpx;

						background: rgb(247, 247, 247);

						display: flex;
						justify-content: center;
						align-items: center;

						.img-options {
							width: 60rpx;
							height: 45rpx;
						}
					}
				}
			}

			// 点赞和评论区
			.like-comment-area {
				margin-bottom: 40rpx;

				width: 100%;
				background: rgb(247, 247, 247);

				display: flex;
				flex-direction: column;
				justify-content: center;

				// 点赞区
				.like-area {
					padding: 10rpx 0;
					display: flex;
					align-items: flex-start;

					.img-like {
						margin-left: 20rpx;
						width: 40rpx;
						height: 40rpx;
					}

					.like-users {
						flex: 1;

						margin-left: 10rpx;

						// 点赞用户过多时换行处理
						display: flex;
						flex-wrap: wrap;

						text {
							margin-right: 10rpx;
							font-size: 20rpx;
							height: 40rpx;
							line-height: 40rpx;
							color: rgb(87, 107, 149);
						}
					}
				}
			}
		}
	}
</style>
