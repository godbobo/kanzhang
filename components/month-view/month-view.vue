<template>
	<view class="month-wrap">
		<view v-for="(day, dayIndex) in dayList" :key="dayIndex" class="day"></view>
	</view>
</template>

<script>
	export default {
		
		name: 'MonthView',
		
		data() {
			return {
				dayList: []
			}
		},
		
		mounted() {
			this.dayList = new Array(30)
		}
		
	}
</script>

<style lang="scss" scoped>
	
	.month-wrap {
		display: grid;
		grid-template-columns: repeat(15, 1fr);
		grid-template-rows: 20px 20px;
		grid-column-gap: 5px;
		grid-row-gap: 5px;
		margin-top: 10px;
		
		.day {
			height: 20px;
			width: 20px;
			background-color: #EBEDF0;
		}
	}
	
</style>
