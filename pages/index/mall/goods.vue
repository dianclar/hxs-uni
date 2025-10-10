<template>
	<view>
		<uv-status-bar></uv-status-bar>
		<!-- 底部购买 -->
		<view class="bottom">
			<view class="bottomicon">
				<uv-icon width="38rpx"
				name="/static/mall/Icon_SC_kefu.png"></uv-icon>
				<text>客服</text>
			</view>
			<view class="bottomicon" @click="openshoppingcart">
				<view class="bottomiconbadge"><uv-badge bgColor="#fff" color="#ED1C06" :value="8"></uv-badge></view>
				<uv-icon width="38rpx"
				name="/static/mall/Icon_SC_xiaogouwuche.png"></uv-icon>
				<text>购物车</text>
			</view>
			<view class="bottombutton">
				<view class="shopcat" @click="clickshopcat">
					<uv-icon width="44rpx"
					name="/static/mall/Icon_SC_xinzenggouwuche.png"></uv-icon>
				</view>
				<view class="shop" @click="openspecification">立即购买</view>
			</view>
		</view>
		<!-- 商品图片 -->
		<swiper>
			<swiper-item>
				<image src="/static/logo.png"></image>
			</swiper-item>
		</swiper>
		<view class="leftgo" @click="navigateBack">
			<uv-icon name="arrow-left" size="36rpx" color="#000"></uv-icon>
		</view>
		<text class="paging">1/4</text>
		<!-- 商品主要信息 -->
		<view class="title">
			<view class="price">
				<view class="left">
					<text class="pricepro">￥168</text>
					<view class="tag">到手价</view>
					<text class="info">￥256</text>
				</view>
				<text class="info">已售2000+</text>
			</view>
			<view class="tags">
				<view class="tag" v-for="i in 3">限时优惠88元</view>
			</view>
			<text class="titlepro">易中天带你读懂中国系列全套5册 读城记+品人录+大话方言+中国人的智慧+带你读懂中国（5册）</text>
			<text class="info">云南人民出版社有限责任公司</text>
		</view>
		<!-- 数量地址权益 -->
		<view class="goodsarea">
			<view>
				<view class="left">
					<image src="/static/mall/Icon_SC_guigeyixuan.png" mode=""></image>
					<text>已选：易中天带你读懂中国(5册)，1个</text>
				</view>
				<image src="/static/mall/icon_jinru_03.png" mode=""></image>
			</view>
			<view class="hr"></view>
			<view @click="openselectaddress">
				<view class="left">
					<image src="/static/mall/Icon_SC_wuliudizhi.png" mode=""></image>
					<text>南湾街道布沙路137号 鹏星公寓八号 708房</text>
				</view>
				<image src="/static/mall/icon_jinru_03.png" mode=""></image>
			</view>
			<view class="hr"></view>
			<view @click="openequity">
				<view class="left">
					<image src="/static/mall/Icon_SC_baozhang.png" mode=""></image>
					<text>7天无理由退货 · 破损包退换 · 30天价保险...</text>
				</view>
				<image src="/static/mall/icon_jinru_03.png" mode=""></image>
			</view>
		</view>
		<!-- 评价 -->
		<view class="evaluation">
			<view class="evaluationtitle">
				<view class="left">
					<view class="icon"></view>
					<text>评价</text>
					<text class="evaluationtitlepro">586条</text>
				</view>
				<view class="right" @click="opengoodsevaluation">
					<text>好评度98%</text>
					<image src="/static/mall/icon_jinru_03.png" mode=""></image>
				</view>
			</view>
			<swiper previous-margin="30rpx" next-margin="70rpx">
				<swiper-item v-for="i in 3">
					<view class="swiperi">
						<view class="user">
							<image src="/static/logo.png" mode=""></image>
							<view class="userright">
								<text class="username">hxs***62</text>
								<uv-rate :count="5" readonly :value="5" gutter="0" size=15></uv-rate>
							</view>
						</view>
						<text class="usergoodsarea">一直都很喜欢易老师的作品。</text>
					</view>
				</swiper-item>
			</swiper>
			<view class="indicator">
				<view class="active"></view>
				<view class="none"></view>
				<view class="none"></view>
			</view>
		</view>
		<!-- 详情 -->
		<view class="details">
			<view class="detailstitle">
				<view></view>
				<text>详情</text>
			</view>
			<view class="detailsicontitle">
				<uv-icon width="28rpx"
				name="/static/mall/Icon_SC_guigecanshu.png"></uv-icon>
				<text>规格参数</text>
			</view>
			<view style="margin-top: -20rpx;">
				<view class="detailstable">
					<view class="left"><text>商品编号</text></view>
					<view><text>10112152956851</text></view>
				</view>
				<view class="detailstable">
					<view class="left"><text>出版社</text></view>
					<view><text>云南人民出版社有限责任公司</text></view>
				</view>
			</view>
			<view class="detailsicontitle">
				<uv-icon width="28rpx"
				name="/static/mall/Icon_SC_shangpinjieshao.png"></uv-icon>
				<text>商品介绍</text>
			</view>
		</view>
		<!-- 商品图片2 -->
		<image src="/static/logo.png" v-for="i in 3" style="width: 100%;"></image>
		<!-- 选规格弹出框 -->
		<uv-popup 
		mode="bottom" 
		ref="specification"
		closeable=true
		:customStyle="specification">
		<view class="specification">
			<view class="specificationimg">
				<image src="/static/logo.png" mode=""></image>
				<text>￥168</text>
			</view>
			<text>商品系列</text>
			<view class="specificationinfo">
				<view class="action">
					<text>易中天带你读懂中国(5册)</text>
				</view>
				<view>
					<text>易中天带你读懂中国(10册)</text>
				</view>
			</view>
			<view class="hr"></view>
			<view class="specificationnum">
				<text>购买数量</text>
				<uv-number-box v-model="value" :disabledInput="true">
					<template v-slot:minus>
						<view style="padding: 16rpx;">
							<uv-icon name="minus" 
							bold=ture 
							color="#000"
							size="18rpx"></uv-icon>
						</view>
					</template>
					<template v-slot:input>
						<text class="input">
							{{value}}
						</text>
					</template>
					<template v-slot:plus>
						<view style="padding: 16rpx;">
							<uv-icon name="plus" 
							bold=ture 
							color="#000"
							size="18rpx"></uv-icon>
						</view>
					</template>
				</uv-number-box>
			</view>
			<view class="hr"></view>
			<view class="specificationbottom">
				<view class="shopcat" @click="clickshopcat">
					<uv-icon width="44rpx"
					name="/static/mall/Icon_SC_xinzenggouwuche.png"></uv-icon>
				</view>
				<view class="shop" @click="openconfirmorder">立即购买</view>
			</view>
		</view>
		</uv-popup>
		<!-- 地址选择 -->
		<uv-popup
		mode="bottom"
		ref="selectaddress"
		closeable=true
		:customStyle="selectaddress">
			<view class="selectaddress">
				<view class="selectaddresstitlt">
					<text>地址选择</text>
				</view>
				<view class="selectaddressbottom" @click="openaddarea">
					<view>新增收货地址</view>
				</view>
				<view class="selectaddressinfo" v-for="i in 3">
					<view class="selectaddressinfouser">
						<text>李萧白 19900805032</text>
						<uv-tags text="公司" plain size="mini"> </uv-tags>
					</view>
					<view class="selectaddressinfoaddress">
						广东省 深圳市 龙岗区 南湾街道布沙路137号 鹏星 公寓八号 708房
					</view>
					<view class="selectaddressinfoselect">
						<view class="selectaddressinfoselectleft">
							<uv-icon name="/static/mall/Icon_gouxuan.png"></uv-icon>
							<text>设为默认</text>
						</view>
						<view class="selectaddressinfoselectright">
							<view>删除</view>
							<view>复制</view>
							<view>修改</view>
						</view>
					</view>
				</view>
			</view>
		</uv-popup>
		<!-- 权益弹出框 -->
		<uv-popup
		mode="bottom"
		ref="equity"
		closeable=true
		:customStyle="equity">
			<view class="equity">
				<view class="equitytitle">
					全程保障
				</view>
				<view class="equitybottom">
					<view>
						我知道了
					</view>
				</view>
				<view class="equityinfo">
					<view class="equityinfotitle">
						<uv-icon width=""
						name="/static/mall/Icon_QCBZ_baozhang.png"></uv-icon>
						<text>7天无理由退货</text>
					</view>
					<text>支持7天无理由退货</text>
				</view>
				<view class="hr"></view>
				<view class="equityinfo">
					<view class="equityinfotitle">
						<uv-icon width=""
						name="/static/mall/Icon_QCBZ_baozhang.png"></uv-icon>
						<text>破损包退换</text>
					</view>
					<text>商品出库后30天内发生正向运输破损，未收到货或意外损坏问题，保险公司按照保险责任的合作约定提供退货退款、换新/损失补偿。</text>
				</view>
				<view class="hr"></view>
				<view class="equityinfo">
					<view class="equityinfotitle">
						<uv-icon width=""
						name="/static/mall/Icon_QCBZ_baozhang.png"></uv-icon>
						<text>30天价保险</text>
					</view>
					<text>在下单后30天内，商品出现降价可享受价保险服务，部分特殊场景不支持价保。</text>
				</view>
				<view class="hr"></view>
				<view class="equityinfo">
					<view class="equityinfotitle">
						<uv-icon width=""
						name="/static/mall/Icon_QCBZ_baozhang.png"></uv-icon>
						<text>免费上门退换</text>
					</view>
					<text>售后时效内申请退换货，选择上门取件优先安排顺丰物流服务，无需支付退换货运费；选择自寄，售后完成后补首重运费。</text>
				</view>
			</view>
		</uv-popup>
		<!-- 加入购物车成功 -->
		<view class="addshopcat" v-show="addshopcat">
			<uv-icon name="/static/mall/Icon_GWC_sahuabiaoshi.png"></uv-icon>
			<text>撒花~~加入购物车成功！</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:1,
				addshopcat: false,
				selectaddressinfoselectleftradio:0,
				specification:{
					height:'1000rpx',
					width:'auto',
					padding:'45rpx 30rpx',
					borderRadius: '16rpx 16rpx 0rpx 0rpx'
				},
				selectaddress:{
					height:'1000rpx',
					width:'auto',
					borderRadius: '16rpx 16rpx 0rpx 0rpx'
				},
				equity:{
					height:'1000rpx',
					width:'auto',
					borderRadius: '16rpx 16rpx 0rpx 0rpx'
				}
			}
		},
		methods: {
			navigateBack(){
				uni.navigateBack();
			},
			opengoodsevaluation(){
				uni.navigateTo({
					url:"/pages/index/mall/goodsevaluation"
				})
			},
			openaddarea(){
				uni.navigateTo({
					url:"/pages/index/area/addarea"
				})
			},
			openshoppingcart(){
				uni.navigateTo({
					url:"/pages/index/mall/shoppingcart"
				})
			},
			openconfirmorder(){
				uni.navigateTo({
					url:"/pages/index/mall/confirmorder"
				})
			},
			openspecification() {
				this.$refs.specification.open();
			},
			openselectaddress() {
				this.$refs.selectaddress.open();
			},
			openequity() {
				this.$refs.equity.open();
			},
			clickshopcat(){
				this.addshopcat=!this.addshopcat
				setTimeout(()=>this.addshopcat=!this.addshopcat,2000)
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F2F4F6;
	padding-bottom: 150rpx;
}
swiper{
	width: 750rpx;
	height: 750rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
.leftgo{
	width: 80rpx;
	height: 64rpx;
	background-color: rgba(255, 255, 255, 0.8);
	position: fixed;
	top: 100rpx;
	left: 30rpx;
	border-radius: 39rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.paging{
	position: absolute;
	right: 50rpx;
	top: 650rpx;
	font-family: PingFang SC;
	font-weight: 500;
	font-size: 24rpx;
	color: #FFFFFF;
	line-height: 28rpx;
}
.title{
	width: 750rpx;
	height: 326rpx;
	background: #FFFFFF;
	border-radius: 10rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	.price{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;		
		margin: 0 30rpx;
		.info{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #848791;
			line-height: 28rpx;
		}
		.left{
			display: flex;
			align-items: flex-end;
			.pricepro{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 45rpx;
				color: #D02835;
				line-height: 28rpx;
				position: relative;
				top: -5rpx;
			}
			.tag{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 82rpx;
				height: 36rpx;
				background: #D02835;
				border-radius: 4rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 22rpx;
				color: #FFFFFF;
				margin-left: 15rpx;
			}
			.info{
				font-family: PingFang SC;
				font-size: 24rpx;
				color: #848791;
				line-height: 28rpx;
				margin-left: 10rpx;
			}
		}
	}
	.tags{
		display: flex;	
		margin: 0 30rpx;
		gap: 12rpx;
		.tag{
			background: rgba(208, 40, 53,.1);
			border-radius: 6rpx;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 24rpx;
			color: #D02835;
			padding: 5rpx 15rpx;
		}
	}
	.titlepro{
		width: 690rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #111111;
		line-height: 50rpx;
		margin: 0 30rpx;
	}
	.info{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #848791;
		line-height: 28rpx;
		margin: 0 30rpx;
	}
}
.goodsarea{
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 20rpx;
	background-color: #fff;
	height: 280rpx;
	view{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 30rpx;
		.left{
			display: flex;
			gap: 24rpx;
			margin: 0;
			image{
				height: 28rpx;
				width: 28rpx;
			}
			text{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #333333;
			}
		}
		image{
			height: 22rpx;
			width: 12rpx;
		}
	}
	.hr{
		width: 690rpx;
		height: 2rpx;
		background: #EFEFEF;
		margin-left: 30rpx;
	}
}
.evaluation{
	width: 750rpx;
	height: 340rpx;
	background: #FFFFFF;
	border-radius: 10rpx;
	margin-top: 20rpx;
	.evaluationtitle{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 30rpx;
		.left{
			display: flex;
			align-items: flex-end;
			gap: 15rpx;
			.icon{
				width: 6rpx;
				height: 30rpx;
				background: linear-gradient(0deg, #BECFEA 0%, #0D7CFF 100%);
			}
			text{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #333333;
			}
			.evaluationtitlepro{
				font-size: 22rpx;
				font-weight: bold;
			}
		}
		.right{
			display: flex;
			gap: 15rpx;
			align-items: center;
			image{
				width: 12rpx;
				height: 22rpx;
			}
			text{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #848791;
				line-height: 28rpx;
			}
		}
	}
	swiper{
		height: 200rpx;
		.swiperi{
			background: #F9F9F9;
			border-radius: 16rpx;
			margin-right: 20rpx; 
			padding: 20rpx;
			height: 100%;
			.user{
				display: flex;
				align-items: flex-start;
				margin-bottom: 20rpx;
				gap: 20rpx;
				image{
					height: 68rpx;
					width: 68rpx;
					border-radius: 50%;
				}
				.userright{
					.username{
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 26rpx;
						color: #111111;
						line-height: 28rpx;
					}
				}
			}
			.usergoodsarea{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #111111;
				line-height: 40rpx;
			}
		}
	}
	.indicator{
		display: flex;
		justify-content: center;
		gap: 5rpx;
		margin-top: 28rpx;
		.active{
			width: 30rpx;
			height: 6rpx;
			background: #0D7CFF;
		}
		.none{
			width: 30rpx;
			height: 6rpx;
			background: #F2F2F2;
		}
	}
}
.bottom{
	width: 750rpx;
	height: 108rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	bottom: 0;
	padding-bottom: 39rpx;
	z-index: 1;
	.bottomicon{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #333333;
		line-height: 28rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		.bottomiconbadge{
			border: 1px solid #EC1806;
			border-radius: 39rpx;
			position: absolute;
			right: 0;
			top: -10rpx;
			background: #fff;
			z-index: 10;
		}
	}
	.bottombutton{
		display: flex;
		.shopcat{
			width: 150rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #F7BC13 0%, #FFCB19 100%);
			border-radius: 10rpx 0rpx 0rpx 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.shop{
			width: 380rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #D02835 0%, #D33B0B 100%);
			border-radius: 0rpx 10rpx 10rpx 0rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #FFFFFF;
			line-height: 28rpx;
		}
	}
}
.details{
	height: 380rpx;
	background: #FFFFFF;
	border-radius: 10rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 30rpx;
	padding-top: 50rpx;
	.detailstitle{
		display: flex;
		gap: 15rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #333333;
		view{
			width: 6rpx;
			height: 30rpx;
			background: linear-gradient(0deg, #BECFEA 0%, #0D7CFF 100%);
		}
	}
	.detailsicontitle{
		display: flex;
		gap: 10rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #333333;
	}
	.detailstable{
		width: 100%;
		display: flex;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 26rpx;
		color: #848791;
		view{
			width: 100%;
			height: 64rpx;
			background: #FFFFFF;
			border: 2px solid #F6F6F6;
			display: flex;
			align-items: center;
			padding-left: 39rpx;
		}
		.left{
			width: 200rpx;
		}
	}
}
.specification{
	.specificationimg{
		display: flex;
		align-items: flex-end;
		gap: 25rpx;
		margin-bottom: 40rpx;
		image{
			width: 182rpx;
			height: 182rpx;
			background: #E0E0E0;
			border-radius: 10rpx;
		}
		text{
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 44rpx;
			color: #D02835;
			line-height: 28rpx;
		}
	}
	text{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 40rpx;
	}
	.specificationinfo{
		margin: 30rpx 0;
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		view{
			background: #FFFFFF;
			border-radius: 16rpx 16rpx 0rpx 0rpx;
			font-family: PingFang SC;
			font-weight: 400;
			font-size: 28rpx;
			color: #848791;
			padding: 15rpx 30rpx;
			width: fit-content;
		}
		.action{
			background: rgba(208,40,53,0.1);
			border-radius: 10rpx;
			border: 2px solid #D02835;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #D02835;
			text{
				color: #D02835;
			}
		}
	}
	.hr{
		width: 690rpx;
		height: 2rpx;
		background: #EFEFEF;
	}
	.specificationnum{
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.input{
			padding: 10rpx 30rpx;
			background: #F1F1F1;
		}
	}
	.specificationbottom{
		display: flex;
		position: fixed;
		bottom: 100rpx;
		.shopcat{
			width: 150rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #F7BC13 0%, #FFCB19 100%);
			border-radius: 10rpx 0rpx 0rpx 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.shop{
			width: 540rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #D02835 0%, #D33B0B 100%);
			border-radius: 0rpx 10rpx 10rpx 0rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #FFFFFF;
			line-height: 28rpx;
		}
	}
}
.addshopcat{
	width: fit-content;
	background: #000000;
	border-radius: 50rpx;
	opacity: 0.7;
	padding: 35rpx 60rpx;
	gap: 30rpx;
	display: flex;
	align-items: center;
	font-family: PingFang SC;
	font-weight: bold;
	font-size: 32rpx;
	color: #FFFFFF;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
}
.selectaddress{
	width: auto;
	background: #F6F6F6;
	.selectaddresstitlt{
		height: 98rpx;
		background: #FFFFFF;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #000000;
		line-height: 36rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selectaddressbottom{
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		position: absolute;
		bottom: 0;
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
	.selectaddressinfo{
		height: 260rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		margin: 20rpx 30rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.selectaddressinfouser{
			display: flex;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 32rpx;
			color: #1A1A1A;
			line-height: 44rpx;
			align-items: center;
			gap: 25rpx;
		}
		.selectaddressinfoaddress{
			width: 618rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #000000;
			line-height: 42rpx;
		}
		.selectaddressinfoselect{
			display: flex;
			justify-content: space-between;
			.selectaddressinfoselectleft{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #333333;
				line-height: 42rpx;
				display: flex;
				align-items: center;
				gap: 10rpx;
				view{
					width: 28rpx;
					height: 28rpx;
					border-radius: 6rpx;
					border: 2px solid #6A6B6E;
				}
			}
			.selectaddressinfoselectright{
				display: flex;
				gap: 20rpx;
				view{
					background: #F6F6F6;
					border-radius: 8rpx;
					padding: 10rpx 15rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 26rpx;
					color: #111111;
					line-height: 42rpx;
				}
			}
		}
	}
}
.equity{
	.equitytitle{
		height: 98rpx;
		background: linear-gradient(0deg, #F8FBFF 0%, #D5E8FF 100%);
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #000000;
		line-height: 36rpx;
	}
	.equitybottom{
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		position: absolute;
		bottom: 0;
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
	.equityinfo{
		padding: 30rpx;
		.equityinfotitle{
			display: flex;
			gap: 20rpx;
			margin-bottom: 20rpx;
			text{
				margin-left: 0;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #1A1A1A;
				line-height: 44rpx;
			}
		}
		text{
			margin-left: 50rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #848791;
			line-height: 28rpx;
			display: block;
			letter-spacing: 3rpx;
			line-height: 1.5;
		}
	}
	.hr{
		width: 690rpx;
		height: 2rpx;
		background: #EFEFEF;
	}
}
</style>
