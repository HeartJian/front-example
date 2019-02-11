<template>
    <div>
        <el-card class="b-card">
         <text-word :header="text1" :contents="textArray1"/>
        </el-card>
    </div>
</template>

<script>
const text1=`<pre></pre>`

function Promise(fn) {
    let value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调
    const self= this
    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return self
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }                                  
    fn(resolve);
}

const asynchronous=(resolve)=>{setTimeout(resolve,5000)};
// new Promise(asynchronous).then(()=>{console.log("hello")}).then(()=>{console.log("hello")})




export default {
    data:function(){
        return {text1:'text1',textArray1:[]}
    }
};
</script>

<style>
</style>
