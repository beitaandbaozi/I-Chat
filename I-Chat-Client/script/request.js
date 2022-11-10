/**
 * post请求
 * @param {Object} url [地址]
 * @param {Object} data [参数]
 * @param {Object} header [请求头]
 */
export function post(url, data, header, isLoad) {
	header = header || "application/x-www-form-urlencoded";
	isLoad = isLoad == false ? isLoad : true;
	if (isLoad) {
		uni.showLoading({
			title: "Loading...",
			mask: true
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			method: "POST",
			header: {
				"content-type": header
			},
			success: function(result) {
				if (isLoad) uni.hideLoading();
				resolve.call(self, result.data)
			},
			fail: function(e) {
				if (isLoad) uni.hideLoading();
				reject.call(self, e)
			}
		})
	})
},
/**
 * get请求
 * @param {Object} url [地址]
 * @param {Object} data [参数]
 * @param {Object} header [请求头]
 */
export function get(url, data, header) {
	header = header || "application/x-www-form-urlencoded";
	uni.showLoading({
		title: "Loading...",
		mask: true
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			method: "GET",
			header: {
				"content-type": header
			},
			success: function(result) {
				uni.hideLoading();
				resolve.call(self, result.data)
			},
			fail: function(e) {
				uni.hideLoading();
				reject.call(self, e)
			}
		})
	})
}
