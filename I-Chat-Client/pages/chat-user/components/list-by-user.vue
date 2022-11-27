<template>
	<view class="list-by-user">
		<template v-for="(item) in userList" :key="item.Id">
			<view class="user-list">
				<view class="left">
					<img :src="item.Avatar">
				</view>
				<view class="right">
					<view class="name">
						{{item.Name}}
					</view>
					<view class="nick-name">
						{{item.NickName}}
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		post
	} from '@/script/request.js'
	import {
		APIURL
	} from '@/script/config.js'
	import {
		computed,
		onMounted,
		ref
	} from "vue";
	import store from '@/store/index.js'
	import {
		tipMesg
	} from '@/script/common.js'

	// 获取好友列表
	const userFromStore = computed(() => store.state.allSessionList)
	const userList = ref < any > ([])
	const getUserList = () => {
		post(`${APIURL}/users/userList`, {
			id: store.state.sender.Id,
		}).then(res => {
			if (res?.code === 200) {
				userList.value.push(...res.data)
				// 存到vuex缓存中
				store.commit('setPropName', {
					propName: 'allSessionList',
					value: userList.value
				})
			} else {
				userList.value = []
				tipMesg(res?.message)
			}
		})
	}
	if (userFromStore.value.length > 0) {
		userList.value = userFromStore
	} else {
		getUserList()
	}
</script>

<style lang="scss">
	.list-by-user {
		margin-top: 20rpx;

		.user-list {
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 8rpx;


			.left {
				width: 18%;
				height: 100%;
				margin-left: 20rpx;

				img {
					width: 96rpx;
					height: 96rpx;
				}
			}

			.right {
				width: 82%;
				height: 100%;
				border-bottom: 1px solid #EFEFEF;
				text-align: left;
				padding: 20rpx 0;

				.name {
					height: 60rpx;
					line-height: 60rpx;
				}

				.nick-name {
					font-size: 12px !important;
					color: #707070;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
