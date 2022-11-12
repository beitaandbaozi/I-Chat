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
	const handleChck = (value: boolean) => {
		currentComponet.value = value
	}
</script>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		/* 加载背景图 */
		background-image: url('../../static/img/login-bg.jpg');
		/* 背景图垂直、水平均居中 */
		background-position: center center;
		/* 背景图不平铺 */
		background-repeat: no-repeat;
		/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
		background-attachment: fixed;
		/* 让背景图基于容器大小伸缩 */
		background-size: cover;
		/* 设置背景颜色，背景图加载过程中会显示背景色 */
		background-color: #464646;
	}
</style>
