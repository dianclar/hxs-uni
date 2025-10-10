<template><div class="dad">
    <view class="title">
    	<text>{{title}}</text>
    	<text class="red"> *</text>
    </view>
	<view class="from">
		<view>【摘自】</view>
		<view class="right">
			<uv-input v-model="form.title"
			:placeholder="title=='原典语录'?'请输入原典摘自':'请输入党建语录摘自'"
			placeholderClass="placeholder"
			border="none"></uv-input>
			<view class="input">
				<text>0</text>
				<text class="inputinfo">/10</text>
			</view>
		</view>
	</view>
	<view class="info">
		<view class="infotitle">【内容】</view>
		<view class="right">
			<uv-textarea v-model="form.info"
			:placeholder="title=='原典语录'?'请输入原典摘自':'请输入党建语录摘自'"
			placeholderClass="placeholder"
			height="200rpx"
			border="none"
			:customStyle="{
				background: '#F4F6F8',
				borderRadius: '10rpx',
				padding: '30rpx 24rpx'
			}"></uv-textarea>
			<view class="input">
				<text>0</text>
				<text class="inputinfo">/50</text>
			</view>
		</view>
	</view>
</div></template>

<script>

export default {
	props:['title'],
    data() {
        return {
			form:{
				title:'',
				info:''
			}
			
        }
    },
    methods:{
        
    },
	mounted() {
		uni.$on('button-poster',()=>uni.$emit('submit',{
			title:this.title,
			data:this.form
		}))
	}
}
</script>

<style lang="scss" scoped>
.dad{
	padding: 30rpx;
	margin: 20rpx 30rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	.title{
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #111111;
		line-height: 30rpx;
		margin-bottom: 30rpx;
		.red{
			color: #D02835;
		}
	}
	.from{
		display: flex;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
		line-height: 30rpx;
		margin: 20rpx 0;
		.right{
			flex: 1;
			width: 0;
			background: #F4F6F8;
			border-radius: 10rpx;
			padding: 30rpx 24rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.placeholder{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #92969E;
				line-height: 46rpx;
			}
			.input{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #0D7CFF;
				line-height: 30rpx;
				.inputinfo{
					color: #92969E;
				}
			}
		}
	}
	.info{
		display: flex;
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
		line-height: 30rpx;
		margin: 20rpx 0;
		.infotitle{
			position: relative;
			top: 30rpx;
		}
		.right{
			flex: 1;
			width: 0;
			position: relative;
			.placeholder{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #92969E;
				line-height: 46rpx;
			}
			.input{
				position: absolute;
				right: 24rpx;
				bottom: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #0D7CFF;
				line-height: 30rpx;
				.inputinfo{
					color: #92969E;
				}
			}
		}
	}
}
</style>
