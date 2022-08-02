import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './routes'
import store from '@/store'
Vue.use(VueRouter)

const routes = route
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})

//前置全局守卫
router.beforeEach( async (to, from, next) => {
  let token = store.state.user.token
  //用户信息
  let names = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/login') {
      next('/home')
    } else {

      if (names) {
        next()
      } else {
        //没有用户信息
        try {
          await store.dispatch('reqUserInfo')
          next()
        } catch (error) {
          //token失效
         await store.dispatch('userLogout')
         next('/login')
        }
      }
      
    }
  } else {
    //未登录
    if (to.path.indexOf('/trade') !== -1 || to.path.indexOf('/pay') !== -1 || to.path.indexOf('/center') !== -1) {
      next(`/login?redirect=${to.path}`)
    }else{
      next()
    }
  }

})

export default router
