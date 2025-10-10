<template>
	<view>
		<uv-navbar title="分享编辑" autoBack=true placeholder=true></uv-navbar>
		<plate></plate>
		<view class="fileimg">
			<fileimg title="封面图片"></fileimg>
			<fileimg title="小程序二维码"></fileimg>
		</view>
		<quotation title="原典语录"></quotation>
		<quotation title="党建语录"></quotation>
		<manifesto></manifesto>
		<bottom></bottom>
		<generate 
		:generate="generate" 
		@Close="generate=false"></generate>
	</view>
</template>

<script>
	import plate from "@/components/setShare/plate.vue"
	import fileimg from "@/components/setShare/fileimg.vue"
	import quotation from "@/components/setShare/quotation.vue"
	import manifesto from "@/components/setShare/manifesto.vue"
	import bottom from "@/components/setShare/bottom.vue"
	import generate from "@/components/setShare/generate.vue"
	export default {
		components:{plate,fileimg,quotation,manifesto,bottom,generate},
		data() {
			return {
				console:{
					log:d=>console.log(d)
				},
				generate:false,
			};
		},
		created() {
			uni.$on('button-poster',()=>this.generate=true)
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f0f0f0;
	padding-bottom: 200rpx;
}
.fileimg{
	display: flex;
	gap: 20rpx;
	margin: 20rpx 30rpx;
	justify-content: space-between;
	fileimg{
		flex: 1;
	}
}
</style>
