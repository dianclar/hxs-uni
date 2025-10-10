<template>
	<view>
		<!-- 标题 -->
		<uv-navbar title="购物车" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 菜单栏 -->
		<view class="menubar">
			<view class="menubarleft">
				<text>总计：</text>
				<uv-tags text="8件" plain plainFill borderColor="rgba(0,0,0,0)"></uv-tags>
			</view>
			<view class="menubarright">
				<view class="menubarrighticon"></view>
				<text @click="edit=!edit">{{edit?'完成':'编辑'}}</text>
			</view>
		</view>
		<!-- 购物车信息 -->
		<view class="shppingcartinfo">
			<view v-for="i in 8">
				<view class="shppingcartinfoitem">
					<view class="shppingcartinfoitemleft">
						<view class="shppingcartinfoitemlefticon"></view>
						<image src="/static/logo.png" mode=""></image>
					</view>
					<view class="shppingcartinfoitemright">
						<text class="shppingcartinfoitemrighttitle">易中天带你读懂中国系列全套5册 读城记+品人录+大话方言+中 ... 拷贝</text>
						<picker>
							<view>
								<text>易中天带你读懂中国(5册)</text>
								<uv-icon width="12rpx" height="12rpx"
								name="/static/mall/Icon_GWC_xiala_01.png"></uv-icon>
							</view>
						</picker>
						<view class="shppingcartinfoitemrightbottom">
							<view class="shppingcartinfoitemrightbottomleft">
								<text class="shppingcartinfoitemrightbottomlefttitle">￥168</text>
								<text class="shppingcartinfoitemrightbottomleftSubtitle">到手价</text>
								<text class="shppingcartinfoitemrightbottomleftinfo">￥256</text>
							</view>
							<uv-number-box v-model="value" :disabledInput="true">
								<template v-slot:minus>
									<text style="font-weight: bold;color: rgba(0, 0, 0, .5);font-size: 120%;">-</text>
								</template>
								<template v-slot:input>
									<text class="input">
										{{value}}
									</text>
								</template>
								<template v-slot:plus>
									<text style="font-weight: bold;color: rgba(0, 0, 0, .5);">+</text>
								</template>
							</uv-number-box>
						</view>
					</view>
				</view>
				<view class="hr"></view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottomleft">
				<view></view>
				<text>全选</text>
			</view>
			<view class="bottomright">
				<text>{{edit?'':'总计:￥168.00'}}</text>
				<view>{{edit?'移出购物车':'去结算'}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:1,
				edit:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F2F4F6;
}
.menubar{
	height: 88rpx;
	background: #FFFFFF;
	padding: 0 30rpx;
	display: flex;
	justify-content: space-between;
	.menubarleft{
		display: flex;
		gap: 15rpx;
		align-items: center;
	}
	.menubarright{
		display: flex;
		gap: 39rpx;
		align-items: center;
		.menubarrighticon{
			width: 2rpx;
			height: 40rpx;
			background: #D1D1D1;
		}
	}
}
.input{
	padding: 0 30rpx;
	background: #F1F1F1;
	margin: 0 15rpx;
}
.shppingcartinfo{
	background: #FFFFFF;
	padding: 30rpx;
	margin-top: 20rpx;
	.shppingcartinfoitem{
		display: flex;
		align-items: center;
		gap: 25rpx;
		.shppingcartinfoitemleft{
			display: flex;
			gap: 30rpx;
			align-items: center;
			.shppingcartinfoitemlefticon{
				width: 39rpx;
				height: 39rpx;
				box-shadow: 0rpx 5rpx 10rpx 0rpx rgba(139,139,139,0.5);
				border-radius: 50%;
				border: 3px solid #8B8B8B;
			}
			image{
				width: 182rpx;
				height: 182rpx;
				background: #E0E0E0;
				border-radius: 10rpx;
			}
		}
		.shppingcartinfoitemright{
			height: 200rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			picker{
				view{
					width: fit-content;
					background: #F2F2F2;
					border-radius: 6rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 20rpx;
					color: #848791;
					display: flex;
					padding: 8rpx 12rpx;
					align-items: center;
					justify-content: space-between;
					gap: 16rpx;
				}
			}
			.shppingcartinfoitemrighttitle{
				overflow: hidden;
				text-overflow: ellipsis;
				width: 409rpx;
				height: 80rpx;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #333333;
				line-height: 40rpx;
			}
			.shppingcartinfoitemrightbottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.shppingcartinfoitemrightbottomleft{
					display: flex;
					align-items: flex-end;
					.shppingcartinfoitemrightbottomlefttitle{
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 32rpx;
						color: #D02835;
						line-height: 28rpx;
					}
					.shppingcartinfoitemrightbottomleftSubtitle{
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 24rpx;
						color: #D02835;
						line-height: 28rpx;
						margin-left: 5rpx;
						position: relative;
						top: 2rpx;
						left: 1rpx;
					}
					.shppingcartinfoitemrightbottomleftinfo{
						margin-left: 10rpx;
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 20rpx;
						color: #848791;
						position: relative;
						top: 5rpx;
					}
				}
			}
		}
	}
	.hr{
		width: 618rpx;
		height: 2rpx;
		background: #EFEFEF;
		margin: 30rpx 0;
		margin-left: 70rpx;
	}
}
.bottom{
	width: -webkit-fill-available;
	height: 120rpx;
	background: #FFFFFF;
	box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx 70rpx 39rpx;
	position: fixed;
	bottom: 0;
	z-index: 1000;
	.bottomleft{
		display: flex;
		align-items: center;
		gap: 15rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 26rpx;
		color: #111111;
		line-height: 28rpx;
		view{
			width: 39rpx;
			height: 39rpx;
			box-shadow: 0rpx 5rpx 10rpx 0rpx rgba(139,139,139,0.5);
			border-radius: 50%;
			border: 3px solid #8B8B8B;
		}
	}
	.bottomright{
		display: flex;
		align-items: center;
		gap: 50rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #111111;
		line-height: 28rpx;
		view{
			width: 210rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #308FFF 0%, #0D7CFF 100%);
			box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(13,124,255,0.5);
			border-radius: 16rpx;
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
</style>
