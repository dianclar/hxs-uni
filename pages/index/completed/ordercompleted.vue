<template>
	<view class="page">
		<!-- 标题 -->
		<uv-navbar :title="aftersalesservice?'售后订单提交！':'订单完成！'" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<!-- 图片 -->
		<view>
			<image src="/static/mall/Img_DDWC_chenggong.png" mode=""></image>
		</view>
		<!-- 标题 -->
		<view class="title">
			{{aftersalesservice?'订单提交成功！':'订单完成！'}}
		</view>
		<!-- 说明 -->
		<view class="info">
			{{aftersalesservice?'您已提交订单，售后工作人员正在处理，请您耐心等待~':'您已提交订单，正在加急打包分拣装运，请您耐心等待~'}}
		</view>
		<!-- 按钮 -->
		<view class="button">
			<view class="order">
				{{aftersalesservice?'售后订单详情':'查看订单'}}
			</view>
			<view class="mall">
				{{aftersalesservice?'返回订单列表':'返回商城'}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aftersalesservice:true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.page{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
image{
	height: 314rpx;
	width: 314rpx;
	margin-bottom: 30rpx;
}
.title{
	font-family: PingFang SC;
	font-weight: bold;
	font-size: 36rpx;
	color: #1A1A1A;
	line-height: 24rpx;
}
.info{
	width: 434rpx;
	font-family: PingFang SC;
	font-weight: 500;
	font-size: 28rpx;
	color: #5A5A5A;
	line-height: 44rpx;
	margin: 60rpx;
	text-align: center;
}
.button{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30rpx;
	.order{
		width: 450rpx;
		height: 90rpx;
		background: linear-gradient(0deg, #0D7CFF 0%, #3F97FF 100%);
		border-radius: 45rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 24rpx;
	}
	.mall{
		width: 450rpx;
		height: 90rpx;
		background: rgba(13, 124, 255, .1);
		border-radius: 45rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #0D7CFF;
		line-height: 24rpx;
	}
}
</style>
