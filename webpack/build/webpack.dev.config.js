var webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')


const devWebpackConfig = merge(baseWebpackConfig, {
  plugins:[
    new webpack.DefinePlugin({
       'process.env': {
           BASE_API: process.env.NODE_ENV === 'dev' ? '"api"': '""' //启动参数中获取baseApi
       }
    })],
    devServer:{
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,     // target是域名的话，需要这个参数，
          secure: false,          // 设置支持https协议的代理
        },
    }
  }
})

module.exports = devWebpackConfig