<template>
	<view class="login-by-regist" :class="showModel ? 'model': ''">
		<!-- 标题 -->
		<h1 class="title">Create Account</h1>
		<!-- 注册表单 -->
		<view class="regist-form">
			<input type="text" class="input-content" placeholder="请输入QQ邮箱" placeholder-class="input-placeholder"
				v-model="registEmail" :disabled="showModel" />
			<view class="btn-login" @click="handleRegist">Sing Up</view>
			<view class="tip" @click="toLogin">
				<text>Already have an account ?</text>
				<text class="sign">Login</text>
			</view>
		</view>
		<!-- 注册步骤 -->
		<view class="cover" v-show="showModel">
			<!-- 第一步 -->
			<view class="register-box" v-if="step === 1">
				<view class="close-btn" @click="handleClose">X</view>
				<!-- 验证码 -->
				<view class="input-validate">
					<input class="input-content" type="text" :maxlength="6" placeholder="请输入您的验证码"
						placeholder-class="input-placeholder" v-model="validateCode" />
				</view>
				<view class="option">
					<view class="btn" @click="sendValidateCode" v-if="!cutDownState">发送验证码</view>
					<view class="disabled-btn" v-else>已发送({{cutDownTime}})</view>
					<view :class="(validateCode.length === 6 && validateCodeState) ? 'btn' : 'disabled-btn'"
						@click="checkValidateCode">下一步
					</view>
				</view>
			</view>
			<!-- 第二步 -->
			<view class="register-box" v-if="step === 2">
				<view class="close-btn" @click="handleClose">X</view>
				<view class="input-validate">
					<!-- 用户名 -->
					<input class="input-content" type="text" placeholder="请输入用户名"
						placeholder-class="input-placeholder" />
					<!-- 密码 -->
					<input class="input-content" type="password" placeholder="请输入密码"
						placeholder-class="input-placeholder" />
					<!-- 确认密码 -->
					<input class="input-content" type="password" placeholder="请再次输入密码"
						placeholder-class="input-placeholder" />
				</view>
				<view class="option">
					<view class="btn">Sign Up</view>
				</view>
			</view>
		</view>


	</view>

</template>

<script lang="ts" setup>
	import {
		tipMesg,
	} from '@/script/common.js'
	import {
		ref
	} from 'vue'
	import {
		get,
		post
	} from '@/script/request.js'
	import {
		APIURL
	} from '@/script/config.js'

	const registEmail = ref < string > ('')

	const emit = defineEmits(['componentCheck'])
	const toLogin = () => {
		registEmail.value = ''
		emit('componentCheck', true)
	}

	// 获取当前qq号信息
	const loading = ref < boolean > (false)
	const getUserInfoByQQ = (qq: string) => {
		return new Promise((resolve, reject) => {
			loading.value = true
			get('https://tenapi.cn/qqname/?qq=' + qq).then(res => {
				if (res?.code === 200) {
					resolve(res)
				} else {
					let msg = res.msg || "查询的QQ号不存在";
					reject(msg)
				}
			}).finally(() => {
				loading.value = false;
			});
		})
	}
	// 点击注册
	const showModel = ref < boolean > (false)
	const step = ref < number > (1)
	const handleRegist = async () => {
		try {
			const option = registEmail.value.split('@')
			if (!registEmail.value || registEmail.value.indexOf('@qq.com') === -1 || option.length !== 2)
				return tipMesg('请输入QQ邮箱')
			// 当前QQ邮箱进行校验
			let res = await getUserInfoByQQ(option[0])
			showModel.value = true
			console.log('handleRegist', res)
		} catch (e) {
			//TODO handle the exception
			tipMesg(e)
		}
	}

	// 验证码
	const validateCode = ref < string > ('')

	// 验证码发送状态
	const validateCodeState = ref < boolean > (false)

	// 倒计时状态
	const cutDownState = ref < boolean > (false)

	// 倒计时时间
	const cutDownTime = ref < number > (60)

	// 定时器
	let timer: any = null

	// 当前时间-作为标识唯一验证码的表示
	const time = +new Date()

	// 发送验证码
	const sendValidateCode = () => {
		const query = {
			email: registEmail.value,
			timestamp: time
		}
		post(`${APIURL}/users/sendVerificationCode`, query).then(res => {
			if (res?.code === 200) {
				tipMesg(res?.message)
				// 设置状态
				validateCodeState.value = true
				cutDownState.value = true
				// 开始倒计时
				timer = setInterval(() => {
					if (cutDownTime.value < 1) {
						if (timer !== null) {
							clearInterval(timer);
							timer = null;
						}
						validateCodeState.value = false
						cutDownState.value = false
						cutDownTime.value = 60;
					} else {
						cutDownTime.value--;
					}
				}, 1000);
			} else {
				tipMesg(res?.message);
			}
		})
	}

	// 校验验证码
	const checkValidateCode = () => {
		let query = {
			verificationCode: validateCode.value,
			timestamp: time
		}
		if (!(validateCode.value.length === 6 && validateCodeState.value)) return
		post(`${APIURL}/users/checkVerificationCode`, query).then(res => {
			if (res?.code === 200) {
				if (timer !== null) {
					clearInterval(timer);
					timer = null;
				}
				// 校验正确之后跳转到步骤2
				step.value = 2
				// 重置倒计时秒数
				cutDownTime.value = 60;
				cutDownState.value = false
			} else {
				tipMesg(res?.message)
			}
		})
	}
	// 关闭验证时
	const handleClose = () => {
		showModel.value = false
		// 清空数据
		validateCode.value = ""
		step.value = 1
	}
</script>

<style lang="scss">
	.login-by-regist {
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

		.cover {
			.register-box {
				padding: 10px;
				width: 80%;
				background: rgb(229, 230, 238);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 5px;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				min-height: 400rpx;

				.close-btn {
					position: absolute;
					left: 50%;
					top: -50px;
					transform: translateX(-50%);
					height: 30px;
					width: 30px;
					font-size: 12px;
					color: #fff;
					background-color: #000;
					text-align: center;
					line-height: 30px;
					border-radius: 50%;
				}

				.input-content {
					margin: 60rpx 60rpx;
				}

				.input-placeholder {
					color: #000
				}

				.option {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					align-items: center;
					width: 100%;

					.btn {
						width: 40%;
						height: 40px;
						line-height: 40px;
						text-align: center;
						border-radius: 4px;
						color: #fff;
						background-color: #292D32;
						font-size: 13px;
					}

					.disabled-btn {
						width: 40%;
						height: 40px;
						line-height: 40px;
						text-align: center;
						border-radius: 4px;
						color: #888;
						background-color: #DEDEDE;
						font-size: 13px;
					}
				}
			}
		}
	}

	.model {
		height: 100vh;
		background: rgb(0, 0, 0, .3);
	}
</style>
