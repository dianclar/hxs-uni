<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="退货退款" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 退货商品 -->
		<view class="goodsinfo">
			<image src="/static/logo.png" mode=""></image>
			<view class="goodsinforight">
				<view class="goodsinforighttitlt">
					易中天带你读懂中国系列全套5册 读 ...
				</view>
				<view class="goodsinforightsubtitle">
					易中天带你读懂中国(5册)
				</view>
				<view class="goodsinforightprice">
					<view class="goodsinforightpriceleft">
						￥168.00
					</view>
					<view class="goodsinforightpriceright">
						×1
					</view>
				</view>
				<view class="goodsinforightguarantee">
					支持7天无理由退货
				</view>
			</view>
		</view>
		<!-- 表单 -->
		<view class="form">
			<view class="formitem" @click="aftersalesservice = true">
				<view class="formitemleft">
					退货方式
				</view>
				<view class="formitemchoice">
					<view>请选择</view>
					<uv-icon name="arrow-right" size="22rpx" color="rgba(170, 170, 170, 1)"></uv-icon>
				</view>
			</view>
			<view class="formitem" @click="reason = true">
				<view class="formitemleft">
					退款原因
				</view>
				<view class="formitemchoice">
					<view>请选择</view>
					<uv-icon name="arrow-right" size="22rpx" color="rgba(170, 170, 170, 1)"></uv-icon>
				</view>
			</view>
			<view class="formitem">
				<view class="formitemleft">
					退款金额：
				</view>
				<view class="formiteminput price">
					￥168.00
				</view>
			</view>
			<view class="formitem">
				<view class="formitemleft">
					退款原因：
				</view>
				<view class="formiteminput">
					请说明退款原因
				</view>
			</view>
		</view>
		<!-- 上传 -->
		<view class="upimg">
			<view class="upimgtitle">上传凭证</view>
			<uv-upload>
				<view class="upimgdata">
					<uv-icon name="/static/mine/Icon_SH_tupianshangchuan.png"
					width="48rpx" height="48rpx"></uv-icon>
				</view>
			</uv-upload>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottombutton" @click="openordercompleted">
				确定
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
		<!-- 退货方式 -->
		<uv-overlay :show="aftersalesservice"
		@click="aftersalesservice = false"
		zIndex=18888>
			<view class="aftersalesservice" v-show="aftersalesservice" @tap.stop>
				<view class="aftersalesservicetitle">
					<view></view>
					<view>退货方式</view>
					<uv-icon name="close" @click="aftersalesservice = false"></uv-icon>
				</view>
				<view class="aftersalesservicehr">
					
				</view>
				<view class="aftersalesserviceinfo" @click="openRefundreturn">
					<view class="aftersalesserviceinfoaction">上门取件</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="door"></uv-icon>
				</view>
				<view class="aftersalesserviceinfo">
					<view>自行快递点邮寄</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="!door"></uv-icon>
				</view>
				<view class="aftersalesservicehr">
					
				</view>
				<view class="aftersalesservicebutton">
					确定
				</view>
			</view>
		</uv-overlay>
		<!-- 退款原因 -->
		<uv-overlay :show="reason"
		@click="reason = false"
		zIndex=18888>
			<view class="aftersalesservice" v-show="reason" @tap.stop>
				<view class="aftersalesservicetitle">
					<view></view>
					<view>退款原因</view>
					<uv-icon name="close" @click="reason = false"></uv-icon>
				</view>
				<view class="aftersalesservicehr">
					
				</view>
				<view class="aftersalesserviceinfo" @click="openRefundreturn">
					<view class="aftersalesserviceinfoaction">拍错/多拍/效果不好/不喜欢</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="reasonitem==1"></uv-icon>
				</view>
				<view class="aftersalesserviceinfo">
					<view>和预期不符</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="reasonitem==2"></uv-icon>
				</view>
				<view class="aftersalesserviceinfo">
					<view>质量问题</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="reasonitem==3"></uv-icon>
				</view>
				<view class="aftersalesserviceinfo">
					<view>材质与商品描述不符</view>
					<uv-icon name="/static/mine/Icon_TC_gouxuanzhong.png"
					width="32rpx" height="32rpx" v-if="reasonitem==4"></uv-icon>
				</view>
				<view class="aftersalesservicehr">
					
				</view>
				<view class="aftersalesservicebutton">
					确定
				</view>
			</view>
		</uv-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aftersalesservice:false,
				door:true,
				reason:false,
				reasonitem:1
			}
		},
		methods:{
			openordercompleted(){
				uni.navigateTo({
					// url:'/pages/index/ordercompleted'
					url:'/pages/index/mall/Returndetails'
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #f0f0f0;
}
.goodsinfo{
	display: flex;
	justify-content: space-between;
	gap: 24rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin: 20rpx 30rpx;
	padding: 30rpx;
	image{
		width: 180rpx;
		height: 180rpx;
		background: #E0E0E0;
		border-radius: 10rpx;
		flex-shrink:0;
	}
	.goodsinforight{
		display: flex;
		flex-direction: column;
		gap: 15rpx;
		flex: 1;
		width: 0;
		.goodsinforighttitlt{
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #333333;
			line-height: 40rpx;
		}
		.goodsinforightsubtitle{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 24rpx;
			color: #848791;
		}
		.goodsinforightprice{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goodsinforightpriceleft{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #D02835;
				line-height: 28rpx;
			}
			.goodsinforightpriceright{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 26rpx;
				color: #848791;
			}
		}
		.goodsinforightguarantee{
			border-radius: 6rpx;
			border: 2px solid #D02835;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 18rpx;
			color: #D02835;
			padding: 5rpx 10rpx;
			width: fit-content;
		}
	}
}
.form{
	margin: 20rpx 30rpx;
	padding: 1rpx 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	.formitem{
		display: flex;
		gap: 15rpx;
		justify-content: space-between;
		align-items: center;
		margin: 39rpx 0;
		.formitemleft{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #111111;
			line-height: 28rpx;
		}
		.formitemchoice{
			display: flex;
			gap: 15rpx;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #848791;
			line-height: 28rpx;
		}
		.formiteminput{
			flex: 1;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #848791;
			line-height: 28rpx;
		}
		.price{
			color: rgba(208, 40, 53, 1);
		}
	}
}
.upimg{
	margin: 20rpx 30rpx;
	padding: 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	.upimgtitle{
		margin-bottom: 30rpx;
	}
	.upimgdata{
		width: 142rpx;
		height: 142rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		border: 2px dashed #949393;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	width: 100%;
	.bottombutton{
		height: 80rpx;
		margin: 20rpx 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #0D7CFF;
		border-radius: 16rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 28rpx;
	}
}
.aftersalesservice{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	padding: 30rpx 0;
	width: 630rpx;
	background: #FFFFFF;
	border-radius: 28rpx;
	.aftersalesservicetitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #111111;
		line-height: 28rpx;
	}
	.aftersalesservicehr{
		height: 2rpx;
		background: #EFEFEF;
		border-radius: 1rpx;
		margin: 30rpx 0;
	}
	.aftersalesserviceinfo{
		background: #F4F6F8;
		border-radius: 16rpx;
		padding: 35rpx 30rpx;
		margin: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #92969E;
		line-height: 28rpx;
		.aftersalesserviceinfoaction{
			font-weight: bold;
			color: #0D7CFF;
		}
	}
	.aftersalesservicebutton{
		height: 80rpx;
		margin: 0 30rpx;
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
