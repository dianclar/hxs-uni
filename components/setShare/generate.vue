<template><div>
    <uv-overlay :show="generate">
	<view class="dad">
		<uv-navbar title="分享编辑" autoBack=true placeholder=true></uv-navbar>
		<view class="main" @click="$emit('Close')">
			<image :src="poster" class="poster" @tap.stop></image>
		</view>
		<view class="bottom">
			
		</view>
	</view>
	</uv-overlay>
	<poster1 
	v-show="false" 
	@poster="d=>poster=d"></poster1>
</div></template>

<script>
import poster1 from "@/components/poster/poster1.vue"
export default {
	components:{poster1},
	props:['generate'],
    data() {
        return {
			console:{
				log:d=>console.log(d)
			},
			poster:null
        }
    },
    methods:{
        
    },
}
</script>

<style lang="scss" scoped>
.dad{
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.main{
		flex: 1;
		height: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.a{
			width: 500rpx;
			height: 888rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
		}
	}
	.bottom{
		height: 356rpx;
		background: #FFFFFF;
		border-radius: 28rpx 28rpx 0rpx 0rpx;
	}
}
.poster{
	height: 880rpx;
	width: 500rpx;
	background-color: #fff;
	border-radius: 20rpx;
}
</style>
