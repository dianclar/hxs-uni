<template>
	<view>
		<!-- 标题 -->
		<uv-navbar :title="status" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 物流状态栏 -->
		<view class="goodsstatus">
			<view class="goodsstatusleft">
				<uv-icon name="/static/mine/Icon_DDXQ_wuliu.png" 
				width="40rpx" height="40rpx" v-if="status=='等待收货'"></uv-icon>
				<uv-icon name="/static/mine/Icon_DDXQ_pingjia.png"
				width="40rpx" height="40rpx" v-if="status=='等待评价'"></uv-icon>
				<uv-icon name="/static/mine/Icon_DDXQ_gouwu.png"
				width="40rpx" height="40rpx" v-if="status=='已评价'"></uv-icon>
				<view v-if="status=='等待收货'">物流配送中，可点击查询详情</view>
				<view v-if="status=='等待评价'">物品已签收，期待此处有您的优质评论</view>
				<view v-if="status=='已评价'">已评价完成，点击此处可前往再次购买</view>
			</view>
			<uv-icon name="arrow-right" size="22rpx"></uv-icon>
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
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					支付方式
				</view>
				<view class="goodsinfodataright">
					在线支付
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					支付时间
				</view>
				<view class="goodsinfodataright">
					2025-06-01 12:30:01
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					下单时间
				</view>
				<view class="goodsinfodataright">
					2025-06-01 12:29:59
				</view>
			</view>
			<view class="goodsinfohr">
				
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					配送方式
				</view>
				<view class="goodsinfodataright">
					快递运输
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					收货信息
				</view>
				<view class="goodsinfodataright">
					李萧白 199****5032
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					收货地址
				</view>
				<view class="goodsinfodataright">
					南湾街道布沙路137号 鹏星公寓八号 708房
				</view>
			</view>
			<view class="goodsinfodata">
				<view class="goodsinfodatatitle">
					收货方式
				</view>
				<view class="goodsinfodataright">
					送货上门
				</view>
			</view>
		</view>
		<!-- 底部操作 -->
		<view class="bottom">
			<view></view>
			<view class="bottomright">
				<uv-button v-if="status=='等待收货'" text="查看物流"></uv-button>
				<uv-button v-if="status!='等待收货'" text="删除订单"></uv-button>
				<uv-button v-if="status!='等待收货'" text="申请售后" @click="aftersalesservice=true"></uv-button>
				<uv-button v-if="status=='等待收货'" text="确定收货" color="linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"></uv-button>
				<uv-button v-if="status=='等待评价'" text="前往评价" color="linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"></uv-button>
				<uv-button v-if="status=='已评价'" text="查看评价" color="linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"></uv-button>
				<uv-button text="再次购买" color="linear-gradient(90deg, #D02835 0%, #D33B0B 100%);"></uv-button>
			</view>
		</view>
		<!-- 售后选择 -->
		<uv-overlay :show="aftersalesservice"
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
		</uv-overlay>
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
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #f0f0f0;
}
.goodsstatus{
	margin: 20rpx 30rpx;
	padding: 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.goodsstatusleft{
		display: flex;
		align-items: center;
		gap: 15rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
	}
	
}
.goodsinfo{
	padding: 30rpx;
	margin: 0 30rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
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
