import store from '@/store/index.js'
// 封装uni提示窗
export function tipMesg(title, icon, time, mask) {
	title = title == undefined ? '系统繁忙' : title;
	icon = icon == undefined ? 'none' : icon;
	time = time == undefined ? 1000 : time;
	mask = mask == undefined ? true : mask;
	uni.showToast({
		title,
		icon,
		mask,
		duration: time
	})
}

// 初始化缓存信息
export function initStateInfo(data) {
	store.commit('setPropName', {
		propName: 'sender',
		value: data?.myInfo
	})
	uni.setStorageSync('token', data?.token)
	uni.setStorageSync('sender', JSON.stringify(data?.myInfo))
}

// 封装reLaunch，和navigateTo没啥区别
export function reLaunch(url, params = {}) {
	let part = '';
	for (var item in params) {
		part += '&' + item + '=' + params[item];
	}
	url = "/pages" + url + part.replace('&', '?');
	uni.reLaunch({
		url: url,
		fail(err) {
			console.log('reLaunch跳转出错', err)
		},
	})
}

// 浏览器本地缓存判断当前用户是否已经登录过
export function isLogin() {
	return uni.getStorageSync('token') && uni.getStorageSync('sender') ? true : false
}
