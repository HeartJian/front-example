<template>
  <div class="content">
    <el-card class="b-card">
      <text-word :textArray="textArray"/>
    </el-card>
    <el-card class="b-card"></el-card>
  </div>
</template>
<script>
const textArray = [
  "1.在src目录下打开一个终端，npm run websocket",
  "2.在聊天室内输入消息"
];
export default {
  data: function() {
    return { textArray };
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


