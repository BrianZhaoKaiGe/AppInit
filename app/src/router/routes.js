export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { show: true }
  },
  {
    path: '/detail/:skuid',
    name: 'Detail',
    component: () => import('@/views/Detail'),
    meta: { show: true }
  },
  {
    //指定params参数传递或者不传递，在占位后面加问号
    path: '/search/:keyword?',
    name: 'Search',
    component: () => import('@/views/Search'),
    meta: { show: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: { show: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register'),
    meta: { show: false }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/views/AddCartSuccess'),
    meta: { show: true }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('@/views/ShopCart'),
    meta: { show: true }
  },
  {
    path: '/trade',
    name: 'trade',
    component: () => import('@/views/Trade'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: () => import('@/views/PaySuccess'),
    meta: { show: true }
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/Center'),
    meta: { show: true },
    children: [
      {
        path: '/center',
        redirect: '/center/myorder'
      },
      {
        path: 'myorder',
        name: 'myorder',
        component: () => import('@/views/Center/myOrder'),
      },
      {
        path: 'grouporder',
        name: 'grouporder',
        component: () => import('@/views/Center/groupOrder'),
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]