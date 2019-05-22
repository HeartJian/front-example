// 代理转发服务
const fs = require('fs')
const http = require('http')
const url = require('url')
const background = require('./background')
const server = http.createServer()


function onRes(res, fileName = 'test') {
    fs.readFile(`./mock/${fileName}.json`, { encoding: 'utf-8' }, function (error, data) {
        if (error) {
            console.log(error)
            return
        }
        res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8', 'Cache-Control': 'no-cache,no-store' })
        res.write(data, () => {
            res.end();
        })
    })
}

// 请求代理=》后台 =》非200的请求转发到静态代理数据
server.on('request', function (req, res) {
    try {
        // 请求数据存储
        const item = ''
        // 返回数据存储
        const itemRes=''

        req.on('data', (chunk) => item += chunk)
        // 请求后台
        const path = url.parse(req.url).pathname
        const option = {
            hostname: '127.0.0.1',
            port: 4999,
            path,
            method: req.method,
            headers: req.headers
        }

        req.on('end', () => {
            const reqBack = http.request(option, (resBack) => {
                if (resBack.statusCode !== 404) {

                    res.writeHead(resBack.statusCode,resBack.headers)
                    resBack.on("data", (chunk) => { res.write(chunk) })
                    resBack.on("end", res.end)
                } else {
                    let fileName = path.replace(/\/[a-z]/g, (e) => { e.toUpperCase(); return e.replace(/\//g, '') }).replace(/[A-Z]/, e => e.toLowerCase())
                    // url为空时直接取test值
                    if (!fileName || "\/") {
                        fileName = 'test'
                    }
                    onRes(res, fileName)
                }

            })

            reqBack.on('error', function (e) {
                console.log('problem with request: ' + e.message);
            });
            reqBack.end()
        })



    } catch (error) {
        console.log(error)
        // onRes(res)
    }

})

server.listen(5000);

console.log("代理服务5000启动")

module.exports = {
    proxy: 5000
}