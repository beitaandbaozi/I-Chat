<template>
	<view class="login-by-account">
		<!-- 标题 -->
		<h1 class="title">Welcome Back</h1>
		<!-- 登录表单 -->
		<view class="login-form">
			<input type="text" class="input-content" placeholder="请输入QQ邮箱" placeholder-class="input-placeholder"
				v-model="loginForm.userName" />
			<input type="password" class="input-content" placeholder="请输入密码" placeholder-class="input-placeholder"
				v-model="loginForm.password">
			<view class="setting">
				<!-- 记住密码 -->
				<text class="remember-content">Remember me</text>
				<!-- 忘记密码 -->
				<text class="forgot-content">Forgot Password?</text>
			</view>
			<view class="btn-login" @tap="handleLogin">Login</view>
			<view class="tip" @click="toRegist">
				<text>New User?</text>
				<text class="sign">Sign Up</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive
	} from "vue";
	import {
		tipMesg,
		initStateInfo,
		reLaunch
	} from '@/script/common.js'
	import {
		emailValidate,
		APIURL
	} from '@/script/config.js'
	import store from '@/store/index.js'; //需要引入store
	import {
		post
	} from '@/script/request.js'
	
	
	
	const emit = defineEmits(['componentCheck'])
	const toRegist = () => {
		emit('componentCheck', false)
	}
	const loginForm = reactive({
		userName: '',
		password: ''
	})
	const handleLogin = () => {
		// 判断邮件是否为空
		if (!loginForm.userName) {
			tipMesg('请输入邮箱')
			return
		}
		if (!emailValidate.test(loginForm.userName)) {
			tipMesg('请输入正确的邮箱')
			loginForm.userName = ''
			return
		}
		if (!loginForm.password) {
			tipMesg('请输入密码')
			return
		}
		post(`${APIURL}/users/login`,{userName:loginForm.userName,password:loginForm.password}).then(res => {
			if(res?.code == 200) {
				// 初始化vuex数据
				initStateInfo(res?.data)
				// 路由跳转
				reLaunch('/chat-user/chat-user')
			}else {
				tipMesg(res?.message)
			}
		})
	}
</script>

<style lang="scss">
	.title {
		text-align: center;
		font-size: 24px;
		font-weight: 600;
		padding-top: 15%;
	}

	.login-form {
		margin-top: 60rpx;
		width: 750rpx;

		.input-content {
			padding: 60rpx 0;
			margin: 0 60rpx;
			border-bottom: 1px solid rgb(222, 225, 230);
		}

		.input-placeholder {
			color: #e5e5e5
		}

		.setting {
			margin-top: 40rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.remember-content {
				font-size: 14px;
			}

			.forgot-content {
				color: rgb(113, 139, 92);
				font-size: 14px;
				font-weight: bolder;
			}
		}

		.btn-login {
			margin: 60rpx 100rpx 0 100rpx;
			background-color: rgb(113, 139, 92, .9);
			height: 40px;
			line-height: 40px;
			text-align: center;
			border-radius: 4px;
			color: #fff;
		}

		.tip {
			margin-top: 40rpx;
			text-align: center;
			font-size: 12rpx;
			color: #e5e5e5;

			.sign {
				margin-left: 10rpx;
				color: rgb(155, 55, 45);
				font-weight: bolder;
			}
		}
	}
</style>
