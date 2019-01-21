<template>
  <div class="select-menu">
    <el-menu
      :default-openeds="['css']"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :default-active="defaultActive"
    >
      <el-submenu v-for="pathComponent in pathComponents" :key="pathComponent.fileName" :index="pathComponent.fileName">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>一些{{pathComponent.fileName}}技巧</span>
        </template>
          <el-menu-item
            @click="openUrl(pathComponent,key)"
            v-for="key in pathComponent.keys"
            v-bind:key="key"
            :index="key"
          >{{key}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import basic from "../utils/Basic.js";
import { create } from 'domain';
export default {
  data: function() {
    return { defaultActive:sessionStorage.getItem("path"),pathComponents:basic.pathComponents};
  },
  methods: {
    openUrl(pathComponent,url) {
        key=pathComponent.fileName+url
        let path=sessionStorage.getItem("path")
        location.href = path?location.href.replace(path, key):location.href + key;
        sessionStorage.setItem("path",key)
    }
  },
};
</script>
<style>
.select-menu {
  width: 200px;
  min-height: 100vh;
}
</style>
