
//====================开启websocket服务==============
const  WebSocketServer=require('ws').Server;

//====================协议=====================
//data:{messageType:""}
const login=(ws)=>{ws.send("登录成功",err)}
const logout=(ws)=>{ws.send("退出成功",err)}
const chat=(ws)=>{ws.send("我不太懂你在说啥",err)}
const err=(err) => {
    if (err) {
        console.log(`[SERVER] error: ${err}`);
    }
}
const protocol={login,logout,chat,err}


//入参可选一个验证函数
const wss=new WebSocketServer({
    port:3000,
    verifyClient:()=>{return true}
});

console.log("========websocket成功启动========")

wss.on('connection', function (ws) {
    //实时消息
    ws.on('message', function (message) {
        message=JSON.parse(message);
        (protocol[message.messageType])(ws);
    })
    //关闭服务
    ws.on('close', function () {
        console.log(`[SERVER] Closed: 客服端关闭`);
    })
});



//var ws = new WebSocket('ws://localhost:3000/test');
//ws.onmessage=(data)=>{console.log(data)}
//ws.send(JSON.stringify({messageType:"login"}))