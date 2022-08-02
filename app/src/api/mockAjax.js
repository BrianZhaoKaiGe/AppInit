import axios from 'axios'
//进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'


// 封装请求
const requests = axios.create({
  baseURL:'/mock',
  timeout:5000
})


//请求拦截
requests.interceptors.request.use((config)=>{

  //开启进度条
  nprogress.start();
return config
})

//响应拦截
requests.interceptors.response.use((res)=>{
  //结束进度条
  nprogress.done()

// 响应成功
return res.data
},(error)=>{
  //响应失败
  return Promise.reject(new Error('fair'))
})


export default requests