<template>
	<view>
		<!-- 头部用户栏 -->
		<view class="head">
			<view class="headuser">
				<view class="headuserleft">
					<image src="/static/logo.png" mode=""></image>
					<view class="headuserleftinfo">
						<view class="headuserleftinfotop">
							<view @click="loginn">
								李倩倩
							</view>
							<uv-icon width="16rpx" height="26rpx"
							name="/static/mine/Icon_WD_jinruxiangqing.png"></uv-icon>
						</view>
						<view class="headuserleftinfobottom">
							hxs****7206
						</view>
					</view>
				</view>
				<view class="headuserright">
					<uv-icon width="34rpx" height="34rpx"
					name="/static/mine/Icon_WD_kefu.png"></uv-icon>
					<view>客服</view>
				</view>
			</view>
			<view class="headrecord">
				<view class="headrecorditem" @click="openmallorder">
					<view class="headrecorditemnum">
						14
					</view>
					<view class="headrecorditeminfo">
						商城订单
					</view>
				</view>
				<view class="headrecorditem">
					<view class="headrecorditemnum">
						8
					</view>
					<view class="headrecorditeminfo">
						我的收藏
					</view>
				</view>
				<view class="headrecorditem">
					<view class="headrecorditemnum">
						4
					</view>
					<view class="headrecorditeminfo">
						优惠券
					</view>
				</view>
				<view class="headrecorditem">
					<view class="headrecorditemnum">
						12
					</view>
					<view class="headrecorditeminfo">
						礼品卡
					</view>
				</view>
				<view class="headrecorditem">
					<view class="headrecorditemnum">
						2
					</view>
					<view class="headrecorditeminfo">
						耕心圈
					</view>
				</view>
			</view>
			<view class="headvip">
				<view class="headvipleft">
					<image src="/static/mine/Icon_WD_renzhengbiaoshi.png" mode=""></image>
					<view class="headviplefttitle">华学社会员认证</view>
					<view>丨 开通会员可享更多定制</view>
				</view>
				<uv-icon width="12rpx" height="22rpx"
				name="/static/mine/Icon_jinru_baise.png"></uv-icon>
			</view>
		</view>
		<!-- 服务中心 -->
		<view class="ServiceCenter">
			<view class="ServiceCentertitle">
				<view class="ServiceCentertitleleft">
					服务中心
				</view>
				<view class="ServiceCentertitleright">
					<view>更多服务</view>
					<uv-icon name="arrow-right" size="22rpx"></uv-icon>
				</view>
			</view>
			<view class="ServiceCenteritems">
				<view class="ServiceCenteritemsitem">
					<image src="/static/mine/Icon_WD_rongyuxunzhang.png" mode=""></image>
					<view>荣誉勋章</view>
				</view>
				<view class="ServiceCenteritemsitem">
					<image src="/static/mine/Icon_WD_qiandaozhongxin.png" mode=""></image>
					<view>签到中心</view>
				</view>
				<view class="ServiceCenteritemsitem">
					<image src="/static/mine/Icon_WD_jifenzhongxin.png" mode=""></image>
					<view>积分中心</view>
				</view>
				<view class="ServiceCenteritemsitem">
					<image src="/static/mine/Icon_WD_zhuanghuqianbao.png" mode=""></image>
					<view>账户钱包</view>
				</view>
			</view>
			<image src="/static/mine/banner(690-196)3_01.png" class="ServiceCenterpromotion"></image>
		</view>
		<!-- 常用服务 -->
		<view class="CommonServices">
			<view class="CommonServicestitle">
				常用服务
			</view>
			<uv-list customStyle="padding-right: 30rpx;margin-top: 39rpx;gap: 20rpx;">
				<uv-list-item title="我的活动" link></uv-list-item>
				<uv-list-item title="我的捐助" link></uv-list-item>
				<uv-list-item title="传递好书" link></uv-list-item>
				<uv-list-item title="地址管理" link></uv-list-item>
			</uv-list>
		</view>
	</view>
</template>

<script>
	import request from '@/request/request.js'
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			setTimeout(()=>this.login(),3000)
		},
		methods: {
			openmallorder(){
				uni.navigateTo({
					url:'/pages/index/mall/mallorder'
				})
			},
			loginn(){
				uni.getUserProfile({//获取用户信息
					desc:"xmmn",
					success(user){
						console.log(11111,user)
					}
				})
			},
			login(){
				const that = this;
				uni.login({
					success(res) {
						let paramCode = {}
						paramCode.code = res.code
						console.log('paramCode', paramCode);
						request({
							url: "/wx/get/openid",
							method: "GET",
							data: paramCode
						}).then((res) => {
							console.log("APP.....................:", res);
							uni.setStorageSync("memberId", res.data.memberId)
							uni.setStorageSync("openId", res.data.openId)
							that.$isResolve();
						}).catch((error) => {
							console.log('错误', error);
							$p.showToast("error", "系统繁忙", 1500);
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.head{
	background-color: #f0f0f0;
	padding: 200rpx 30rpx 0 30rpx;
	.headuser{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.headuserleft{
			display: flex;
			align-items: center;
			gap: 30rpx;
			image{
				height: 100rpx;
				width: 100rpx;
				border-radius: 50rpx;
			}
			.headuserleftinfo{
				display: flex;
				gap: 24rpx;
				flex-direction: column;
				.headuserleftinfotop{
					display: flex;
					gap: 20rpx;
					font-family: PingFang SC;
					font-weight: bold;
					font-size: 40rpx;
					color: #54585F;
					line-height: 28rpx;
				}
				.headuserleftinfobottom{
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 26rpx;
					color: #54585F;
					opacity: 0.8;
				}
			}
		}
		.headuserright{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 20rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			border: 4px solid rgba(139, 146, 158, .4);
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 22rpx;
			color: #54585F;
			opacity: 0.8;
		}
	}
	.headrecord{
		display: flex;
		justify-content: space-around;
		margin-top: 39rpx;
		.headrecorditem{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 120rpx;
			gap: 20rpx;
			.headrecorditemnum{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 30rpx;
				color: #54585F;
			}
			.headrecorditeminfo{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #92969E;
			}
		}
	}
	.headvip{
		margin-top: 35rpx;
		height: 80rpx;
		background: linear-gradient(90deg, #38464C 0%, #646774 100%);
		border-radius: 19rpx 19rpx 0rpx 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 18rpx;
		.headvipleft{
			display: flex;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #FFFFFF;
			line-height: 28rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			.headviplefttitle{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #FAD3B9;
				line-height: 28rpx;
				font-style: italic;
				margin: 0 24rpx 0 10rpx;
			}
		}
	}
}
.ServiceCenter{
	padding: 60rpx 30rpx;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	.ServiceCentertitle{
		display: flex;
		justify-content: space-between;
		.ServiceCentertitleleft{
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 32rpx;
			color: #54585F;
			line-height: 28rpx;
		}
		.ServiceCentertitleright{
			margin-right: 20rpx;
			display: flex;
			gap: 10rpx;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 26rpx;
			color: #9BA2AF;
			line-height: 28rpx;
		}
	}
	.ServiceCenteritems{
		display: flex;
		justify-content: space-between;
		margin: 60rpx 20rpx;
		.ServiceCenteritemsitem{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 24rpx;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 28rpx;
			color: #54585F;
			line-height: 28rpx;
			image{
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
	.ServiceCenterpromotion{
		width: 100%;
		height: 200rpx;
	}
}
.CommonServices{
	padding: 0 30rpx;
	.CommonServicestitle{
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #54585F;
		line-height: 28rpx;
	}
}
</style>
