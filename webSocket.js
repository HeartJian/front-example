
//====================开启websocket服务==============
const  WebSocketServer=require('ws').Server;

//====================协议=====================
//data:{messageType:""}
const messageTypes=["login","chat","ping"]
const login=(ws)=>{console.log("HELLO");ws.send(JSON.stringify({messageType:messageTypes[0],data:"登录成功"}),err)}
const chat=(ws,data)=>{ws.send(JSON.stringify({messageType:messageTypes[1],data:`后台收到${data||''}`}),err)}
const protocol={login,chat}
const err=(err) => {
    if (err) {
        console.log(`[SERVER] error: ${err}`);
    }
}

//入参可选一个验证函数
const wss=new WebSocketServer({
    port:3000,
    verifyClient:()=>{return true}
});

console.log("========websocket成功启动========")

wss.on('connection', function (ws) {
    //实时消息
    console.log(`[SERVER] Open: 客服端启动`);
    ws.on('message', function (message) {
        message=JSON.parse(message);
        if( protocol[message.messageType] )
        (protocol[message.messageType])(ws,message.data);
    })
    //关闭服务
    ws.on('close', function () {
        console.log(`[SERVER] Closed: 客服端关闭`);
        clearInterval(timer)
    })
    let timer=setInterval(()=>{ws.send(JSON.stringify({messageType:messageTypes[2],data:`ping`}))},10000)
});



//var ws = new WebSocket('ws://localhost:3000/test');
//ws.onmessage=(data)=>{console.log(data)}
//ws.send(JSON.stringify({messageType:"login"}))