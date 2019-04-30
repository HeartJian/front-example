const fs = require('fs')
const http = require('http')

const server = http.createServer()
server.on('request',  function (req, res) {
    try {
        req.on('data', function (chunk) {
            console.log('parsed', chunk)
        })
        fs.readFile('./mock/test.json', { encoding: 'utf-8' }, function(error, data) {
            res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' })
            res.write(data, () => {
                res.end();
            })
        })

    } catch (error) {
        console.log(error)
    }

})

server.listen(5000);



module.exports = {
    a: 'a'
}