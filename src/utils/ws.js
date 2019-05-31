import Emitter from "@/utils/Emitter";

let ws;
const wsEmit = new Emitter()

wsEmit.bind("open", (onData) => {
    ws = new WebSocket("ws://localhost:3000");
    wsEmit.on("send", { messageType: 'login' })
    ws.onmessage = function (e) {
        if (ws && ws.readyState === 1) {
            const data = JSON.parse(e.data) && JSON.parse(e.data).data || '';
            if (data && data !== "ping") {
                onData({ talker: "other", message: data })
            }
        } else {
            readyState=0
        }
    }
})

wsEmit.bind("send", (data, self) => {
    if (ws && ws.readyState === 1) {
        ws.send(JSON.stringify(data))
    } else {
        self && self.$message('ws服务未开启,正在尝试重新连接');
        self && self.connectWs();
        let timer = setInterval(() => { if (ws.readyState === 1) { clearInterval(timer); ws.send(JSON.stringify(data)) } }, 200)
    }
})

export { ws, wsEmit }
