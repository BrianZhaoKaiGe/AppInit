import requests from './request'

import mockRequest from './mockAjax'
//三级联动请求  
export const reqCategoryList = ()=> requests({
  url:'http://39.98.123.211/api/product/getBaseCategoryList',
  method:'get'
}) 


//banner数据
export const reqGetBanner = ()=>mockRequest.get('/banner')

//获取floor数据
export const reqFloorList = ()=>mockRequest.get('/floor')

//获取搜索数据
export const reqGetSearchInfo = (data)=>requests({
  url:'http://39.98.123.211/api/list',
  method:'post',
  data:data || {}
})

//获取商品详情数据
export const reqGoodsInfo = (skuId)=>requests({
  url:`http://39.98.123.211/api/item/${skuId}`,
  method:'get',
})

//添加购物车，更新某一个产品个数
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({
  url:`http://39.98.123.211/api/cart/addToCart/${ skuId }/${ skuNum }`,
  method:'post',
})


//购物车数据
export const reqCartList = ()=>requests({
  url:'http://39.98.123.211/api/cart/cartList',
  method:'get',
})


//删除购物车数据
export const reqDeleteCartById = (skuId)=>requests({
  url:`http://39.98.123.211/api/cart/deleteCart/${skuId}`,
  method:'delete',
})



//切换商品选中状态
export const reqUpdateCheckedById = (skuID,isChecked)=>requests({
  url:`http://39.98.123.211/api/cart/checkCart/${skuID}/${isChecked}`,
  method:'get',
})


//获取验证码
export const reqGetCode = (phone)=>requests({
  url:`http://39.98.123.211/api/user/passport/sendCode/${phone}`,
  method:'get',
})



//用户注册
export const reqUserRegister = (data)=>requests({
  url:`http://39.98.123.211/api/user/passport/register`,
  method:'post',
  data
})



//用户登录
export const reqUserLogin = (data)=>requests({
  url:`http://39.98.123.211/api/user/passport/login`,
  method:'post',
  data
})


//获取用户信息
export const reqUserInfo = ()=>requests({
  url:'http://39.98.123.211/api/user/passport/auth/getUserInfo',
  method:'get',
})


//退出登录
export const reqLogout = ()=>requests({
  url:'http://39.98.123.211/api/user/passport/logout',
  method:'get',
})


//获取用户地址
export const reqAddressInfo = ()=>requests({
  url:'http://39.98.123.211/api/user/userAddress/auth/findUserAddressList',
  method:'get',
})


//获取商品清单
export const reqOrderInfo = ()=>requests({
  url:'http://39.98.123.211/api/order/auth/trade',
  method:'get',
})


//提交订单
export const reqSubmitOrder = (tradeNo,data)=>requests({
  url:`http://39.98.123.211/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
  method:'post',
  data,
})


//获取支付信息
export const reqPayInfo = (orderId)=>requests({
  url:`http://39.98.123.211/api/payment/weixin/createNative/${orderId}`,
  method:'get',
})


//获取支付订单状态
export const reqPayStatus = (orderId)=>requests({
  url:`http://39.98.123.211/api/payment/weixin/createNative/${orderId}`,
  method:'get',
})


//获取个人中心订单列表
export const reqMyOrderList = (page,limit)=>requests({
  url:`http://39.98.123.211/api/order/auth/${page}/${limit}`,
  method:'get',
})
