import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from '@/api'

export default{
  //存储数据
  state: {
    cartList:[]
  },
  //修改数据的唯一手段
    mutations: {
      GETCARTLIST(state,cartList){
        state.cartList = cartList
      }

  },
  //业务逻辑
  actions: {
     async getCartList({commit}){
        let result = await reqCartList()
        if (result.code === 200) {
          commit('GETCARTLIST',result.data)
        }
      },
      //删除购物车产品
     async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if (result.code === 200) {
          return 'ok'
        }else{
          return Promise.reject(new Error('fail'))
        }
      },
      //切换商品状态
     async updateCheckedByid({commit},{skuID,isChecked}){
        let result = await reqUpdateCheckedById(skuID,isChecked)
        if (result.code === 200) {
          return 'ok'
        }else{
          return Promise.reject(new Error('fail'))
        }
      },
      //删除全部选中的商品
      deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
        let promise =  item.isChecked==1? dispatch('deleteCartListBySkuId',item.skuId):''
          //接受promise
         PromiseAll.push(promise)
        });
        //promise.all  如果全部成功就返回成功，如果有一个失败就会返回失败
        return Promise.all(PromiseAll)
      }
  },
  getters:{
    cartList(state){
      return state.cartList[0] || {}
    },

  }

}
