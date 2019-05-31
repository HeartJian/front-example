<template>
  <div class="content">
    <el-card class="b-card">
      <div class="chats">
        <chat :contents="contents"></chat>
      </div>
      <el-input @change="onChange" class="input" placeholder="请输入"></el-input>
      <el-button @click="sendMessage" class="button-send">聊天</el-button>
    </el-card>
  </div>
</template>
<script>
import Chat from "@/components/Chat.vue";
import { ws, wsEmit } from "@/utils/ws";
import { setTimeout } from "timers";

const contents = [
  { talker: "me", message: "1.在src目录下打开一个终端，npm run websocket" },
  { talker: "other", message: "2.在聊天室内输入消息" }
];

export default {
  components: { Chat },
  created() {
    this.connectWs()
  },
  data: function() {
    return { contents, sendData: "" };
  },
  methods: {
    sendMessage() {
      contents.push({ talker: "me", message: this.sendData });
      wsEmit.on("send", { messageType: "chat", data: this.sendData }, this);
    },
    onChange(e) {
      this.sendData = e;
    },
    connectWs(){
    if (  !ws || ws && ws.readyState !== 1) {
      wsEmit.on("open", data => {
        contents.push(data);
        setTimeout(() => {
          const chat =document.getElementsByClassName(`chat-line`);
          document.getElementsByClassName("chats")[0].scrollTo({
            top:chat.length >0&&chat[chat.length-1].offsetTop || 0,
            behavior: "smooth"
          });
        });
      });
    }
    }
  }
};
</script>
<style scoped>
.b-card {
  height: 710px;
  width: 500px;
}

.input {
  margin: 15px 10px;
  width: 350px;
}

.button-send {
}

.chats {
  height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}

.chats::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*正常情况下滑块的样式*/
.chats::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/
.chats:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/
.chats::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/
.chats::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/
.chats::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
</style>



