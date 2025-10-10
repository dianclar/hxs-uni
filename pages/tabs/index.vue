<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<!-- 标题 -->
			<image class="title"
			src="@/static/index/Icon_SY_huanyingci.png"></image>
			<!-- 搜索 -->
			<view class="search">
				<image class="icon"
				src="/static/index/Icon_SY_sousuo_01.png"></image>
				<view class="split"></view>
				<text>搜索社群或书籍</text>
			</view>
			<!-- 轮播图 -->
			<swiper class="publicity" 
			indicator-dots=trun
			indicator-color=rgba(255,255,255,.7)
			indicator-active-color=#fff>
				<swiper-item v-for="i in previewArray" :key="i">
					<image class="img"
					:src="i"></image>
				</swiper-item>
			</swiper>	
			<!-- 遮挡 -->
			<view class="bottom"><view class="bot"></view></view>
		</view>
		<!-- 社群板块 -->
		<view class="community">
			<!-- 导航 -->
			<view class="navigator">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="/static/index/Icon_SY_jgq_paihangbang.png"></image>
					<text>排行榜</text>
				</view>
				<navigator url="/pages/index/mall/mall">
					<view style="display: flex;flex-direction: column;align-items: center;">
						<image src="/static/index/Icon_SY_jgq_shangcheng.png"></image>
						<text>商城</text>
					</view>
				</navigator>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="/static/index/Icon_SY_jgq_zhuangzangdadian.png"></image>
					<text>装藏大典</text>
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="/static/index/Icon_SY_jgq_zaixiantingshu.png"></image>
					<text>在线听书</text>
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="/static/index/Icon_SY_jgq_dangjianlingdao.png"></image>
					<text>党建引领</text>
				</view>
			</view>
			<!-- 标题 -->
			<image class="title"
			src="@/static/index/Icon_SY_dushushequn.png"></image>
			<!-- 社群 -->
			<view class="com">
				<image v-for="i in socialarr" :key="i.id"
				:src="i.socialImg" @click="openSociety(i.id)"></image>
			</view>
		</view>
		<!-- 活动板块 -->
		<view class="event">
			<!-- 标题 -->
			<view class="eventtitle">
				<image src="@/static/index/Icon_SY_huodongtuijian.png"
				 class="titleimg"></image>
				 <view class="eventtitleleft">
					<text>更多活动</text>
					<image src="@/static/index/icon_tongyong_jinru01.png"></image>
				 </view>
			</view>
			<!-- 内容 -->
			<view v-for="(i,t) in activityarr" :key="i.id">
				<view class="eventinfo" >
					<image :src="i.coverImg"></image>
					<view class="eventinfoleft">
						<view class="eventinfolefttitle">{{i.activityTitle}}</view>
						<view class="eventinfoleftinfo">{{i.proName}}</view>
					</view>
				</view>
				<!-- 分割线 -->
				<view class="hr" v-if="!t==activityarr.length-1"></view>
			</view>
		</view>
		<!-- 打卡 -->
		<view class="clock">
			<!-- 按钮 -->
			<view class="buttom" @click="clockin = true">
				<text class="title">开始每日打卡</text>
				<text class="info">(不积跬步无以至千里，不积小流无以成江海)</text>
			</view>
		</view>
	</view>
	<uv-overlay :show="clockin"
	@click="clockin = false">
		<view class="clockin" @tap.stop>
			<view class="clockintitle">
				<uv-icon name="arrow-left" @click="clockin = false" size="34rpx"></uv-icon>
				<view>打卡类型</view>
				<view style="width: 34rpx;"></view>
			</view>
			<view class="clockininfo">
				<view class="clockininfotitle">
					不积跬步无以至千里，不积小流无以成江海
				</view>
				<view class="clockininfotext">
					当坚持从刻意变成晨露般的自然，打卡便是银河洒落的星轨，每道痕迹都让庸常泛起辰星级微光~
				</view>
			</view>
			<view class="clockinbottom">
				<view class="clockinbottombutton" @click="openMindsetReview('练操打卡')">
					<image src="/static/index/Icon_DKLX_liancao.png" mode=""></image>
					练操打卡
				</view>
				<view class="clockinbottombutton" @click="openMindsetReview('心性复盘')">
					<image src="/static/index/Icon_DKLX_xinxngfupan.png" mode=""></image>
					心性复盘
				</view>
				<view class="clockinbottombutton" @click="opensetShare">
					<image src="/static/index/Icon_DKLX_xinxngfupan.png" mode=""></image>
					每日分享
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</uv-overlay>
</template>

