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

// 登录时初始化缓存信息
export function initStateInfo(data) {
	store.commit('setPropName', {
		propName: 'sender',
		value: data?.myInfo
	})
	uni.setStorageSync('token', data?.token)
	uni.setStorageSync('sender', JSON.stringify(data?.myInfo))
}
