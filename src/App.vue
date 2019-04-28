<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
//import SelectMenu from "./components/SelectMenu.vue";
 //   <select-menu></select-menu>
export default {
 // components: { SelectMenu },
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
#app pre {
  color: #4c5054;
  font-family: Microsoft YaHei;
  font-size: 15px;
  margin: 0
}

.b-card {
  min-height: 50vh;
  min-width: 500px;
  margin: 20px 10px;
  color: #4c5054;
  font-family: Microsoft YaHei;
  font-size: 15px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  color: #4c5054;
  align-content: space-around
}
</style>
