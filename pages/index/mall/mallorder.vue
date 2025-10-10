<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="商城订单" autoBack=true></uv-navbar>
		<!-- 无订单 -->
		<view class="nomall" v-if="nomall">
			<view class="nomallimg">
				<image src="/static/mine/nomall.png" mode=""></image>
				<view>暂无当前订单信息</view>
			</view>
			<view class="nomallbutton">
				<view>前往商城购物</view>
				<uv-icon size="24rpx" color="rgba(13, 124, 255, 1)"
				name="arrow-right"></uv-icon>
			</view>
		</view>
		<!-- 有订单 -->
		<view class="mallorder" v-else>
			<!-- 头部 -->
			<uv-status-bar></uv-status-bar>
			<view>头部占位</view>
			<view>头部占位</view>
			<!-- 订单类型 -->
			<view class="OrderType">
				<view class="OrderTypeaction">
					全部
				</view>
				<view class="">
					待收货
				</view>
				<view class="">
					待评价
				</view>
				<view class="">
					已评价
				</view>
				<view class="OrderTypehr">
					
				</view>
				<view class="OrderTyperefund">
					退换/售后
				</view>
			</view>
			<!-- 订单项 -->
			<view class="orderitems" v-for="i in 3">
				<view class="orderitemstitle">
					<view class="orderitemstitleleft">
						<image src="/static/mine/Icon_TY_biaoshi.png" mode=""></image>
						<view>商城订单</view>
					</view>
					<view class="orderitemstitleright">
						<view class="orderitemstitlerighticon"></view>
						<view>待收货</view>
					</view>
				</view>
				<view class="orderitemsinfo">
					<image src="/static/logo.png" mode=""></image>
					<view class="orderitemsinforight">
						<view class="orderitemsinforighttitle">
							易中天带你读懂中国系列全套5册
						</view>
						<view class="orderitemsinforightsubtitle">
							易中天带你读懂中国(5册)
						</view>
						<view class="orderitemsinforightprice">
							<view class="orderitemsinforightpriceleft">
								￥168.00
							</view>
							<view class="orderitemsinforightpriceright">
								×1
							</view>
						</view>
						<view class="orderitemsinforighttag">
							支持7天无理由退货
						</view>
					</view>
				</view>
				<view class="orderitemshr">
					
				</view>
				<view class="orderitemsoption">
					<view></view>
					<view class="orderitemsoptionright">
						<view>
							查看物流
						</view>
						<view class="orderitemsoptionrightprimary" @click="openOrderDetails">
							前往评价
						</view>
						<view class="orderitemsoptionrightprimary">
							确认收货
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nomall:false
			};
		},
		methods:{
			openOrderDetails(){
				uni.navigateTo({
					url:'/pages/index/mall/OrderDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
.nomall{
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 180rpx;
	.nomallimg{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 10rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #888888;
		line-height: 42rpx;
		image{
			width: 320rpx;
			height: 320rpx;
		}
	}
	.nomallbutton{
		width: 450rpx;
		height: 90rpx;
		background: rgba(13, 124, 255, .1);
		border-radius: 45rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 24rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #0D7CFF;
		line-height: 24rpx;
	}
}
.mallorder{
	background-color: #f0f0f0;
	padding: 0 30rpx;
	.OrderType{
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15rpx;
		view{
			width: 114rpx;
			height: 66rpx;
			background: #FFFFFF;
			border-radius: 33rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #888888;
			line-height: 28rpx;
		}
		.OrderTypeaction{
			background: #0D7CFF;
			color: #FFFFFF;
			font-weight: bold;
		}
		.OrderTypehr{
			width: 2rpx;
			height: 32rpx;
			background: #000000;
			opacity: 0.2;
		}
		.OrderTyperefund{
			width: 160rpx;
		}
	}
	.orderitems{
		padding: 24rpx 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		.orderitemstitle{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			.orderitemstitleleft{
				display: flex;
				align-items: center;
				gap: 16rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #111111;
				line-height: 28rpx;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
			.orderitemstitleright{
				display: flex;
				align-items: center;
				gap: 16rpx;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #0D7CFF;
				line-height: 30rpx;
				.orderitemstitlerighticon{
					width: 10rpx;
					height: 10rpx;
					background: #0D7CFF;
					border-radius: 50%;
				}
			}
		}
		.orderitemsinfo{
			display: flex;
			align-items: center;
			gap: 24rpx;
			image{
				width: 180rpx;
				height: 180rpx;
			}
			.orderitemsinforight{
				width: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 10rpx;
				.orderitemsinforighttitle{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 28rpx;
					color: #333333;
					line-height: 40rpx;
				}
				.orderitemsinforightsubtitle{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;
					color: #848791;
				}
				.orderitemsinforightprice{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.orderitemsinforightpriceleft{
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 32rpx;
						color: #D02835;
						line-height: 28rpx;
					}
					.orderitemsinforightpriceright{
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 26rpx;
						color: #848791;
					}
				}
				.orderitemsinforighttag{
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
		.orderitemshr{
			height: 2rpx;
			border: 1px solid #EEEEEE;
			margin: 24rpx 0;
		}
		.orderitemsoption{
			display: flex;
			justify-content: space-between;
			.orderitemsoptionright{
				display: flex;
				gap: 18rpx;
				view{
					width: 132rpx;
					height: 52rpx;
					border-radius: 10rpx;
					border: 2px solid #C9C9C9;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 26rpx;
					color: #333333;
					line-height: 40rpx;
				}
				.orderitemsoptionrightprimary{
					border: 2px solid #0D7CFF;
					color: #0D7CFF;
				}
			}
		}
	}
}
</style>
