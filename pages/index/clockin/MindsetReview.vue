<template>
	<view>
		<!-- 标题 -->
		<uv-navbar :title="title" autoBack=true></uv-navbar>
		<uv-status-bar></uv-status-bar>
		<view>头部占位</view>
		<view>头部占位</view>
		<!-- 日记 -->
		<view class="diary">
			<view class="diarytitle">
				<image src="\static\clockin\Icon_JL_biaoshi.png" mode=""></image>
				<view>{{title=='心性复盘'?'复盘日记':'练操心得'}}</view>
			</view>
			<view class="diaryinfo">
				<textarea maxlength="10000" 
				placeholder="详诉您的问题情况与不足，复盘反思过程中吸取经验不断提升成就自我~"
				placeholder-class="diaryinfoplac"></textarea>
				<view class="diaryinfopo"><text style="color: #0D7CFF;">0</text>/10000</view>
			</view>
			<view class="diaryfile">
				<view class="diaryfileitem">
					<uv-icon size="39rpx"
					name="/static/clockin/Icon_TY_yuyin.png"></uv-icon>
					<view>语音</view>
				</view>
				<view class="diaryfileitem">
					<uv-icon size="39rpx"
					name="/static/clockin/Icon_TY_shipin.png"></uv-icon>
					<view>视频</view>
				</view>
				<view class="diaryfileitem">
					<uv-icon size="39rpx"
					name="/static/clockin/Icon_TY_xiangce.png"></uv-icon>
					<view>图片</view>
				</view>
			</view>
		</view>
		<!-- 说明 -->
		<view class="info">
			<view>1.视频文件过大时压缩时间较长，请耐心等待；</view>
			<view>2.若出现黑屏，请清理手机内存；</view>
			<view>3.建议您调整手机拍摄清晰度选择720p及以下的规格进行拍摄；</view>
			<view>{{a}}</view>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottombutton">
				发表日记
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:'4.最多添加10条语音，每条<600s；图片+视频格式最多添加9条。',
				title:'心性复盘'
			};
		},
		onLoad(d) {
			this.title = d.title
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f0f0f0;
}
.diary{
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	margin: 20rpx 30rpx;
	padding: 30rpx;
	.diarytitle{
		display: flex;
		gap: 10rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 30rpx;
		image{
			width: 36rpx;
			height: 36rpx;
		}
	}
	.diaryinfo{
		margin-top: 26rpx;
		position: relative;
		textarea{
			padding: 24rpx;
			width: auto;
			height: 500rpx;
			background: #F4F6F8;
			border-radius: 10rpx;
			.diaryinfoplac{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #92969E;
				line-height: 46rpx;
			}
		}
		.diaryinfopo{
			position: absolute;
			bottom: 20rpx;
			right: 20rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 24rpx;
			color: #92969E;
			line-height: 30rpx;
		}
	}
	.diaryfile{
		margin-top: 50rpx;
		display: flex;
		justify-content: space-around;
		.diaryfileitem{
			display: flex;
			flex-direction:  column;
			gap: 10rpx;
			align-items: center;
		}
	}
}
.info{
	margin: 39rpx;
	font-family: PingFang SC;
	font-weight: 500;
	font-size: 26rpx;
	color: #92969E;
	line-height: 46rpx;
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
