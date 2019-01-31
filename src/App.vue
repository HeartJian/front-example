<template>
  <div id="app">
    <select-menu></select-menu>
    <router-view/>
  </div>
</template>

<script>
import SelectMenu from "./components/SelectMenu.vue";

export default {
  components: { SelectMenu },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4c5054;
  display: flex;
}

#app /deep/ .content {
  padding: 20px;
  color: #4c5054;
}

.b-card {
  height: 50vh;
  width: 40vw;
  min-width: 500px;
  margin: 10px;
  color: #4c5054;
  font-family: Microsoft YaHei;
  font-size: 15px;
}
</style>
