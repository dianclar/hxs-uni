<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="退货详情" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 物流状态栏 -->
		<view class="goodsstatus">
			<view class="goodsstatustop">
				<uv-icon name="/static/mine/time.png" 
				width="40rpx" height="40rpx"></uv-icon>
				<view>您已发起<text style="color: #0d7cff;">退款退货</text>申请，请耐心等待商家处理</view>
			</view>
			<view class="goodsstatushr">
				
			</view>
			<view class="goodsstatusitem">
				<view class="icon">
					
				</view>
				<view>商家同意或者超时处理，系统将退款给你。</view>
			</view>
			<view class="goodsstatusitem">
				<view class="icon">
					
				</view>
				<view>如果商家拒接，您可以修改退款申请后再次发起，商家会重新处理。</view>
			</view>
		</view>
		<!-- 商品信息 -->
		<view class="goodsinfo">
			<view class="goodsinfogoods">
				<image src="/static/logo.png" mode=""></image>
				<view class="goodsinfogoodsright">
					<view class="goodsinfogoodsrighttitle">
						易中天带你读懂中国系列全套5册
					</view>
					<view class="goodsinfogoodsrightsubtitle">
						易中天带你读懂中国(5册)
					</view>
					<view class="goodsinfogoodsrightprice">
						<view class="goodsinfogoodsrightpriceleft">
							￥168.00
						</view>
						<view class="goodsinfogoodsrightpriceright">
							×1
						</view>
					</view>
					<view class="goodsinfogoodsrighttag">
						支持7天无理由退货
					</view>
				</view>
			</view>
			<view class="goodsinfohr">
				
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					实付金额
				</view>
				<view class="goodsinfodataright">
					合计￥168.00
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					订单编号
				</view>
				<view class="goodsinfodataright">
					<view>310791988502</view>
					<view style="width: 2rpx;
					height: 16rpx;
					background: #B2B6C4;"></view>
					<view>复制</view>
				</view>
			</view>
		</view>
		<!-- 退款信息 -->
		<view class="goodsinfo">
			<view class="goodsinfotitle">退款信息</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					退款金额
				</view>
				<view class="goodsinfodataright price">
					￥168.00
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					退款原因
				</view>
				<view class="goodsinfodataright">
					拍错/多拍/效果不好/不喜欢
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					退货方式
				</view>
				<view class="goodsinfodataright">
					上门取件
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					申请时间
				</view>
				<view class="goodsinfodataright">
					2025-06-02 09:30:01
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					退货编号
				</view>
				<view class="goodsinfodataright">
					<view>688791922544</view>
					<view style="width: 2rpx;
					height: 16rpx;
					background: #B2B6C4;"></view>
					<view>复制</view>
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					退款原因
				</view>
				<view class="goodsinfodataright reason">
					商品严重和照片不一致，实际效果不行 需要退货退款！
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					图片凭证
				</view>
				<view class="goodsinfodataright">
					<image src="/static/logo.png" v-for="i in 3"></image>
				</view>
			</view>
		</view>
		<!-- 底部操作 -->
		<view class="bottom">
			<view></view>
			<view class="bottomright">
				<uv-button text="联系客服" @click="opencustomerservice"></uv-button>
				<uv-button text="修改申请"></uv-button>
				<uv-button text="撤销申请" color="linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"></uv-button>
			</view>
		</view>
		<!-- 售后选择 -->
		<!-- <uv-overlay :show="aftersalesservice"
		@click="aftersalesservice = false"
		zIndex=18888>
			<view class="aftersalesservice" v-show="aftersalesservice" @tap.stop>
				<view class="aftersalesservicetitle">
					<view></view>
					<view>申请售后类型</view>
					<uv-icon name="close" @click="aftersalesservice = false"></uv-icon>
				</view>
				<view class="aftersalesservicehr">
					
				</view>
				<view class="aftersalesserviceinfo" @click="openRefundreturn">
					<view class="aftersalesserviceinfoleft">
						<image src="/static/mine/Icon_SP_tuihuo.png" mode=""></image>
						<view class="aftersalesserviceinfoleftright">
							<view class="aftersalesserviceinfoleftrighttop">
								我要退货退款
							</view>
							<view class="aftersalesserviceinfoleftrightbottom">
								已收到货，需要退还收到的货物
							</view>
						</view>
					</view>
					<uv-icon name="arrow-right" size="22rpx" color="rgba(170, 170, 170, 1)"></uv-icon>
				</view>
				<view class="aftersalesserviceinfo">
					<view class="aftersalesserviceinfoleft">
						<image src="/static/mine/Icon_SP_huanhuo.png" mode=""></image>
						<view class="aftersalesserviceinfoleftright">
							<view class="aftersalesserviceinfoleftrighttop">
								我要换货
							</view>
							<view class="aftersalesserviceinfoleftrightbottom">
								商品存在质量问题，联系卖家协商换货
							</view>
						</view>
					</view>
					<uv-icon name="arrow-right" size="22rpx" color="rgba(170, 170, 170, 1)"></uv-icon>
				</view>
			</view>
		</uv-overlay> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:'已评价',
				aftersalesservice:false
			};
		},
		methods:{
			openRefundreturn(){
				uni.navigateTo({
					url:'/pages/index/mall/Refundreturn'
				})
			},
			opencustomerservice(){
				uni.navigateTo({
					url:'/pages/index/customerservice/customerservice'
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #f0f0f0;
	padding-bottom: 200rpx;
}
.goodsstatus{
	margin: 20rpx 30rpx;
	padding: 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	.goodsstatustop{
		display: flex;
		align-items: center;
		gap: 15rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
	}
	.goodsstatushr{
		height: 2rpx;
		border: 1px solid #EEEEEE;
		margin: 30rpx 0;
	}
	.goodsstatusitem{
		display: flex;
		gap: 18rpx;
		margin-top: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #848791;
		line-height: 28rpx;
		.icon{
			width: 14rpx;
			height: 14rpx;
			border-radius: 50%;
			border: 2px solid #848791;
			flex-shrink: 0;
		}
	}
}
.goodsinfo{
	padding: 30rpx;
	margin: 20rpx 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	.goodsinfotitle{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 28rpx;
	}
	.goodsinfogoods{
		display: flex;
		align-items: center;
		gap: 24rpx;
		image{
			width: 180rpx;
			height: 180rpx;
		}
		.goodsinfogoodsright{
			width: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 10rpx;
			.goodsinfogoodsrighttitle{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #333333;
				line-height: 40rpx;
			}
			.goodsinfogoodsrightsubtitle{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #848791;
			}
			.goodsinfogoodsrightprice{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.goodsinfogoodsrightpriceleft{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 32rpx;
					color: #D02835;
					line-height: 28rpx;
				}
				.goodsinfogoodsrightpriceright{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 26rpx;
					color: #848791;
				}
			}
			.goodsinfogoodsrighttag{
				border-radius: 6rpx;
				border: 2px solid #D02835;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 18rpx;
				color: #D02835;
				padding: 2rpx 5rpx;
				width: fit-content;
			}
		}
	}
	.goodsinfohr{
		margin: 30rpx 0;
		height: 2rpx;
		border: 1px solid #EEEEEE;
	}
	.goodsinfodata{
		display: flex;
		justify-content: space-between;
		gap: 50rpx;
		margin-top: 40rpx;
		.goodsinfodatatitle{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #848791;
			flex-shrink: 0;
		}
		.goodsinfodataright{
			flex: 1;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #333333;
			line-height: 40rpx;
			display: flex;
			gap: 12rpx;
			justify-content: flex-end;
			align-items: center;
			text-align: right;
			image{
				width: 142rpx;
				height: 142rpx;
				background: #E4F0FF;
				border-radius: 10rpx;
				margin-left: 8rpx;
			}
		}
		.reason{
			text-align: left;
		}
		.price{
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #D02835;
		}
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 20rpx 30rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	width: -webkit-fill-available;
	padding-bottom: 90rpx;
	.bottomright{
		display: flex;
		gap: 18rpx;
	}
}
.aftersalesservice{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	padding: 39rpx 0;
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
		margin: 39rpx 0;
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
		.aftersalesserviceinfoleft{
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 30rpx;
			image{
				width: 44rpx;
				height: 44rpx;
			}
			.aftersalesserviceinfoleftright{
				.aftersalesserviceinfoleftrighttop{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 28rpx;
					color: #111111;
					line-height: 34rpx;
				}
				.aftersalesserviceinfoleftrightbottom{
					margin-top: 15rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;
					color: #92969E;
					line-height: 34rpx;
				}
			}
		}
	}
}
</style>
