<template>
	<view class="search">
		<input type="text" placeholder="搜索" class="input-search" placeholder-class="placeholder-seacrch" />
		<input type="button" class="btn-search" />
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
	.search {
		margin: 20rpx;
		position: relative;

		.input-search {
			height: 60rpx;
			padding-left: 13px;
			padding-right: 46px;
			border: 2px solid #A3D0C3;
			border-radius: 5px;
			background: #fff;
			color: #9E9C9C;
		}

		.placeholder-seacrch {
			color: #9E9C9C;
		}

		.btn-search {
			position: absolute;
			top: 0;
			right: 0;
			width: 80rpx;
			height: 63rpx;
			cursor: pointer;
			background: #A3D0C3;
			border-radius: 0 5px 5px 0;

			&::before {
				content: '';
				position: absolute;
				top: 20%;
				right: 20%;
				display: block;
				width: 40rpx;
				height: 40rpx;
				background: url('../../static/img/img-search.png');
				background-size: cover;
			}
		}

	}
</style>
