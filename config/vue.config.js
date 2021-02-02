module.exports = {
    dev: {
        proxyTable: {
            '/api': {
                target: 'http://101.132.152.117:8181/',
                changeOrigin: true,
                // 路径重写： 下面的意思是重写访问路径中的  '/api' 为 '' ，如果没有重写, /api 代表 http://127.0.0.1:8090/api
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}