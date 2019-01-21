<template>
  <div class="select-menu">
    <el-menu
      :default-openeds="['1']"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :default-active="defaultActive"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>一些css技巧</span>
        </template>
        <el-menu-item-group >
          <el-menu-item
            @click="openUrl(key)"
            v-for="key in keys"
            v-bind:key="key"
            :index="key"
          >{{key}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import basic from "../utils/Basic.js";
import { create } from 'domain';
export default {
  data: function() {
    return { keys: basic.keys,defaultActive:sessionStorage.getItem("path") };
  },
  methods: {
    openUrl(key) {
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
