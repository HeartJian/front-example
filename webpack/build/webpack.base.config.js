var webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const HtmlWebpackPluginConfig={
  title: 'webpack-test', // html5文件中<title>部分
  template: './index.html', //如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处

}



module.exports = {
  entry: "./src/main.js",//已多次提及的唯一入口文件
  output: {
    filename: "./dist/[hash]app.js"//打包后输出文件的文件名
  },
  devServer: {
    port: 9099,
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, "../dist"), 
    open:true,
    host:'10.10.21.102',
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),new HtmlWebpackPlugin(HtmlWebpackPluginConfig), // 热刷新
    new FriendlyErrorsWebpackPlugin(),// 日志控制
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'], //扩展名为.js,.vue,.json的可以忽略，如 import App from './app'，先在当前目录中找app.js，没有再找app.vue，没找到，再找.json，如果还没找到，报错
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 别名，这是一个正则的写法，表示以vue结尾的，如import Vue from 'vue' 表示 import Vue from 'vue/dist/vue.esm.js'
      '@': path.resolve('src'),// 这也是为懒人服务的,import HelloWorld from '@/components/HelloWorld'这里的@其实就是代表src这个目录 
      '#': path.resolve('src/ui/components') //import Table from '#/table'
    }
  }

}
