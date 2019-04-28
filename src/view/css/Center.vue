<template>
  <div class="content">
    <el-card class="b-card">
      <div v-for="m in source" :key="m" :class="`father${m}`" >
        <div :class="`child${m}`"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    data:function (){
        return {source:[1,2,3,4,5,6,7]}
    }
};
</script>

<style scoped>
.b-card{
    display: flex
}

.father1 {
  position: relative;
  background: bisque;
  width: 100px;
  height: 400px;
  display: inline-block;
}

.child1 {
  background: #DBEAF9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
}

.father2 {
   display: inline-block;
  background: grey;
  text-align: center;
  width: 100px;
  height: 400px;
}
.child2 {
  display: inline-block;
  background: #DBEAF9;
  vertical-align: middle;
  width: 50px;
  height: 50px;
}
</style>
