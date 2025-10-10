<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="确认订单" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 地址 -->
		<view class="head">
			<uv-icon width="28rpx" height="34rpx"
			name="/static/mall/Icon_DD_dizhidingwei.png"></uv-icon>
			<view class="headright">
				<view class="headrightleft">
					<view class="headrightlefttitle">
						南湾街道布沙路137号 鹏星公寓八号 708房
					</view>
					<view class="headrightleftinfo">
						李萧白 199****5032
					</view>
				</view>
				<uv-icon width="12rpx" height="22rpx"
				name="/static/mall/icon_jinru_03.png"></uv-icon>
			</view>
		</view>
		<image src="/static/mall/Img_DD_dizhifengexian.png" class="headimg"></image>
		<!-- 商品 -->
		<view class="goods">
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
			<view class="goodsdelivery">
				<view class="goodsdeliveryleft">
					配送
				</view>
				<view class="goodsdeliveryright">
					快递运输
				</view>
			</view>
			<view class="goodsmessage" @click="Remarks = true">
				<view class="goodsmessageleft">
					留言
				</view>
				<view class="goodsmessageright">
					<view>留言您的订单需求</view>
					<uv-icon width="12rpx" height="22rpx"
					name="/static/mall/icon_jinru_03.png"></uv-icon>
				</view>
			</view>
		</view>
		<!-- 价格 -->
		<view class="price">
			<view class="priceprice">
				<view class="pricepriceleft">
					商品金额
				</view>
				<view class="pricepriceroght">
					￥159.00
				</view>
			</view>
			<view class="priceprice">
				<view class="pricepriceleft">
					运费
				</view>
				<view class="pricepriceroght">
					￥0.00
				</view>
			</view>
			<view class="hr">
				
			</view>
			<view class="pricetotal">
				<view></view>
				<view class="pricetotalright">
					<view class="pricetotalrighttotal">
						合计：
					</view>
					<view class="pricetotalrightprice">
						￥159.00
					</view>
				</view>
			</view>
		</view>
		<!-- 发票 -->
		<view class="invoice" @click="invoiceup = true">
			<view class="invoiceleft">
				发票
			</view>
			<view class="invoiceright">
				<view>不开发票</view>
				<uv-icon width="12rpx" height="22rpx"
				name="/static/mall/icon_jinru_03.png"></uv-icon>
			</view>
		</view>
		<!-- 隐私 -->
		<view class="privacy">
			<view class="privacyleft">
				<view>号码保护(隐藏收件人真是号码)</view>
				<uv-icon size="26rpx"  @click="privacyup = true"
				name="info-circle"></uv-icon>
			</view>
			<view class="privacyright">
				<uv-icon width="50rpx" height="50rpx"
				name="/static/mall/Icon_GWC_yixuanzhong_32x.png"></uv-icon>
			</view>
		</view>
		<!-- 立即支付 -->
		<view class="bottom">
			<view @click="openordercompleted">
				立即支付 ￥159.00
			</view>
		</view>
		<!-- 备注弹出框 -->
		<uv-overlay :show="Remarks" @click="Remarks = false">
			<view class="Remarks" v-show="Remarks" @tap.stop>
				<view class="Remarkstitle">
					<view></view>
					<view>订单备注</view>
					<uv-icon name="close" @click="Remarks = false"></uv-icon>
				</view>
				<view class="Remarksinfo">
					<textarea v-model="text" maxlength=50
					placeholder="请对您的订单备注留言~"></textarea>
					<text>0/50</text>
				</view>
				<view class="Remarksbottom">
					<view>保存</view>
				</view>
			</view>
		</uv-overlay>
		<!-- 发票/ -->
		<uv-overlay :show="invoiceup" 
		@click="invoiceup = false"
		zIndex=18888>
			<view class="invoiceup" v-show="invoiceup" @tap.stop>
				<view class="invoiceuptitle">
					<view></view>
					<view>发票</view>
					<uv-icon name="close" @click="invoiceup = false"></uv-icon>
				</view>
				<view class="invoiceuptype">
					<uv-form labelWidth="200rpx">
					<view class="invoiceuptypetitle">
						发票抬头
					</view>
					<view class="invoiceuptypetags">
						<view :class="invoiceuptypetagindividual" @click="invoiceuptype(1)">
							个人/非企业单位
						</view>
						<view :class="invoiceuptypetagenterprise"  @click="invoiceuptype(2)">
							企业单位
						</view>
					</view>
					<view class="" v-show="!enterprise">
						<uv-form-item label="个人名称">
							<uv-input border="none" placeholder="请输入个人名称 (必填)">
							</uv-input>
						</uv-form-item>
					</view>
					<view class="" v-show="enterprise">
						<uv-form-item label="单位名称">
							<uv-input border="none" placeholder="请输入单位名称 (必填)">
							</uv-input>
						</uv-form-item>
						<uv-form-item label="纳税人识别号">
							<uv-input border="none" placeholder="请在此填写纳税人识别号"
							placeholder-style="color: #0D7CFF;">
							</uv-input>
						</uv-form-item>
					</view>
					<view class="hr">
						
					</view>
					<view class="invoiceuptypetitle">
						收票人信息
					</view>
					<uv-form-item label="收票人手机">
						<uv-input border="none" placeholder="请输入收票人手机号 (必填)">
						</uv-input>
					</uv-form-item>
					<uv-form-item label="纳税人识别号">
						<uv-input border="none" placeholder="请输入个人名称">
						</uv-input>
					</uv-form-item>
					<view class="hr">
						
					</view>
					<view class="invoiceuptypetitleinfo">
						<view class="invoiceuptypetitle">
							发票内容
						</view>
						<view class="invoiceuptypetitleinforight">
							发票内容选项已根据税法调整，具体请以展示为准
						</view>
					</view>
					<view class="invoiceuptypetagaction">
						商品明细
					</view>
					<view class="invoiceuptypeinfo">
						发票内容将显示详细商品名称与价格信息，发票金额为实际支付
						金额，不含虚拟资产、优惠等扣减金额。
					</view>
					</uv-form>
				</view>
				<view class="invoiceupbottom">
					<view>确定</view>
				</view>
			</view>
		</uv-overlay>
		<!-- 隐私说明 -->
		<uv-overlay :show="privacyup" 
		@click="privacyup = false"
		zIndex=18888>
			<view class="privacyup" v-show="privacyup" @tap.stop>
				<view class="privacyuptitle">
					<view></view>
					<view>隐私号码保护说明</view>
					<uv-icon name="close" @click="privacyup = false"></uv-icon>
				</view>
				<view class="privacyupinfo">
					<view>1、虚拟号码供给商出现服务异常时，真实号码可能会提供给商家或快递员，以确认能联系到您；</view>
					<view>2、部分特殊业务商品暂不支持隐私号码保护服务，覆盖范围将逐步扩大；</view>
					<view>3、为了更好保障服务体验，开启虚拟号码保护的订单可能会被录音，敬请知悉。</view>
				</view>
				<view class="privacyupbottom">
					<view>我知道了</view>
				</view>
			</view>
		</uv-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Remarks:false,
				invoiceup:false,
				privacyup:false,
				enterprise:false,
				invoiceuptypetagindividual:'invoiceuptypetagaction',
				invoiceuptypetagenterprise:'invoiceuptypetaginfo',
			}
		},
		methods: {
			openordercompleted(){
				uni.navigateTo({
					url:"/pages/index/completed/ordercompleted"
				})
			},
			invoiceuptype(e){
				if(e==1){
					this.enterprise=false
					this.invoiceuptypetagindividual='invoiceuptypetagaction'
					this.invoiceuptypetagenterprise='invoiceuptypetaginfo'
				}else{
					this.enterprise=true
					this.invoiceuptypetagindividual='invoiceuptypetaginfo'
					this.invoiceuptypetagenterprise='invoiceuptypetagaction'
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F2F4F6;
}
.head{
	background: #FFFFFF;
	padding:  30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.headright{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 35rpx;
		.headrightleft{
			display: flex;
			flex-direction: column;
			gap: 24rpx;
			.headrightlefttitle{
				width: 580rpx;
				height: 80rpx;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 36rpx;
				color: #000000;
				line-height: 46rpx;
			}
			.headrightleftinfo{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #111111;
				line-height: 44rpx;
			}
		}
	}
}
.headimg{
	width: 100%;
	height: 8rpx;
	position: absolute;
	top: 390rpx;
}
.goods{
	background: #FFFFFF;
	padding: 30rpx;
	margin-top: 30rpx;
	.goodsinfo{
		display: flex;
		justify-content: space-between;
		align-items: center;
		image{
			width: 182rpx;
			height: 182rpx;
			background: #E0E0E0;
			border-radius: 10rpx;
		}
		.goodsinforight{
			display: flex;
			flex-direction: column;
			gap: 15rpx;
			.goodsinforighttitlt{
				width: 476rpx;
				text-overflow: ellipsis;
				white-space: nowrap;
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
				align-items: flex-end;
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
	.goodsdelivery{
		display: flex;
		justify-content: space-between;
		margin: 30rpx 0;
		.goodsdeliveryleft{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #111111;
			line-height: 44rpx;
		}
		.goodsdeliveryright{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #1A1A1A;
			line-height: 44rpx;
		}
	}
	.goodsmessage{
		display: flex;
		justify-content: space-between;
		.goodsdemessageleft{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #111111;
			line-height: 44rpx;
		}
		.goodsmessageright{
			display: flex;
			gap: 18rpx;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #A7ABB7;
			line-height: 44rpx;
		}
	}
}
.price{
	background: #FFFFFF;
	padding: 30rpx;
	margin-top: 20rpx;
	.priceprice{
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;
		.pricepriceleft{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #111111;
			line-height: 44rpx;
		}
		.pricepriceright{
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #1A1A1A;
			line-height: 44rpx;
		}
	}
	.hr{
		width: 690rpx;
		height: 2rpx;
		background: #EFEFEF;
		margin-bottom: 30rpx;
	}
	.pricetotal{
		display: flex;
		justify-content: space-between;
		gap: 18rpx;
		.pricetotalright{
			display: flex;
			justify-content: space-between;
			.pricetotalrighttotal{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #111111;
				line-height: 44rpx;
			}
			.pricetotalrightprice{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 36rpx;
				color: #D02835;
				line-height: 44rpx;
			}
		}
	}
}
.invoice{
	background: #FFFFFF;
	margin-top: 20rpx;
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	.invoiceleft{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #111111;
		line-height: 44rpx;
	}
	.invoiceright{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 18rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #1A1A1A;
		line-height: 44rpx;
	}
}
.privacy{
	background: #FFFFFF;
	margin-top: 20rpx;
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	.privacyleft{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10rpx;
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 750rpx;
	height: 120rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	padding-bottom: 70rpx;
	view{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690rpx;
		height: 80rpx;
		background: linear-gradient(90deg, #D02835 0%, #D33B0B 100%);
		box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(13,124,255,0.5);
		border-radius: 16rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 28rpx;
	}
}
.Remarks{
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	position: fixed;
	bottom: 0;
	padding-bottom: 70rpx;
	background: #FFFFFF;
	.Remarkstitle{
		height: 98rpx;
		background: linear-gradient(0deg, #F8FBFF 0%, #D5E8FF 100%);
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #000000;
		line-height: 36rpx;
	}
	.Remarksbottom{
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
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
	.Remarksinfo{
		padding: 30rpx;
		position: relative;
		text{
			position: absolute;
			bottom: 50rpx;
			right: 50rpx;
		}
		textarea{
			background-color: #f0f0f0;
			width: auto;
			padding: 30rpx;
			border-radius: 16rpx;
		}
	}
}
.invoiceup{
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	position: fixed;
	bottom: 0;
	padding-bottom: 70rpx;
	background: #FFFFFF;
	.invoiceuptitle{
		height: 98rpx;
		background: linear-gradient(0deg, #F8FBFF 0%, #D5E8FF 100%);
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #000000;
		line-height: 36rpx;
	}
	.invoiceupbottom{
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
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
	.invoiceuptype{
		padding: 30rpx;
		.invoiceuptypetitle{
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 32rpx;
			color: #1A1A1A;
			line-height: 44rpx;
			margin-bottom: 30rpx;
		}
		.invoiceuptypetags{
			display: flex;
			gap: 20rpx;
		}
		.invoiceuptypetaginfo{
			padding: 18rpx;
			background: #F4F6F8;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #333333;
		}
		.invoiceuptypetagaction{
			width: fit-content;
			padding: 18rpx;
			background: rgba(13,124,255,0.05);
			border-radius: 10rpx;
			border: 2px solid #0D7CFF;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 26rpx;
			color: #0D7CFF;
		}
		.hr{
			width: 690rpx;
			height: 2rpx;
			background: #EFEFEF;
			margin-bottom: 30rpx;
		}
		.invoiceuptypetitleinfo{
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			.invoiceuptypetitleinforight{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #848791;
				line-height: 28rpx;
			}
		}
		.invoiceuptypeinfo{
			width: 670rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 24rpx;
			color: #848791;
			line-height: 40rpx;
			margin-top: 30rpx;
		}
	}
}
.privacyup{
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	position: fixed;
	bottom: 0;
	padding-bottom: 70rpx;
	background: #FFFFFF;
	.privacyuptitle{
		height: 98rpx;
		background: linear-gradient(0deg, #F8FBFF 0%, #D5E8FF 100%);
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #000000;
		line-height: 36rpx;
	}
	.privacyupbottom{
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
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
	.privacyupinfo{
		padding: 30rpx 50rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #848791;
		line-height: 48rpx;
	}
}
</style>
