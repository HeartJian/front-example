// 模拟一个后台服务

const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer()


function onRes(res,fileName='test'){
    fs.readFile(`./mock/${fileName}.json`, { encoding: 'utf-8' }, function(error, data) {
        if(error) {
            console.log(fileName,error)
            return 
        }
        res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8','Cache-Control': 'no-cache,no-store' })
        res.write(data, () => {
            res.end();
        })
    })
}


server.on('request',  function (req, res) {
        const path=url.parse(req.url).pathname
        const fileName=path.replace(/\/[a-z]/g,(e)=>{e.toUpperCase();return e.replace(/\//g,'')}).replace(/[A-Z]/,e=>e.toLowerCase())
        if(fileName==="test") {
            console.log("===========后台服务接收test成功==========")
            onRes(res)
        }else{
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('server request not find');
           }
})

server.listen(4999);

console.log("后台服务4999启动")

module.exports = {
    background:'background'
}