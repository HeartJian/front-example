<template>
  <div class="content">
    <el-card class="b-card">
         <text-word :header="text" :contents="textArray"/>
    </el-card>
    <el-card class="b-card">
         <text-word :header="text2" :contents="textArray1"/>
    </el-card>
	  <el-card class="b-card">
         <text-word :header="text4" :contents="textArray2"/>
    </el-card>
  </div>
</template>

<script>
const text = `如何让回调变得更加优雅？`;
const text1 = `来看如下这段异步代码：
const asynchronous=()=>{
  setTimeout(()=>{
    	()=>{
      		()=>{
        	console.log('像不像龟派气功')
      		}
    	}
    },4000)
};

asynchronous()
`;
const text2 = `1.用promise修改之后`;
const text3 = `const asynchronous=(resolve)=>{
	setTimeout(resolve,4000)
}

new Promise(asynchronous)
  	.then(()=>{})
  	.then(()=>{})
  	.then(()=>{console.log("不像龟派气功")})
`;
const text4 = `2.接着用generator修改之后`;
const text5 = `const asynchronous = resolve => {
  setTimeout(resolve, 8000);
};

const gen = function*() {
  yield (() => {
    return new Promise(asynchronous);
  })();
  console.log("不像龟派气功")
};

const g = gen();

g.next().value
	.then(()=>{})
	.then(()=>{})
	.then(()=>{g.next()});
`;



export default {
  data: function() {
    return {
      textArray: [text1],
      textArray1: [text3],
      textArray2: [text5],
      text: text,
      text2: text2,
      text4: text4
    };
  }
};
</script>

<style scoped>
.b-card {
  /* height: 90vh; */
}
</style>
