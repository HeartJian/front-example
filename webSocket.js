
//====================开启websocket服务==============
const  WebSocketServer=require('ws').Server;
//入参可选一个验证函数
console.log(WebSocketServer)
const wss=new WebSocketServer({
    port:9099
});
console.log("========")

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});