<script>
	import{Getconfigglobalimage}from"@/request/api/Config.js"
	import{Getsocialquery}from"@/request/api/social.js"
	import{Getactivityquery}from"@/request/api/activity.js"
	export default {
		data() {
			return {
				clockin:false,
				previewArray:[],
				socialarr:[],
				activityarr:[]
			}
		},
		watch:{
			clockin(n){//隐藏底栏
				if(n){
					uni.hideTabBar()
				}else{
					uni.showTabBar()
				}
			}
		},
		methods: {
			openMindsetReview(u){
				uni.navigateTo({
					url:`/pages/index/clockin/MindsetReview?title=${u}`
				})
			},
			openSociety(d){
				if(d==6){
					uni.navigateTo({
						url:"/pages/index/community/HuaxueSociety"
					})
				}
			},
			opensetShare(){
				uni.navigateTo({
					url:"/pages/index/clockin/setShare"
				})
			},
		},
		created() {
			Getconfigglobalimage({
				"imgKey": "index_top3"
			}).then(d=>{
				this.previewArray=d.imgVo.previewArray
			})
			Getsocialquery({
				
			}).then(d=>{
				this.socialarr = d.socialList
			})
			Getactivityquery({
				"pageId": 1,
				"pageSize": 10,
			}).then(d=>{
				this.activityarr = d.pageInfo.records
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F2F4F6;
		padding-bottom: 300rpx;
	}
	.head{
		position: relative;
		height: 538rpx;
		background: #0D7CFF;
		.title{
			width: 238rpx;
			height: 33rpx;
			position: absolute;
			top: 115rpx;
			left: 32rpx;
		}
		.search{
			width: 690rpx;
			height: 72rpx;
			background: #C7E1FF;
			border-radius: 20rpx;
			position: absolute;
			top: 186rpx;
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
		.publicity{
			width: 690rpx;
			height: 230rpx;
			position: absolute;
			top: 280rpx;
			left: 30rpx;
			.img{
				width: 100%;
				height: 100%;
				object-fit: cover; /* 关键属性：保持比例填充容器 */
				object-position: center; /* 图片居中 */
			}
		}
		.bottom{
			position: absolute;
			bottom: 0;
			filter: drop-shadow(0 -1rpx 16rpx rgba(15,79,154,.3));
			.bot{
				width: 750rpx;
				height: 80rpx;
				background-color: #FFFFFF;
				clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 
				90% 20%,
				80% 39%,
				65% 50%,
				50% 60%,
				35% 50%,
				20% 39%,
				10% 20%);
			}
		}
	}
	.community{
		width: 750rpx;
		background: #FFFFFF;
		position: relative;
		margin-top: -4rpx;
		padding-bottom: 26rpx;
		.navigator{
			width: 100%;
			background: #FFFFFF;
			display: flex;
			justify-content: space-evenly;
			image{
				width: 92rpx;
				height: 92rpx;
			}
			text{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #333333;
				line-height: 28rpx;
			}
		}
		.title{
			margin-top: 44rpx;
			margin-left: 30rpx;
			margin-bottom: 28rpx;
			width: 132rpx;
			height: 30rpx;
		}
		.com{
			top: 225rpx;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			gap: 22rpx 0; 
			image{
				width: 334rpx;
				height: 180rpx;
			}
		}
	}
	.event{
		background: #FFFFFF;
		margin-top: 22rpx;
		padding: 30rpx;
		.eventtitle{
			display: flex;
			justify-content: space-between;
			.titleimg{
				width: 134rpx;
				height: 32rpx;
			}
			.eventtitleleft{
				display: flex;
				gap: 18rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #9BA2AF;
				line-height: 28rpx;
				image{
					width: 12rpx;
					height: 22rpx;
				}
			}
		}
		.eventinfo{
			display: flex;
			gap: 27rpx;
			align-items: center;
			margin-top: 24rpx; 
			image{
				width: 240rpx;
				height: 160rpx;
			}
			.eventinfoleft{
				flex: 1;
				width: 0;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 26rpx;
				color: #AFAFAF;
				line-height: 42rpx;
				.eventinfolefttitle{
					margin-bottom: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 30rpx;
					color: #111111;
					line-height: 42rpx;
					display: -webkit-box; /* 设置为WebKit内核的弹性盒子模型 */
					-webkit-box-orient: vertical; /* 垂直排列 */
					-webkit-line-clamp: 2; /* 限制显示行 */
					overflow: hidden; /* 隐藏超出范围的内容 */
					text-overflow: ellipsis; /* 使用省略号 */   /* 溢出时显示省略号 */
				}
			}
		}
		.hr{
			margin-top: 24rpx;
			height: 2rpx;
			background: #EEEEEE;
		}
	}
	.clock{
		width: 750rpx;
		height: 188rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 8rpx 0rpx rgba(169,169,169,0.3);
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		z-index: 1;
		.buttom{
			width: 670rpx;
			height: 108rpx;
			background: linear-gradient(90deg, #6EB1FF 0%, #0D7CFF 100%);
			box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(13,124,255,0.35);
			border-radius: 54rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			.title{
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #FFFFFF;
				line-height: 28rpx;
			}
			.info{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 22rpx;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
	}
	.clockin{
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		border-radius: 28rpx 28rpx 0rpx 0rpx;
		width: 100%;
		.clockintitle{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 32rpx;
			color: #111111;
			line-height: 28rpx;
			border-bottom: 2rpx solid #efefef;		
		}
		.clockininfo{
			margin: 39rpx;
			.clockininfotitle{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 30rpx;
				color: #111111;
				line-height: 34rpx;
			}
			.clockininfotext{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #92969E;
				line-height: 42rpx;
				margin-top: 27rpx;
			}
		}
		.clockinbottom{
			margin: 32rpx 39rpx;
			display: flex;
			gap:30rpx;
			.clockinbottombutton{
				height: 210rpx;
				width: 100%;
				background: #F1F2F5;
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				gap: 22rpx;
				image{
					width: 80rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>
