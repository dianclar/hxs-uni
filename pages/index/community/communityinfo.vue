<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<image class="headimg" src="/static/community/Img_SQ_top_bg.png"></image>
			<uv-navbar title="社群内容" 
			autoBack=true 
			bgColor="rgba(0,0,0,0)" 
			placeholder=true
			left-icon-color="#fff"
			:fixed="false"
			title-style="font-family: PingFang SC;
			font-weight: 500;
			font-size: 36rpx;
			color: #FEFEFE;"></uv-navbar>
			<view class="headinfo">
				<image src="/static/logo.png" mode=""></image>
				<view class="headinforight">
					<view class="headinforighttitle">【精神文明】社群多元文化信仰读典</view>
					<view>2025-01-01 至 2026-01-01</view>
				</view>
			</view>
			<view class="headoption">
				<view class="headoptioni">
					<img src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SQXQ_paihangbang.png" alt="">
					<view>排行榜</view>
				</view>
				<view class="headoptioni">
					<img src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SQXQ_dakajilu.png" alt="">
					<view>打卡记录</view>
				</view>
				<view class="headoptioni">
					<img src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SQXQ_shezhibianji.png">
					<view>社群编辑</view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content">
			<!-- 导航 -->
			<uv-tabs :list="[{name:'读书任务'},{name:'读书动态'}]"
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
			<view class="contenttask">
				<view class="contenttaskcreate" @click="opennewtask">
					<view class="contenttaskcreateleft">
						<image src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SQXQ_chuangjianrenwu.png" mode=""></image>
						<view>创建任务</view>
					</view>
					<uv-icon name="arrow-right"
					size="22rpx"></uv-icon>
				</view>
				<view class="contenttasknone">
					<image src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Img_TY_quesheng.png" mode=""></image>
					<view>暂无读书打卡任务</view>
				</view>
			</view>
			<view class="contenttrend">
				<view class="contenttrendcheck">
					<view class="contenttrendcheckinput">
						<image src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SY_sousuo_01.png" mode=""></image>
						<view class="icon"></view>
						<uv-input
						placeholder="搜索学员昵称"
						border="none"
						></uv-input>
					</view>
					<view class="contenttrendcheckright">
						<image src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Icon_SQXQ_paixu.png" mode=""></image>
						<view>按时间</view>
					</view>
				</view>
				<view class="contenttrendnone">
					<image src="https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/community/Img_TY_quesheng.png" mode=""></image>
					<view>暂无读书打卡动态</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottombutton" @click="">
				我要打卡
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
			opennewtask(){
				uni.navigateTo({
					url:"/pages/index/community/Newtask"
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
		display: flex;
		gap: 22rpx;
		padding: 0 30rpx;
		align-items: center;
		image{
			width: 172rpx;
			height: 120rpx;
		}
		.headinforight{
			flex: 1;
			width: 0;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #FFFFFF;
			line-height: 44rpx;
			.headinforighttitle{
				font-weight: bold;
				font-size: 32rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
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
	.headoption{
		display: flex;
		gap: 57rpx;
		margin: 35rpx 30rpx;
		.headoptioni{
			display: flex;
			gap: 13rpx;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #FFFFFF;
			line-height: 44rpx;
			image{
				width: 30rpx;
				height: 30rpx;
			}
		}
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
	.contenttask{
		padding: 20rpx 30rpx;
		border-bottom: 10rpx solid #f0f0f0;
		.contenttaskcreate{
			height: 96rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			border: 2px solid #F1F1F1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 32rpx;
			.contenttaskcreateleft{
				margin-left: -11rpx;
				display: flex;
				align-items: center;
				gap: 16rpx;
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 28rpx;
				color: #232323;
				line-height: 44rpx;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.contenttasknone{
			height: 592rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #92969E;
			line-height: 56rpx;
			image{
				width: 228rpx;
				height: 228rpx;
			}
		}
	}
	.contenttrend{
		padding: 30rpx;
		.contenttrendnone{
			height: 592rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #92969E;
			line-height: 56rpx;
			image{
				width: 228rpx;
				height: 228rpx;
			}
		}
		.contenttrendcheck{
			display: flex;
			align-items: center;
			gap: 21rpx;
			.contenttrendcheckright{
				display: flex;
				align-items: center;
				gap: 6rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #555555;
				line-height: 28rpx;
				image{
					width: 24rpx;
					height: 24rpx;
				}
			}
			.contenttrendcheckinput{
				flex: 1;
				width: 0;
				height: 72rpx;
				background: #F4F6F8;
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				image{
					width: 33rpx;
					height: 36rpx;
					margin-left: 22rpx;
				}
				.icon{
					width: 2rpx;
					height: 24rpx;
					background: #92969E;
					border-radius: 1rpx;
					margin-left: 33rpx;
					margin-right: 27rpx;
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
