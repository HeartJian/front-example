<template>
  <div>
    <div class="header" v-if="text">
      <div class="bar"></div>
      <a>{{text}}</a>
    </div>
    <div class="header" v-for="(a,index) in textArray" :key="index">
        <span class="bar"></span>
        <a>{{a}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "textArray"]
};
</script>

<style>
.bar {
  width: 5px;
  height: inherit;
  background-color: #409eff;
  margin-right: 6px;
}
.header {
  display: flex;
  margin: 10px 0;
}
</style>
