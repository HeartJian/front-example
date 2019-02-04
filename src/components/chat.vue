<template>
    <div class="chat">
        <div v-for="(content,index) in contents" :key="index" class="chat-line">
        <div :class="{'left-triangle':!isLeft(content),'right-triangle':isLeft(content)}"></div>
        <div class="chat-content" :style="{float:fAttribute(content)}">{{content.message}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["contents"],

  methods: {
    isLeft(content) {
      return content.talker !== "me";
    },
    fAttribute(content) {
        console.log(this.isLeft(content) )
      return this.isLeft(content) ?  "right":"";
    }
  }
};
</script>

<style>
.chat {
}
.chat-content {
  border: 1px solid #409eff;
  background: #409eff;
  max-width: 70%;
  display: inline-block;
  line-height: 30px;
  border-radius: 5px;
  padding: 2px 10px;
}
.chat-line {
}
.left-triangle {
  border-width: 6px;
  border-style: solid;
  border-color: #409eff #409eff transparent transparent;
  display: inline-block;
  position: relative;
  left: 5px;
  top: -7px;
}

.right-triangle {
  float: right;
  top: 10px;
  position: relative;
  border-width: 6px;
  border-style: solid;
  border-color: #409eff #409eff transparent transparent;
  display: inline-block;
  transform: rotateY(180deg);
}
</style>
