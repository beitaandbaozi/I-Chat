<template>
	<view class="chat-user">
		<scroll-view scroll-y class="session-list">
			<!-- 搜索框 -->
			<search-by-input></search-by-input>
			<!-- 选项 -->
			<option-by-user></option-by-user>
			<!-- 好友列表 -->
			<list-by-user></list-by-user>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import SearchByInput from './components/search-by-input.vue'
	import OptionByUser from './components/option-by-user.vue'
	import ListByUser from './components/list-by-user.vue'
</script>

<style lang="scss">
	.chat-user {
		height: 100%;
		background-color: rgb(237, 237, 237);

		.session-list {
			height: 100%;
			overflow: auto;
		}
	}
</style>
