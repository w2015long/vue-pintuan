const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);//production环境
console.log(IS_PROD);
module.exports = {

    devServer: {
        host: 'localhost',
        port: 8080,
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
        proxy: {
            '/api': {  //使用"/api"来代替线上服务器地址
                target: 'http://mobile.yangkeduo.com/proxy/api/api/barrow/query', //源地址
                ws: true,// 支持跨域
                changeOrigin: true, //改变源
                pathRewrite: {
                    '^/api': '' //路径重写
                }
            },
            '/local_api': {  //使用"/api"来代替线上服务器地址
                target: 'http://localhost:1688', //源地址
                ws: true,// 支持跨域
                changeOrigin: true, //改变源
                pathRewrite: {
                    '^/local_api': '' //路径重写
                }
            }
        }
    },

}