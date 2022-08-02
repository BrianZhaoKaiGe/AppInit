import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//cookie
import VueCookies from 'vue-cookies'
//轮播图
import Carousel from '@/components/Carousel'
//分页
import Pagination from '@/components/Pagination'
//Footer
import Footer from '@/components/Footer'
//三级联动组件
import TypeNav from '@/components/TypeNav'
//引入mock数据
import '@/mock/mockServe'
//自定义插件测试
import plan from '@/plan/'
Vue.use(plan)
//表单验证插件
import veeValidate from 'vee-validate';
//中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(veeValidate)
veeValidate.Validator.localize('zh_CN',{
  messages:{
    ...zh_CN.messages,
    is:(field)=>`${field}必须密码相同`,
  },
  attributes:{
    phone:'手机号',
    code:'验证码',
    password:'密码',
    password1:'确认密码',
    agree:'协议'
  }
});


//引入elementUi 弹框
import { MessageBox } from 'element-ui';
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Footer.name,Footer)
Vue.use(VueCookies)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$cookies = VueCookies
VueCookies.config('1d')
import 'swiper/css/swiper.css'

import '../public/reset.css'
Vue.config.productionTip = false
import xmt from '@/assets/1.jpeg'
//图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading: xmt,
})

//统一引入接口
import * as API from '@/api'

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  }
}).$mount('#app')
