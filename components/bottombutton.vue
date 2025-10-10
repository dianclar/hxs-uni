<template>
	<view>
		<view class="bottom">
			<view class="bottombutton" @click="()=>$emit('buttonclick')">
				{{ title }}
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.bottom{
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 5rpx 0rpx rgba(169,169,169,0.35);
	.bottombutton{
		margin: 20rpx 30rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0D7CFF;
		border-radius: 16rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
	}
}
</style>