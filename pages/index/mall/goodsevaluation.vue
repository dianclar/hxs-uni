<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="商品评价" autoBack=true></uv-navbar>
		<view>头部占位</view>
		<view>头部占位</view>
		<view>头部占位</view>
		<view>头部占位</view>
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
		<!-- 标签 -->
		<view class="tags">
			<view class="tagaction tagnoaction">
				<uv-icon name="checkbox-mark" color="#0D7CFF"
				size="24rpx" style="padding: 0;"></uv-icon>
				<text>全部(586)</text>
			</view>
			<view class="tagnoaction">好评(516)</view>
			<view class="tagnoaction">好评(516)</view>
			<view class="tagnoaction">好评(516)</view>
			<view class="tagnoaction">好评(516)</view>
			<view class="tagnoaction">好评(516)</view>
			<view class="tagnoaction">好评(516)</view>
		</view>
		<!-- 评论 -->
		<view class="evaluation">
			<view v-for="i in 5">
				<view class="evaluationinfo">
					<view class="evaluationinfouser">
						<view class="evaluationinfouserleft">
							<image src="/static/logo.png"></image>
							<text>hxs***62</text>
							<uv-rate :count="5" readonly :value="5" gutter="0" size=15></uv-rate>
						</view>
						<view class="evaluationinfouserright">
							2025-08-01
						</view>
					</view>
					<view class="evaluationinfoevaluation">
						快递小哥很好，物流很及时，华学社还是值得信赖肯定 的，就是少邮寄了一本。
					</view>
					<view class="evaluationinfoimg">
						<image src="/static/logo.png"></image>
						<image src="/static/logo.png"></image>
						<image src="/static/logo.png"></image>
					</view>
					<view class="evaluationinfodetails">
						易中天带你读懂中国（10册）
					</view>
				</view>
				<view class="hr"></view>
			</view>
		</view>
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
				<view class="shop" @click="openspecification">立即购买</view>
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
				addshopcat:false,
				specification:{
					height:'1000rpx',
					width:'auto',
					padding:'45rpx 30rpx',
					borderRadius: '16rpx 16rpx 0rpx 0rpx'
				},
			}
		},
		methods: {
			clickshopcat(){
				this.addshopcat=!this.addshopcat
				setTimeout(()=>this.addshopcat=!this.addshopcat,2000)
			},
			openspecification() {
				this.$refs.specification.open();
			},
			openshoppingcart(){
				uni.navigateTo({
					url:"/pages/index/mall/shoppingcart"
				})
			},
		}
	}
</script>

<style lang="scss">
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
.tags{
	display: flex;
	flex-wrap: wrap; 
	gap: 20rpx;
	padding: 30rpx;
	.tagnoaction{
		background: #E6F2FF;
		border-radius: 10rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #111111;
		line-height: 42rpx;
		padding: 10rpx 25rpx;
	}
	.tagaction{
		border: 2px solid #0D7CFF;
		color: #0D7CFF;
		display: flex;
		gap: 10rpx;
	}
}
.evaluation{
	padding: 0 30rpx;
	.evaluationinfo{
		display: flex;
		flex-direction: column;
		gap: 30rpx;
		.evaluationinfouser{
			display: flex;
			justify-content: space-between;
			.evaluationinfouserleft{
				display: flex;
				gap: 18rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #111111;
				line-height: 28rpx;
				align-items: center;
				image{
					width: 36rpx;
					height: 36rpx;
					border-radius: 18rpx;
					background: #848791;
				}
			}
			.evaluationinfouserright{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #848791;
				line-height: 28rpx;
			}
		}
		.evaluationinfoevaluation{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #000000;
			line-height: 40rpx;
		}
		.evaluationinfoimg{
			display: flex;
			gap: 20rpx;
			image{
				width: 158rpx;
				height: 158rpx;
				background: #D5E8FF;
				border-radius: 10rpx;
			}
		}
		.evaluationinfodetails{
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #848791;
		}
	}
	.hr{
		width: 690rpx;
		height: 2rpx;
		background: #EFEFEF;
		margin: 35rpx 0;
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
	z-index: 39;
}
</style>
