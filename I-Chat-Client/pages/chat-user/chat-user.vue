<template>
	<view class="chat-user">
		<scroll-view scroll-y class="session-list">
			<!-- 搜索框 -->
			<view class="search">
				<input type="text" placeholder="搜索" class="input-search" placeholder-class="placeholder-seacrch" />
				<input type="button" class="btn-search" />
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
	.chat-user {
		height: 100%;
		background-color: rgb(237, 237, 237);

		.session-list {
			height: 100%;
			overflow: auto;

			.search {
				margin: 20rpx;
				position: relative;

				.input-search {
					height: 55rpx;
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
					height: 59rpx;
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
		}
	}
</style>
