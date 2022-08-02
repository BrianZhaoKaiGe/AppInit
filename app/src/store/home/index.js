import { reqCategoryList,reqGetBanner,reqFloorList } from '@/api'

export default {
  //存储数据
  state: {
    categoryList: [],
    bannerList:[],
    floorList:[]
  },
  //修改数据的唯一手段
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList
    },
    GETBANNER(state,bannerList){
      state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
      state.floorList = floorList
    },
  },
  //业务逻辑
  actions: {
    //商品分类
    async categoryList({ commit }) {
      let result = await reqCategoryList()
      // console.log(result);
      // if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
      // }
    },
    //轮播图
    async reqGetBanner({ commit }){
      let result = await reqGetBanner()
      // console.log('ssss',result);
      if (result.code === 200) {
        commit('GETBANNER',result.data)
      }
    },
    //获取floor数据
    async getFloorList({ commit }){
      let result = await reqFloorList()
      if (result.code === 200) {
        commit('GETFLOORLIST',result.data)
      }
    }

  },

}
