<template>
	<view class="chat-user">
		<scroll-view scroll-y class="session-list">
			<!-- 搜索框 -->
			<search-by-input></search-by-input>
			<!-- 选项 -->
			<option-by-user></option-by-user>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import SearchByInput from './components/search-by-input.vue'
	import OptionByUser from './components/option-by-user.vue'
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
