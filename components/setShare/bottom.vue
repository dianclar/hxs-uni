<template><div class="bottom">
<view class="double">
	<view class="leftbutton">
		AI一键生成
	</view>
	<view class="rightbutton"  @click="uni.$emit('button-poster')">
		生成海报
	</view>
</view>
    <uv-safe-bottom></uv-safe-bottom>
</div></template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.bottom{
	z-index: 1000;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 5rpx 0rpx rgba(169,169,169,0.35);
	.double{
		display: flex;
		gap: 30rpx;
		padding: 20rpx 30rpx;
		view{
			flex: 1;
			width: 0;
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
		.leftbutton{
			background: #FFFFFF;
			color: #0D7CFF;
			border: 1px dashed #0D7CFF;
			box-sizing: border-box; 
		}
	}
}
</style>
