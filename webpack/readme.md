1.create folder named 'WEBPACK'
2.//全局安装
npm install -g webpack
3.npm init

https://segmentfault.com/a/1190000012536871

命令行的选项其实都可以写在配置文件webpack.config.js中，写在配置文件中更方便更强大。webpack启动时要读取配置文件，参数--config指定读取哪个配置文件，如果没有使用--config指定，会默认在根目录中找webpack.config.js或webpackfile.js这个文件,有关配置文件的命名随意定，但最好带上环境，如webpack.base|dev|prod.conf.js