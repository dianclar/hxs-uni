<template><div>
    <uv-navbar title="新建任务" autoBack=true placeholder=true></uv-navbar>
	<!-- 任务标题 -->
	<view class="diary">
		<view class="diarytitle">
			<image src="\static\clockin\Icon_JL_biaoshi.png" mode=""></image>
			<view>任务标题 <text style="color: #FA4141;">*</text></view>
		</view>
		<view class="diaryinfo">
			<textarea maxlength="10000" 
			placeholder="请输入任务内容"
			placeholder-class="diaryinfoplac"
			class="small"></textarea>
			<view class="diaryinfopo"><text style="color: #0D7CFF;">0</text>/10000</view>
		</view>
	</view>
	<!-- 任务内容 -->
	<view class="diary">
		<view class="diarytitle">
			<image src="\static\clockin\Icon_JL_biaoshi.png" mode=""></image>
			<view>任务内容</view>
		</view>
		<view class="diaryinfo">
			<textarea maxlength="10000" 
			placeholder="请输入任务内容"
			placeholder-class="diaryinfoplac"></textarea>
			<view class="diaryinfopo"><text style="color: #0D7CFF;">0</text>/10000</view>
		</view>
	</view>
	<!-- 时间 -->
	<view class="timeoption">
		<view class="timeoptioni">
			<view>任务开始时间 <text style="color: #FA4141;">*</text></view>
			<view class="timeoptioniright">
				<view>当前时间</view>
				<uv-icon name="arrow-right"
				size="22rpx"></uv-icon>
			</view>
		</view>
		<view class="hr">
			
		</view>
		<view class="timeoptioni">
			<view>任务结束时间 <text style="color: #FA4141;">*</text></view>
			<view class="timeoptioniright">
				<view>23:59:59</view>
				<uv-icon name="arrow-right"
				size="22rpx"></uv-icon>
			</view>
		</view>
	</view>
	<!-- 底部按钮 -->
	<bottombutton title="新建任务" @buttonclick=""></bottombutton>
</div></template>

<script>
import bottombutton from "@/components/bottombutton.vue"
export default {
	components:{bottombutton},
    data() {
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" >
page{
	background-color: #f0f0f0;
	padding-bottom: 200rpx;
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
		.small{
			height: 180rpx;
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
}
.timeoption{
	margin: 20rpx 30rpx;
	padding: 40rpx 30rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	.hr{
		height: 2rpx;
		background: #DBE1E6;
		border-radius: 1rpx;
		opacity: 0.5;
		margin: 40rpx 0;
	}
	.timeoptioni{
		display: flex;
		justify-content: space-between;
		.timeoptioniright{
			display: flex;
			gap: 17rpx;
			font-family: PingFang SC;
			font-weight: 500;
			font-size: 28rpx;
			color: #9BA2AF;
			line-height: 28rpx;
		}
	}
}
</style>
