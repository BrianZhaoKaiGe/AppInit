import { reqGetSearchInfo } from '@/api'

export default{
  //存储数据
  state: {
    searchList:{}
  },
  //修改数据的唯一手段
  mutations: {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
  },
  //业务逻辑
  actions: {
    //获取搜索数据
    async getSearchList({commit},data){
      let result = await reqGetSearchInfo(data)
      if (result.code === 200) {
        commit('GETSEARCHLIST',result.data)
      }
    }
  },
  getters:{
    goodsList(state){
      return state.searchList.goodsList || []
    },
    trademarkList(state){
      return state.searchList.trademarkList || []
    },
    attrsList(state){
      return state.searchList.attrsList || []
    },

  }

}
