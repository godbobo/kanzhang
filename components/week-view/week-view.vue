<template>
	<view class="week-wrap">
		<view v-for="(day, dayIndex) in weekDayList" :key="dayIndex" class="nav-day">
			<view :class="day.enabled ? 'text-black' : 'text-gray'">{{ day.text }}</view>
			<view v-if="day.enabled" class="status-dot"></view>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	import weekday from 'dayjs/plugin/weekday'
	
	dayjs.extend(weekday)
	
	export default {
		
		name: 'WeekView',
		
		data() {
			return {
				weekDayList: []
			};
		},
		
		mounted() {
			const now = dayjs()
			let weekDay = dayjs().weekday(0)
			for (let i = 0; i < 7; i++) {
				this.weekDayList.push({
					text: weekDay.format('ddd'),
					enabled: now.isAfter(weekDay, 'day') || now.isSame(weekDay, 'day')
				})
				weekDay = weekDay.add(1, 'day')
			}
			console.log(this.weekDayList)
		}
	}
</script>

<style lang="scss">
	.week-wrap {
		margin-top: 10px;
		display: flex;
		
		.nav-day {
			flex: 1;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.status-dot {
				background-color: red;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				margin-top: 5px;
			}
		}
	}
</style>
