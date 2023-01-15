<template>
	<view class="community-message-details">

	</view>
</template>

<script lang="ts" setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
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
	// 更新消息阅读状态
	const updateUnreadCommunityStatus = () => {
		let model = {
			receiverId: store.state.sender.Id,
			status: 1,
		}
		post(`${APIURL}/community/updateCommunityContentStateById`, model).then(res => {
			if (res?.code !== 200) {
				tipMesg(res?.message)
			}
		})
	}
	// onLoad接收路由参数
	onLoad((query: any) => {
		console.log('===', query.read)
		if (query.read == 1) {
			//更新状态
			updateUnreadCommunityStatus()
		}
	})
</script>

<style lang="scss" scoped>

</style>
