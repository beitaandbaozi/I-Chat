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

