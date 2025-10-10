<template>
	<view>
		<view class="icon"
		@click="navigateBack"
		><uv-icon name="arrow-left"
		size="36rpx" 
		color="#fff"></uv-icon></view>
		<!-- 头部 -->
		<view class="head">
			<!-- 标题 -->
			<text>商城</text>
			<!-- 搜索 -->
			<view class="search">
				<image class="icon"
				src="/static/index/Icon_SY_sousuo_01.png"></image>
				<view class="split"></view>
				<text>搜索产品或书籍</text>
			</view>
		</view>
		<image src="/static/mall/Img_SCLB_banner_01.png" class="publicity"></image>
		<uv-tabs :list="listdata"
		:line-color="`url(${linecolor})`"
		lineHeight="14rpx"
		line-width="39rpx"
		activeStyle="
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #0D7CFF;
		line-height: 44rpx;"
		inactiveStyle="
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #92969E;
		line-height: 44rpx;"
		itemStyle="
		padding: 0 30rpx;
		padding-bottom:20rpx"></uv-tabs>
		<view class="malls" v-for="i in goodsarr" :key="i.id" @click="opengoods">
			<image :src="i.mainImg"></image>
			<view class="right">
				<view class="title">{{i.title}}</view>
				<view class="tabs">
					<view class="tab" v-for="i in 3">标签</view>
				</view>
				<view class="price">
					<text class="pricepro">￥{{i.Price}}</text>
					<text class="pro">到手价</text>
					<text class="info">￥{{i.delPrice}}</text>
				</view>
				<view class="info">
					<text>已售{{i.saleNum}}</text>
					<text>98%好评</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from 'image-tools';
	export default {
		data() {
			return {
				linecolor:'',
				listdata:[],
				goodsarr:[]
			}
		},
		created() {
			pathToBase64('/static/community/icon_biaozhu.png').then(base64 => {
				this.linecolor = base64
			}),
			this.goodsarr = [{
				id:1,
				mainImg:'https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/logo.png',
				title:'易中天带你读懂中国系列全套5册 读城记+品人录+大话方言+中 ...',
				price:168,
				delPrice:256,
				saleNum:'2000+'
			}]
		},
		methods: {
			opengoods(){
				uni.navigateTo({
					url:"/pages/index/mall/goods"
				})
			},
			navigateBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F2F4F6;
	}
	.icon{
		position: absolute;
		top: 115rpx;
		left: 30rpx;
	}
	.head{
		height: 300rpx;
		background: url(/static/mall/Img_SCLB_top_bg.png) repeat fixed center;
		overflow: hidden;
		text{
			position: absolute;
			top: 115rpx;
			left: 340rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 36rpx;
			color: #FFFFFF;
			line-height: 28rpx;
		}
		.search{
			width: 690rpx;
			height: 72rpx;
			background: #C7E1FF;
			border-radius: 20rpx;
			position: absolute;
			top: 200rpx;
			left: 30rpx;
			.icon{
				width: 36rpx;
				height: 36rpx;
				position: absolute;
				top: 18rpx;
				left: 27rpx;
			}
			.split{
				width: 2rpx;
				height: 24rpx;
				background: #789CC6;
				border-radius: 1rpx;
				position: absolute;
				top: 24rpx;
				left: 88rpx;
			}
			text{
				width: 201rpx;
				height: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #789CC6;
				line-height: 28rpx;
				position: absolute;
				top: 23rpx;
				left: 117rpx;
			}
		}
	}
	.publicity{
		margin: 20rpx 30rpx;
		height: 200rpx;
		width: 690rpx;
	}
	.navigator{
		height: 100rpx;
		margin-left: 30rpx;
		display: flex;
		gap: 0 80rpx;
		.navyes{
			display: flex;
			flex-direction: column;
			align-items: center;
			text{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 30rpx;
				color: #0D7CFF;
			}
			image{
				height: 15rpx;
				width: 40rpx;
			}
		}
		.navno{
			display: flex;
			flex-direction: column;
			align-items: center;
			text{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #848791;
			}
			image{
				height: 15rpx;
				width: 40rpx;
				display: none;
			}
		}
	}
	.malls{
		width: 690rpx;
		height: 244rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin:20rpx 30rpx;
		display: flex;
		image{
			width: 244rpx;
			height: 244rpx;
			background: #CFCFD7;
			border-radius: 20rpx;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			padding-left: 20rpx;
			.title{
				width: 409rpx;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #333333;
				line-height: 40rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				white-space: normal;
				overflow: hidden;
			}
			.tabs{
				display: flex;
				gap: 0 6rpx;
				.tab{
					background: #FFFFFF;
					border-radius: 4rpx;
					border: 1px solid rgba(208, 40, 53, .2);
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 18rpx;
					color: #D02835;
				}
			}
			.price{
				.pricepro{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 32rpx;
					color: #D02835;
					line-height: 28rpx;
				}
				.pro{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 22rpx;
					color: #D02835;
					line-height: 28rpx;
					margin-left: 8rpx;
					margin-right: 16rpx;
				}
				.info{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 22rpx;
					color: #848791;
				}
			}
			.info{
				text{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;
					color: #848791;
					margin-right: 16rpx;
				}
			}
		}
	}
</style>
