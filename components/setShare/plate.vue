<template>
	<view class="dad">
		<view class="left">
			<text>主题板块 </text>
			<text class="red">*</text>
		</view>
		<view class="right">
			<view>请选择或输入</view>
			<uv-icon name="arrow-right" size="22rpx"></uv-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.dad{
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	display: flex;
	justify-content: space-between;
	padding: 35rpx 30rpx;
	margin: 20rpx 30rpx;
	.left{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 30rpx;
		.red{
			color: #D02835;
		}
	}
	.right{
		display: flex;
		gap: 16rpx;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #9BA2AF;
		line-height: 28rpx;
	}
}
</style>
