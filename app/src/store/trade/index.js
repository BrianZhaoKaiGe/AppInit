import { 
  reqAddressInfo,
  reqOrderInfo,
 } from '@/api'
export default {
  //存储数据
  state: {
    address:[],
    orderInfo:{}
  },

  mutations: {
    GETUSERADDINFO(state,address){
      state.address = address
    },
    GETORDERINFO(state,orderInfo){
      state.orderInfo = orderInfo
    }
  },
  //业务逻辑
  actions: {
    //获取地址
   async reqAddressInfo({commit}){
      let result = await reqAddressInfo()
      if (result.code === 200) {
        commit('GETUSERADDINFO',result.data)
      }
    },
    //获取商品清单
    async reqOrderInfo({commit}){
      let result = await reqOrderInfo()
      if (result.code === 200) {
        commit('GETORDERINFO',result.data)
      }
    }
  },
  getters: {


  }

}
