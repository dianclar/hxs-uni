<template>
	<view>
		<uv-navbar title="创建打卡" autoBack=true placeholder=true></uv-navbar>
		<view class="clockinform">
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						打卡封面 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformitemimg">
						<view class="clockinformitemimgfile">
							<uv-upload>
								<view class="clockinformitemimgfiledata">
									<uv-icon name="/static/mine/Icon_SH_tupianshangchuan.png"
									width="52rpx" height="52rpx"></uv-icon>
								</view>
							</uv-upload>
							<uv-icon name="arrow-right" size="22rpx"></uv-icon>
						</view>
						<view>推荐尺寸：750*530</view>
					</view>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						打卡标题 <text style="color: #FA4141;">*</text>
					</view>
					<uv-input placeholder="请输入标题"
					placeholderStyle="
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 28rpx;
					color: #9BA2AF;
					line-height: 28rpx;"
					inputAlign="right"
					border="none"></uv-input>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						打卡类型 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformitemoption">
						<view>请选择</view>
						<uv-icon name="arrow-right" size="22rpx"></uv-icon>
					</view>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						开始时间 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformitemoption">
						<view>请选择开始日期</view>
						<uv-icon name="arrow-right" size="22rpx"></uv-icon>
					</view>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						结束时间 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformitemoption">
						<view>请选择</view>
						<uv-icon name="arrow-right" size="22rpx"></uv-icon>
					</view>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						打卡天数 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformiteminput">
						<uv-input placeholder="请输入需打卡多少天"
						placeholderStyle="
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 28rpx;
						color: #9BA2AF;
						line-height: 28rpx;"
						inputAlign="right"
						border="none"
						type="number"></uv-input>
						<view>天</view>
					</view>
				</view>
				<view class="clockinformihr">
					
				</view>
			</view>
			<view class="clockinformi">
				<view class="clockinformitem">
					<view class="clockinformitemlable">
						打卡人数上限 <text style="color: #FA4141;">*</text>
					</view>
					<view class="clockinformiteminput">
						<uv-input v-model="a"
						placeholderStyle="
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 28rpx;
						color: #9BA2AF;
						line-height: 28rpx;"
						inputAlign="right"
						border="none"
						type="number"></uv-input>
						<view>人</view>
					</view>
				</view>
				<!-- 底部 -->
				<view class="bottom">
					<view class="bottombutton" @click="opennewclockin">
						创建
					</view>
					<uv-safe-bottom></uv-safe-bottom>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:999
			};
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f0f0f0;
}
.clockinform{
	margin: 20rpx 30rpx;
	padding: 30rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(169,169,169,0.2);
	border-radius: 16rpx;
	.clockinformi{
		.clockinformitem{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.clockinformitemlable{
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 30rpx;
				color: #111111;
				line-height: 30rpx;
			}
			.clockinformitemimg{
				display: flex;
				flex-direction: column;
				gap: 18rpx;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #92969E;
				line-height: 30rpx;
				.clockinformitemimgfile{
					display: flex;
					align-items: center;
					gap: 24rpx;
					.clockinformitemimgfiledata{
						width: 227rpx;
						height: 161rpx;
						background: #EDF0F2;
						border-radius: 10rpx;
						border: 2px dashed #A2A6A8;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
			.clockinformitemoption{
				display: flex;
				gap: 16rpx;
				justify-content: flex-end;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #9BA2AF;
				line-height: 28rpx;
			}
			.clockinformiteminput{
				display: flex;
				gap: 16rpx;
				align-items: center;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 28rpx;
				color: #111111;
				line-height: 28rpx;
			}
		}
		.clockinformihr{
			margin: 39rpx 0;
			height: 2rpx;
			background: #DBE1E6;
			border-radius: 1rpx;
			opacity: 0.5;
		}
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
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
