import { reqGoodsInfo,reqAddOrUpdateShopCart } from '@/api'

//生成临时游客id
import { getUUID } from '@/utils/uuid_token'
export default {
  //存储数据
  state: {
    goodsInfo:{},
    uuid_token:getUUID()
  },
  //修改数据的唯一手段
  mutations: {
    GETGOODINFO(state,goodsInfo){
      state.goodsInfo = goodsInfo
    }
  },
  //业务逻辑
  actions: {
    //获取商品详情
  async getGoodInfo({commit},skuId){
       let result =  await reqGoodsInfo(skuId)

       if (result.code === 200) {
         commit('GETGOODINFO',result.data)
       }
    },
    //添加购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result =  await reqAddOrUpdateShopCart(skuId,skuNum)
      if (result.code === 200) {
        return 'ok'
      }else{
        return Promise.reject(new Error('fail'))
      }
      }

  },
  getters:{
    categoryView(state){
      return state.goodsInfo.categoryView || {}
    },
    skuInfo(state){
      return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
      return state.goodsInfo.spuSaleAttrList || []
    },
  }

}
