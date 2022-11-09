<template>
	<view class="login">
		<login-by-account v-show="currentComponet" @componentCheck="handleChck"></login-by-account>
		<login-by-regist v-show="!currentComponet" @componentCheck="handleChck"></login-by-regist>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue'
	import LoginByAccount from './components/login-by-account.vue'
	import LoginByRegist from './components/login-by-regist.vue'
	const currentComponet = ref < boolean > (true)
	const handleChck = (value:boolean) => {
		currentComponet.value = value
	}
</script>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		background: url('../../static/img/login-bg.jpg') no-repeat center;
	}
</style>
