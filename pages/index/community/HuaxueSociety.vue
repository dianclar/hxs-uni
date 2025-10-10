<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<image class="headimg" src="/static/community/Img_SQ_top_bg.png"></image>
			<uv-navbar title="华学社" 
			autoBack=true 
			bgColor="rgba(0,0,0,0)" 
			placeholder=true
			left-icon-color="#fff"
			:fixed="false"
			title-style="font-family: PingFang SC;
			font-weight: 500;
			font-size: 36rpx;
			color: #FEFEFE;"></uv-navbar>
			<view class="headtitle">腹有读书气自华</view>
			<view class="headinfo">
				华学社是以弘扬华夏文化为宗旨的文学爱好者群体，专注于古典文学、古风诗词等传统文学形式的每日读书打卡社群
			</view>
			<view class="headshare">
				<uv-icon name="/static/community/Icon_SQ_fenxiang.png" size="32rpx"></uv-icon>
				<view>分享社群</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content">
			<uv-tabs :list="[{name:'最近加入'},{name:'所有社群'},{name:'我创建的'}]"
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
			line-height: 44rpx;"></uv-tabs>
			<view class="contentinfo" v-for="i in 5" @click="opencommunityinfo">
				<view class="contentinfomain">
					<view class="contentinfomainleft">
						<image src="/static/logo.png" mode=""></image>
						<view>读书打卡</view>
					</view>
					<view class="contentinfomainright">
						<view class="contentinfomainrighttitle">
							【精神文明】社群多元文化信仰读典
						</view>
						<view class="contentinfomainrightsubtitle">
							2025-01-01 至 2026-01-01 · 已打卡10天
						</view>
						<uv-line-progress
						activeColor="rgba(13, 124, 255, 1)"
						inactiveColor="background: #EDF0F2;"
						height="12rpx"
						:percentage="percentage"
						:customStyle="{ overflow: 'visible'}">
							<template #default>
								<view class="progress"></view>
							</template>
						</uv-line-progress>
						<view class="contentinfomainrightbottom">
							<view class="">
								进行中 10/256
							</view>
							<view class="">
								已参与人数 486/999
							</view>
						</view>
					</view>
				</view>
				<view class="contentinfohr">
					
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottombutton" @click="opennewclockin">
				创建打卡
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from 'image-tools';
	export default {
		data() {
			return {
				linecolor:'',
				percentage:39
			};
		},
		onLoad() {
			pathToBase64('/static/community/icon_biaozhu.png').then(base64 => {
				this.linecolor = base64
			})
		},
		methods:{
			opennewclockin(){
				uni.navigateTo({
					url:"/pages/index/clockin/newclockin"
				})
			},
			opencommunityinfo(){
				uni.navigateTo({
					url:"/pages/index/community/communityinfo"
				})
			}
		}
	}
</script>

<style lang="scss">
.head{
	.headimg{
		position: absolute;
		width: 100%;
		height: 480rpx;
		z-index: -1;
	}
	.headtitle{
		margin:30rpx;
		margin-top: 0;
		font-family: DingTalk JinBuTi;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 34rpx;
	}
	.headinfo{
		margin: -6rpx 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 42rpx;
	}
	.headshare{
		margin: 30rpx;
		border-radius: 10rpx;
		border: 2px dashed #FFFFFF;
		padding: 5rpx 15rpx;
		display: flex;
		align-items: center;
		gap: 10rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 26rpx;
		color: #FFFFFF;
		line-height: 44rpx;
		width: fit-content;
	}
}
.content{
	background: #FFFFFF;
	border-radius: 39rpx;
	padding-bottom: 200rpx;
	.contentinfo{
		margin: 20rpx 30rpx;
		.contentinfohr{
			height: 2rpx;
			background: #DBE1E6;
			opacity: 0.5;
			border-radius: 1rpx;
			margin: 30rpx 0;
		}
		.contentinfomain{
			display: flex;
			gap: 24rpx;
			align-items: center;
			.contentinfomainleft{
				width: 226rpx;
				height: 160rpx;
				position: relative;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
					object-fit: cover; 
					object-position: center;
				}
				view{
					position: absolute;
					bottom: 12rpx;
					right: 14rpx;
					border-radius: 4rpx;
					background-color:  rgba(0, 0, 0, .4);
					padding: 0 6rpx;
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 24rpx;
					color: #FFFFFF;
					line-height: 44rpx;
				}
			}
			.contentinfomainright{
				flex: 1;
				width: 0;
				.contentinfomainrighttitle{
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 28rpx;
					color: #333333;
					line-height: 44rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.contentinfomainrightsubtitle{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 20rpx;
					color: #92969E;
					line-height: 44rpx;
					margin-bottom: 15rpx;
				}
				.contentinfomainrightbottom{
					display: flex;
					justify-content: space-between;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;
					color: #92969E;
					line-height: 44rpx;
					margin-top: 12rpx;
				}
				.progress{
					width: 28rpx;
					height: 28rpx;
					background: #0D7CFF;
					border-radius: 50%;
				}
			}
		}
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 5rpx 0rpx rgba(169,169,169,0.35);
	.bottombutton{
		margin: 20rpx 30rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0D7CFF;
		border-radius: 16rpx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
	}
}
</style>
