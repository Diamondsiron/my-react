const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        proxy('/api/',{
            target: "https://moby-exp.xbotech.com",       //连接地址
            changeOrigin: true,         //开启跨域
            secure: false,              //是否证书校验 https、http
            pathRewrite: {
                '^/api': '/'             //重写接口，如果没有重写，反向代理的名字 api/会出现在请求接口的url参数中
            }
        })
    );
    //... 可以编写多个代理接口
}   