module.exports = {
    publicPath: './',
    lintOnSave: false,
    productionSourceMap:false,
    devServer: {
        port: 9999,  //端口号
        open: true,   //自动打开
        proxy: {
            "/api": {
                target: "http://39.98.123.211",// 真正要请求的路径
                changeOrigin: true,
                //上面的参数列表中有一个changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求
                ws: true,
                //是否代理websockets
    
                // pathRewrite: {
                //     "^/api": "",
                // },
                //重写路径  需要设置重写的话，要在后面的调用接口前加上/api 来代替target
            }
        }
    },

}