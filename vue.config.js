const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);//production环境

module.exports = {

    devServer: {
        host: 'localhost',
        port: 8080,
        open: true, //配置自动启动浏览器
        proxy: {
            '/line_proxy': {  //使用"/api"来代替线上服务器地址
                target: 'http://mobile.yangkeduo.com/proxy/api/api/barrow/query', //源地址
                ws: true,// 支持跨域
                changeOrigin: true, //改变源
                pathRewrite: {
                    '^/line_proxy': '' //路径重写
                }
            },
            '/local_serve': {
                target: 'http://localhost:1688', //源地址
                ws: true,// 支持跨域
                changeOrigin: true, //改变源
                pathRewrite: {
                    '^/local_serve': '' //路径重写
                }
            }
        }
    },

}