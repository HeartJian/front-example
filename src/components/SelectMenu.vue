<template>
  <div class="select-menu">
    <el-menu
      :default-openeds="['css']"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :default-active="defaultActive"
    >
      <el-submenu
        v-for="pathComponent in pathComponents"
        :key="pathComponent.fileName"
        :index="pathComponent.fileName"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>一些{{pathComponent.fileName}}技巧</span>
        </template>
        <el-menu-item
          @click="openUrl(pathComponent,key)"
          v-for="key in pathComponent.keys"
          :key="key"
          :index="key"
        >{{pathComponent.names[key]||key}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { Basic } from "../utils/Basic.js";

export default {
  data: function() {
    return {
      defaultActive: sessionStorage.getItem("activeMenus"),
      pathComponents: Basic.pathComponents
    };
  },
  methods: {
    openUrl(pathComponent, url) {
      let key = pathComponent.fileName + "/" + url;
      let path = sessionStorage.getItem("path");
      location.href = path
        ? location.href.replace(path, key)
        : location.href + key;
      sessionStorage.setItem("path", key);
      sessionStorage.setItem("activeMenus", url);
    }
  }
};
</script>
<style>
.select-menu {
  width: 200px;
  background-color: white;
  min-height: 100vh;
}
</style>
