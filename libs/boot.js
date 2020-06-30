import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

// 设置项目请求地址
// uni.getStorage({
// 	key: 'vuexUrl',
// 	success: ({data}) => {
// 		store.commit('setUrl', data)
// 	}
// })

// // 设置请求验证信息
// uni.getStorage({
// 	key: 'vuexToken',
// 	success: ({data}) => {
// 		store.commit('setVuexToken', data)
// 	}
// })