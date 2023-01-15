<template>
	<view class="social-content">
		<view class="left">
			<img :src="contentDetails.AvatarUrl" alt="avatr">
		</view>
		<view class="right">
			<!-- 昵称 -->
			<text class="nick-name">{{contentDetails.PublishName}}</text>
			<!-- 内容 -->
			<!-- 文本内容 -->
			<template v-if="contentDetails.Content">
				<view class="text-content" @click="jumpSocialDetail">
					<TextMore :model="content" />
				</view>
			</template>
			<!-- 图片内容 -->
			<template v-if="contentDetails.ImgList">
				<view class="image-list">
					<ImageContent :imageList="contentDetails.ImgList" />
				</view>
			</template>
			<!-- 发布时间、删除、点赞和评论功能 -->
			<view class="publish-options-flex">
				<!-- 发布时间、删除按钮 -->
				<view class="publish-delete-box">
					<text class="publish-time">
						{{computedTime(contentDetails.CreateDateUtc)}}
					</text>
					<!-- 删除 -->
					<template v-if="contentDetails.PublishId === store.state.sender.Id">
						<text class="btn-delete" @click="handleDeleteCommunity(contentDetails.Id)">删除</text>
					</template>
				</view>
				<view class="options-flex">
					<!-- 区域 -->
					<template v-if="optionsFlag">
						<view class="options-content">
							<view class="option" @click="handleGiveALike(contentDetails)">
								<template v-if="!contentDetails.IsLike">
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
							<view class="option" @click="handleComment(contentDetails)">
								<svg class="icon img-option" aria-hidden="true">
									<use xlink:href="#icon-pinglun"></use>
								</svg>
								<text>评论</text>
							</view>
						</view>
					</template>
					<!-- 按钮 -->
					<view class="options-btn" @click.stop="handleOptions">
						<svg class="icon img-options" aria-hidden="true">
							<use xlink:href="#icon-danse_gongnengjihe-copy"></use>
						</svg>
					</view>
				</view>
			</view>
			<!-- 点赞区和评论区 -->
			<template v-if="contentDetails.LikeNum.length || contentDetails.CommentList.length">
				<view class="like-comment-area">
					<template v-if="contentDetails.LikeNum.length">
						<!-- 点赞 -->
						<view class="like-area">
							<svg class="icon img-like" aria-hidden="true">
								<use xlink:href="#icon-aixin-copy"></use>
							</svg>
							<!-- 点赞的用户数据 -->
							<view class="like-users">
								<template v-for="(item,index) in contentDetails.LikeNum" :key="index">
									<text>{{item.Name}}</text>
								</template>
							</view>
						</view>
					</template>
					<!-- 评论 -->
					<template v-if="contentDetails.CommentList.length > 0">
						<view class="comment-area">
							<template v-for="(item,index) in contentDetails.CommentList" :key="item.Id">
								<!-- 普通评论信息 -->
								<template v-if="item.Type === 0">
									<view class="comment-user" @click="replyComment(item,index)">
										<text class="send-user">{{item.SendName}}</text>
										<text class="point">:</text>
										<text class="content">{{item.Content}}</text>
									</view>
								</template>
								<!-- 回复的评论 -->
								<template v-else-if="item.Type === 1">
									<view class="comment-user" @click="replyComment(item,index)">
										<text class="send-user">{{item.SendName}}</text>
										<text class="point">回复</text>
										<text class="send-user">{{item.ReceiverName}}</text>
										<text class="point">:</text>
										<text>{{item.Content}}</text>
									</view>
								</template>
							</template>
						</view>
					</template>
				</view>
			</template>
		</view>
	</view>
	<!-- 评论组件 -->
	<edit-draw v-model:drawVisible="commitCommentFlag" mode="bottom" drawerWidth="100%" drawerHeight="40%">
		<edit-comment :defaultPlaceHolder="commitCommentType.type === 1?('回复'+commitCommentType.receiverName+'：'):'评论：'"
			@close="commitCommentFlag = false" @handlecommitComment="handlecommitComment" />
	</edit-draw>
	<!-- 删除组件 -->
	<edit-draw class="delete-box" v-model:drawVisible="deleteCommentFlag" mode="bottom" drawerWidth="100%"
		drawerHeight="20%">
		<delete-comment @close="deleteCommentFlag = false" @handleDeleteComment="handleDeleteComment" />
	</edit-draw>
