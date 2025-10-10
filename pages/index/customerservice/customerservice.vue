<template>
	<view class="page">
		<!-- 头部 -->
		<image src="/static/mine/Img_KFTP_beijingchahua.png" style="width: 100%;height: 417rpx;"></image>
		<view class="headtitle">
			<uv-icon name="arrow-left" color="#fff" size="34rpx"></uv-icon>
			<view>客服中心</view>
		</view>
		<scroll-view 
		class="chat"
		:scroll-y="true"
		enhanced="true" 
		show-scrollbar="{{false}}"
		:scroll-top="scroll">
			<view class="chati">
				<view class="chattag">
					2023年9月2日 09:00
				</view>
				<view class="chatmy">
					<view>
						<view class="chatbox"></view>
						刚收到的书籍有点货不对板需要退货，售后已申请，麻烦给个地址。
					</view>
					<image src="/static/logo.png" mode=""></image>
				</view>
				<view class="chatmy">
					<view>
						<view class="chatbox"></view>
						我发个图您看看~
					</view>
					<image src="/static/logo.png" mode=""></image>
				</view>
				<view class="chatmy">
					<image class="chatimg" 
					src="/static/logo.png"
					mode="aspectFill"></image>
					<image src="/static/logo.png" mode=""></image>
				</view>
				<view class="chattag">
					2023年9月2日 09:00
				</view>
				<view class="chatother">
					<image src="/static/logo.png" mode=""></image>
					<view class="chatotherinfo">
						<text class="chatothername">
							人工客服-0852
						</text>
						<view>
							<view class="chatbox"></view>
							您好！请稍等，我帮您看看订单。
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部 -->
		<view>
			<view class="bottom">
				<image src="/static/mine/Icon_KF_xiangce.png" mode=""></image>
				<input type="text" />
				<view class="bottombutton">
					发送
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll:0
			}
		},
		methods: {
			chatbottom(){
				const query = uni.createSelectorQuery()
				query.select('.chat').boundingClientRect()
				query.select('.chati').boundingClientRect()
				query.exec(res => {
					const chath = res[0].height
					const chatih = res[1].height
					this.scroll = chatih - chath
				})
			}
		},
		onReady(){
			this.chatbottom()
		}	
	}
</script>

<style lang="scss">
.page{
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.headtitle{
	position: fixed;
	top: 100rpx;
	left: 30rpx;
	height: 64rpx;
	display: flex;
	gap: 34rpx;
	align-items: center;
	font-family: PingFang SC;
	font-weight: 500;
	font-size: 36rpx;
	color: #FFFFFF;
	line-height: 28rpx;
}
.bottom{
	display: flex;
	gap: 30rpx;
	padding: 16rpx 30rpx;
	align-items: center;
	image{
		width: 46rpx;
		height: 46rpx;
	}
	.bottombutton{
		width: 100rpx;
		height: 66rpx;
		background: #0D7CFF;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 42rpx;
	}
	input{
		flex: 1;
		background: #F5F6F8;
		border-radius: 10rpx;
		height: 66rpx;
	}
}
.chat{
	background-color: #f0f0f0;
	margin-top: -80rpx;
	border-radius: 28rpx 28rpx 0rpx 0rpx;
	height: 0;
	flex: 1;
	.chati{
		padding: 36rpx 30rpx;
		display: flex;
		flex-direction: column;
		gap: 36rpx;
		.chatmy{
			display: flex;
			justify-content: flex-end;
			gap: 24rpx;
			image{
				width: 84rpx;
				height: 84rpx;
				background: #9DD4CD;
				border-radius: 42rpx;
				border: 2px solid #FFFFFF;
			}
			view{
				max-width: 439rpx;
				background-color: #0D7CFF;
				position: relative;
				border-radius: 10rpx;
				padding: 24rpx 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #FFFFFF;
				line-height: 42rpx;
				.chatbox{
					background-color: #0D7CFF;
					position: absolute;
					top: 12rpx;
					right: -60rpx;
					clip-path: polygon(0% 0%,15rpx 15rpx,0% 30rpx)
				}
			}
			.chatimg{
				width: 260rpx;
				height: 180rpx;
				background: #C1E6FF;
				border-radius: 20rpx;
			}
		}
		.chatother{
			display: flex;
			gap: 24rpx;
			image{
				width: 84rpx;
				height: 84rpx;
				background: #9DD4CD;
				border-radius: 42rpx;
				border: 2px solid #FFFFFF;
			}
			.chatotherinfo{
				.chatothername{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 26rpx;
					color: #888888;
					line-height: 42rpx;
					margin-bottom: 18rpx;
				}
				view{
					max-width: 439rpx;
					background-color: #fff;
					position: relative;
					border-radius: 10rpx;
					padding: 24rpx 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 28rpx;
					color: #090707;
					line-height: 42rpx;
					.chatbox{
						background-color: #fff;
						position: absolute;
						top: 12rpx;
						left: -15rpx;
						clip-path: polygon(0 15rpx,15rpx 0,15rpx 30rpx)
					}
				}
				.chatimg{
					width: 260rpx;
					height: 180rpx;
					background: #C1E6FF;
					border-radius: 10rpx;
				}
			}
		}
		.chattag{
			margin: 0 auto;
			background: #DADADA;
			border-radius: 10rpx;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 26rpx;
			color: #FFFFFF;
			line-height: 32rpx;
			padding: 10rpx 18rpx;
		}
	}
}
</style>
