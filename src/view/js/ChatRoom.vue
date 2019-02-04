<template>
  <div class="content">
    <el-card class="b-card">
      <text-word :textArray="textArray"/>
    </el-card>
    <el-card class="b-card">
      <chat :contents="contents"></chat>
    </el-card>
  </div>
</template>
<script>
import Chat from '@/components/Chat.vue'
const textArray = [
  "1.在src目录下打开一个终端，npm run websocket",
  "2.在聊天室内输入消息"
];
const contents=[{talker:"me",message:"你好"},{talker:"other",message:"你也好"}]
export default {
  components: { Chat },
  data: function() {
    return { textArray,contents };
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>


