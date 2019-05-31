<template>
    <div >
        <div v-for="(content,index) in contents" :key="index" :class="{'chat-line':true,'content-right':isNotMe(content)}" :id="`chat${index}`">
        <div :class="{'left-triangle':!isNotMe(content)}"></div>
        <div class="chat-content" >{{content.message}}</div>
        <div :class="{'right-triangle':isNotMe(content)}"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["contents"],

  methods: {
    isNotMe(content) {
      return content.talker !== "me";
    },
  }
};
</script>

<style>
.content-right{
  text-align: right;
}

.chat-content {
  border: 1px solid #409eff;
  background: #409eff;
  display: inline-block;
  line-height: 30px;
  border-radius: 5px;
  padding: 2px 10px;
  max-width: 250px;
}
.chat-line {
      margin: 20px;
}
.left-triangle {
  border-width: 8px;
  border-style: solid;
  border-color: transparent #409eff transparent transparent;
  display: inline-block;
  position: relative;
  left: 5px;
}

.right-triangle {
    border-width:  8px;
    border-style: solid;
    border-color: transparent transparent transparent #409eff;
    position: relative;
    right: 5px;
    display: inline-block;
}
</style>
