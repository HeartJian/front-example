<template>
  <div>
    <div class="text-word-content" v-if="header">
      <div class="bar"></div>
      <a class="text-word-header">{{header}}</a>
    </div>
    <div v-if="contents" class="text-word-content" v-for="(content,index) in contents" :key="index">
        <span class="bar"></span>
        <a ><pre v-html="content">{{content}}</pre></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "contents"]
};
</script>

<style>
.text-word-header {
  font-weight: 600;
}
.text-word-content .bar {
  width: 5px;
  height: inherit;
  background-color: #409eff;
  margin-right: 6px;
}
.text-word-content > a {
  max-width: 95%;
  margin: 0;
}
.text-word-content {
  display: flex;
  margin: 10px 0;
}
</style>
