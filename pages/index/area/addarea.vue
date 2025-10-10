<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="新增收货地址" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<uv-form labelWidth="139rpx">
		<!-- 用户信息 -->
		<view class="area">
			<uv-form-item label="收货人">
				<uv-input border="none" placeholder="请填写收货人姓名">
				</uv-input>
			</uv-form-item>
			<view class="hr"></view>
			<uv-form-item label="手机号">
				<uv-input border="none" placeholder="请填写收货人手机号">
				</uv-input>
			</uv-form-item>
		</view>
		<!-- 地址 -->
		<view class="area">
			<uv-form-item label="省市地址">
				<uv-input border="none" placeholder="选择省市区县">
				</uv-input>
				<template v-slot:right>
					<uv-icon name="arrow-right"></uv-icon>
				</template>
			</uv-form-item>
			<view class="hr"></view>
			<uv-form-item label="详细地址">
				<uv-input border="none" placeholder="请填写街道、小区、楼栋单元、门牌号等">
				</uv-input>
			</uv-form-item>
		</view>
		<!-- 选项 -->
		<view class="area">
			<view class="areadefault">
				<text>设为默认地址</text>
				<uv-form-item>
					<uv-switch ></uv-switch>
				</uv-form-item>
			</view>
			<view class="hr"></view>
			<view class="tags">
				<text>标签</text>
				<view class="tag">
					<view class="action">学校</view>
					<view>家</view>
					<view>公司</view>
				</view>
			</view>
		</view>
		</uv-form>
		<!-- 底部确定 -->
		<view class="bottom">
			<view>
				确定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F2F4F6;
	padding: 0 30rpx;
}
.area{
	width: max-content;
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 20rpx 30rpx;
	margin-top: 30rpx;
	.hr{
		width: 630rpx;
		height: 2rpx;
		background: #EFEFEF;
		margin: 20rpx 0;
	}
	.areadefault{
		display: flex;
		justify-content: space-between;
		align-items: center;
		text{
			padding: 10rpx 0;
		}
	}
	.tags{
		padding: 10rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tag{
			display: flex;
			gap: 20rpx;
			view{
				width: 140rpx;
				height: 72rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F6F6F6;
				border-radius: 16rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #111111;
				line-height: 42rpx;
			}
			.action{
				background: rgba(13, 124, 255, .1);
				color: #0D7CFF;
			}
		}
	}
}
.bottom{
	width: 750rpx;
	height: 120rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	position: absolute;
	bottom: 0;
	left: 0rpx;
	padding: 20rpx 30rpx;
	height: 120rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	view{
		width: 690rpx;
		height: 80rpx;
		background: #0D7CFF;
		border-radius: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 28rpx;
	}
}
</style>
