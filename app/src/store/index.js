import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import home from './home/'
import search from './search'
import detail from './detail'
import cartList from './shopcart'
import user from './user'
import trade from './trade'
export default new Vuex.Store({
  //存储数据
  state: {
  },
  //修改数据的唯一手段
  mutations: {

  },
  //业务逻辑
  actions: {

  },
  modules: {
    home,
    search,
    detail,
    cartList,
    user,
    trade
  }
})