</template>

<script lang="ts" setup>
	// 文本内容组件
	import TextMore from './text-more.vue'
	// 图片内容组件
	import ImageContent from './image-content.vue'
	// 抽屉组件
	import EditDraw from '../../../components/community/edit-draw.vue'
	// 评论组件
	import EditComment from './edit-comment.vue'
	// 删除组件
	import DeleteComment from './delete-comment.vue'
	import {
		reactive,
		ref,
		watch
	} from 'vue'
	import store from '@/store/index.js'
	import {
		post
	} from '@/script/request.js'
	import {
		APIURL
	} from '@/script/config.js'
	import {
		tipMesg
	} from '@/script/common.js'
	const props = defineProps({
		content: Object
	})
	// 朋友圈内容
	const contentDetails = ref(props.content)
	watch(() => props.content, (value) => {
		console.log('watch props.content', value)
		contentDetails.value = value
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
	// 发表评论组件flag
	const commitCommentFlag = ref < boolean > (false)
	// 提交评论数据结构  ---还未完善的数据结构
	const commitCommentType = reactive({
		// 评论的类型  0代表是个人评论、1代表是回复的评论
		type: 0,
		// 接收用户昵称
		receiverName: '',
		// 接收用户Id
		receiverId: 0,
		// 被评论的内容
		communityContent: '',
		// 朋友圈的编码
		communityId: 0,
		// 评论的图片
		communityImg: ""
	})
	// 点击评论按钮 -> 展开评论器组件
	const handleComment = (content: any) => {
		// 开启组件
		commitCommentFlag.value = true
		// 关闭点赞和评论的模块
		optionsFlag.value = false
		// 初始化数据结构
		commitCommentType.type = 0 //个人评论
		commitCommentType.receiverName = '' //接收人昵称,这里给空是因为数据结构认定type=0的评论receiverName都为空字符串
		commitCommentType.receiverId = content.PublishId //接收用户Id  
		commitCommentType.communityContent = content.Content //被评论内容
		commitCommentType.communityId = content.Id //朋友圈的编码
		commitCommentType.communityImg = content.ImgList.length > 0 ? content.ImgList[0] : "" //评论的图片
	}
	// 点击评论数据进行评论
	const replyComment = (content: any, index: number) => {
		console.log('====', content)
		// 如果是自己的评论---->展示删除评论组件
		if (content.SendId === store.state.sender.Id) {
			deleteCommentFlag.value = true
			deletCommunityId.value = content.Id
			deletCommunityIndex.value = index
		} else {
			// 开启组件
			commitCommentFlag.value = true
			// 初始化数据结构
			commitCommentType.type = 1 //回复评论
			// 接收人昵称, 以第三个人的视角 '我'看到了'卡雷特'回复'韩子奇'的评论，'卡雷特'点击肯定是显示删除组件，'我'点击肯定是回复'卡雷特'
			commitCommentType.receiverName = content.SendName
			commitCommentType.receiverId = content.SendId //接收用户Id
			//被评论内容, 这里也是以第三人称的视角来看
			commitCommentType.communityContent = content.Content
			commitCommentType.communityId = content.CommunityId //朋友圈的编码
			commitCommentType.communityImg = content.CommunityImg //评论的图片
		}
	}
	// 提交评论
	const handlecommitComment = (content: string) => {
		let model = {
			communityId: commitCommentType.communityId,
			sendId: store.state.sender.Id,
			sendName: store.state.sender.Name,
			receiverId: commitCommentType.receiverId,
			receiverName: commitCommentType.receiverName,
			type: commitCommentType.type,
			avatarUrl: store.state.sender.Avatar,
			content,
			communityImg: commitCommentType.communityImg,
			communityContent: commitCommentType.communityContent
		}
		post(`${APIURL}/community/insertCommunityComment`, model).then(res => {
			if (res?.code === 200) {
				// 更新最新的评论内容
				let id = commitCommentType.communityId;
				// 这里执行的是增加操作，所以需要重新更新一下对应communityId的评论数据，删除有足够的条件可以在页面渲染，添加不行
				getCommentContentById(id)
			} else {
				tipMesg(res?.message)
			}
		})

	}
	// 根据朋友圈Id获取最新的评论区内容
	const getCommentContentById = (id: number) => {
		let model = {
			communityId: id
		}
		post(`${APIURL}/community/getCommentContentById`, model).then(res => {
			if (res?.code === 200) {
				// 更新
				contentDetails.value!.CommentList = res?.data
			} else {
				tipMesg(res?.message)
			}
		})
	}
	// 删除评论
	const deleteCommentFlag = ref < boolean > (false)
	const deletCommunityId = ref < number > (0)
	const deletCommunityIndex = ref < number > (-1)
	const handleDeleteComment = () => {
		let model = {
			id: deletCommunityId.value
		}
		post(`${APIURL}/community/deleteCommentContentById`, model).then(res => {
			if (res?.code === 200) {
				// 删除操作 -----> 
				// 这里的时候其实已经在数据库删除数据了，只是目前在页面删除，因为重新加载的时候会重新获取数据，所以这里肯定不用调用更新的函数
				contentDetails.value!.CommentList.splice(deletCommunityIndex.value, 1)
				// 关闭抽屉
				deleteCommentFlag.value = false
			} else {
				tipMesg(res?.message)
			}
		})
	}
	// 进行点赞操作
	const handleGiveALike = (content: any) => {
		// 关闭评论区
		optionsFlag.value = false
		// 接口参数
		let model = {
			userId: store.state.sender.Id,
			communityId: content.Id
		}
		// 根据IsLike来判断是点赞还是取消点赞
		if (!content.IsLike) {
			// 点赞
			post(`${APIURL}/community/giveALike`, model).then(res => {
				if (res?.code === 200) {
					// icon图标flag
					contentDetails.value!.IsLike = true
					// 点赞区补充用户
					contentDetails.value!.LikeNum = res?.data
				}
			})
		} else {
			// 取消点赞
			post(`${APIURL}/community/cancelALike`, model).then(res => {
				if (res?.code === 200) {
					// icon图标flag
					contentDetails.value!.IsLike = false
					// 点赞区补充用户
					contentDetails.value!.LikeNum = res?.data
				}
			})
		}
	}
	// 点击一条朋友圈
	const jumpSocialDetail = () => {
		console.log('jumpSocialDetail')
		// 如果展开了点赞和评论页面，应该立即关闭
		if (optionsFlag.value) {
			optionsFlag.value = !optionsFlag.value
		}
		// 跳转到朋友圈详情页面 ----埋坑
	}
	// 删除朋友圈
	const emit = defineEmits(['handleRefresh'])
	const handleDeleteCommunity = (Id: number) => {
		let model = {
			Id
		}
		post(`${APIURL}/community/deleteCommunityById`, model).then(res => {
			if (res?.code === 200) {
				uni.showLoading({
					title: '删除成功🥇'
				})
				// 重新加载朋友圈
				emit('handleRefresh')
			}
		}).finally(() => {
			uni.hideLoading()
		})
	}
</script>

<style lang="scss" scoped>
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

				.publish-delete-box {
					font-size: 25rpx;

					// 发布时间
					.publish-time {
						margin-right: 10rpx;
						color: rgb(158, 158, 158);
					}

					.btn-delete {
						color: rgb(87, 107, 149);
					}
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

				border-radius: 5rpx;

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
							font-size: 25rpx;
							height: 40rpx;
							line-height: 40rpx;
							color: rgb(87, 107, 149);
						}
					}
				}

				// 评论区
				.comment-area {
					.comment-user {
						padding: 15rpx;
						font-size: 25rpx;

						.send-user {
							color: rgb(87, 107, 149);
						}

						.point {
							margin: 0 10rpx;
						}

					}
				}
			}
		}

	}

	// 删除组件
	.delete-box {
		:deep(.tui-drawer-container) {
			border-top-right-radius: 20rpx;
			border-top-left-radius: 20rpx;
		}
	}
</style>
