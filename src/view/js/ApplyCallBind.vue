<template>
  <div class="content">
    <el-card class="b-card">
      <text-word :header="h2" :contents="textArray1"/>
    </el-card>
    <el-card class="b-card">
      <text-word :header="h3" :contents="textArray2"/>
    </el-card>
  </div>
</template>

<script>
const h2 = `1.一个很绕的例子`,
  text2 = `function fn1(){
   console.log(1);
}
function fn2(){
    console.log(2);
}

fn1.call(fn2);     //输出 1
 
fn1.call.call(fn2);  //输出 2
`,
  h3 = `2.实现一个call函数`,
  text3 = `Function.prototype.es3Call = function (context) {
   var content = context || window;
   content.fn = this;
   var args = [];
   // arguments是类数组对象，遍历之前需要保存长度，过滤出第一个传参
   for (var i = 1, len = arguments.length ; i < len; i++) {
      // 避免object之类传入
      args.push('arguments[' + i + ']');
    }
   var result = eval('content.fn('+args+')');
   delete content.fn;
   return result;
 }`,
  text4 = `如下例子,content.fn在执行时将this指向为传入的方法，
当第二次call调用时就转变了执行方法`,
  textArray1 = [text2,text4],
  textArray2 = [text3];

export default {
  data() {
    return {
      h2,
      h3,
      textArray1,
      textArray2
    };
  }
};
</script>

<style>
</style>
