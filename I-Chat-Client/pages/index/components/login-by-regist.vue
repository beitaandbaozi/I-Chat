<template>
	<view class="login-by-regist">
		<!-- 标题 -->
		<h1 class="title">Create Account</h1>
		<!-- 注册表单 -->
		<view class="regist-form">
			<input type="text" class="input-content" placeholder="请输入QQ邮箱" placeholder-class="input-placeholder"/>
			<input type="text" class="input-content" placeholder="请输入昵称" placeholder-class="input-placeholder"/>
			<input type="password" class="input-content" placeholder="请输入密码" placeholder-class="input-placeholder">
			<view class="btn-login">SIGN UP</view>
			<view class="tip" @click="handleLogin">
				<text>Already have an account ?</text>
				<text class="sign">Login</text>
			</view>
		</view>
	</view>

</template>

<script lang="ts" setup>
	const emit = defineEmits(['componentCheck'])
	const handleLogin = () => {
		emit('componentCheck', true)
	}
</script>

<style lang="scss">
	.title {
		text-align: center;
		font-size: 24px;
		font-weight: 600;
		padding-top: 15%;
	}
	
	.regist-form {
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
