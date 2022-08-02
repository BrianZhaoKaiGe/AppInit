import { 
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout } from '@/api'
import $cookies from 'vue-cookies'
export default {
  //存储数据
  state: {
    code: '',
    token:$cookies.get('token'),
    userInfo:{}
  },

  mutations: {
    GETCODE(state, code) {
      state.code = code
    },
    USERLOGIN(state, token) {
      state.token = token
    },
    GETUSERINFO(state,userInfo){
      state.userInfo = userInfo
    },
    CLEAR(state){
      state.token='',
      state.userInfo = {}
      $cookies.remove('token')
    }
  },
  //业务逻辑
  actions: {
    //获取验证码
    async getCode({ commit }, phone) {
      let result = await reqGetCode(phone)
      if (result.code === 200) {
        commit('GETCODE', result.data)
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }

    },
    //用户注册
    async reqUserRegisters({ commit }, data) {
      let result = await reqUserRegister(data)
      if (result.code === 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }

    },
    //用户登录
    async reqUserLogin({ commit }, data) {
      let result = await reqUserLogin(data)
      if (result.code === 200) {
        commit('USERLOGIN',result.data.token)
        //持久化token
        $cookies.set('token',result.data.token) 
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }

    },
    //获取用户信息
    async reqUserInfo({ commit }) {
      let result = await reqUserInfo()
      if (result.code === 200) {
        commit('GETUSERINFO',result.data)
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    //退出登录
    async userLogout({ commit }) {
      let result = await reqLogout()
      console.log(result);
      if (result.code === 200) {
        commit('CLEAR')
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    }
  },
  getters: {


  }

}
