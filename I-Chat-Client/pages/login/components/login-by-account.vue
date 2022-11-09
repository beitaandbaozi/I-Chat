<template>
	<view class="login-by-account">
		<!-- 标题 -->
		<h1 class="title">Welcome Back</h1>
		<!-- 登录表单 -->
		<view class="login-form">
			<input type="text" class="input-content" placeholder="请输入QQ邮箱" placeholder-class="input-placeholder" />
			<input type="password" class="input-content" placeholder="请输入密码" placeholder-class="input-placeholder">
			<view class="setting">
				<!-- 记住密码 -->
				<text class="remember-content">Remember me</text>
				<!-- 忘记密码 -->
				<text class="forgot-content">Forgot Password?</text>
			</view>
			<view class="btn-login">Login</view>
			<view class="tip" @click="handleLogin">
				<text>New User?</text>
				<text class="sign">Sign Up</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const emit = defineEmits(['componentCheck'])
	const handleLogin = () => {
		emit('componentCheck', false)
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
