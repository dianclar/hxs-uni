<template><div class="dad">
    <view class="title">
    	<text>{{title}}</text>
    	<text class="red"> *</text>
    </view>
	<uv-upload>
		<view class="fileimg">
			<uv-icon name="/static/mine/Icon_SH_tupianshangchuan.png"
			width="52rpx" height="52rpx"></uv-icon>
		</view>
	</uv-upload>
</div></template>

<script>

export default {
	props:['title'],
    data() {
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.dad{
	padding: 30rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	.title{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 30rpx;
		margin-bottom: 30rpx;
		.red{
			color: #D02835;
		}
	}
	.fileimg{
		height: 140rpx;
		width: 265rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		border: 2px dashed #949393;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
	}
}
</style>
