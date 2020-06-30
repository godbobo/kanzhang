<template>
	<view>
		<view class="top-safe-area navigator-wrap">
			<month-view></month-view>
			<week-view></week-view>
			<view class="dragger-line"></view>
		</view>

		<!-- 每日小计 -->
		<view class="row justify-between padding items-baseline">
			<view class="text-bold date-title">2月10日</view>
			<view class="row u-font-lg">
				<view>收入：</view>
				<view class="text-price">20</view>
				<view class="margin-left">支出：</view>
				<view class="text-price">20</view>
			</view>
		</view>

		<!-- 固定收支模块 -->
		<u-card title="固定收支" thumb="/static/img/gudingshouzhi.png">
			<view class="" slot="body">
				
			</view>
			<view class="" slot="foot">
				<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
			</view>
		</u-card>
		
		<u-card title="收支" sub-title="结余:-30" thumb="/static/img/shouzhi.png">
			<view class="" slot="body">
				
			</view>
			<view class="" slot="foot">
				<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
			</view>
		</u-card>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			// console.log('fsfds')
			// plus.navigator.setStatusBarStyle('dark')
			// #endif
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.navigator-wrap {
		background-color: #FFFFFF;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 10px;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;

		.dragger-line {
			background-color: #dddddd;
			width: 100rpx;
			height: 10px;
			margin: 10px auto 0;
			border-radius: 5px;
		}
	}

	.date-title {
		font-size: 70rpx;
	}
</style>
