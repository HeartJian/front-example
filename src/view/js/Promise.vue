<template>
  <div>
    <el-card class="b-card">
      <text-word :header="text1" :contents="textArray1"/>
    </el-card>
  </div>
</template>

<script>
const text1 = `<pre></pre>`;
const isFunction = fn => typeof fn === "function";
function Promise(fn) {
    var promise = this,
        value = null;
        promise._resolves = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        return new Promise(function(resolve) {
            function handle(value) {
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
                resolve(ret)
            }
            if (promise._status === 'PENDING') {
                promise._resolves.push(handle); 
            } else if(promise._status === FULFILLED){
                handle(value);
            }
        })
        
    };

    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback( value);
            })
        },0);
    }

    fn(resolve);
}

function fn1(resolve, reject) {
    setTimeout(function() {
        console.log('步骤一：执行');
        resolve('1');
    },500);
}

function fn2(resolve, reject) {
    setTimeout(function() {
        console.log('步骤二：执行');
        resolve('2');
    },100);
}
function fn3(resolve, reject) {
    setTimeout(function() {
        console.log('步骤三：执行');
        resolve('3');
    },100);
}
new Promise(fn1).then(fn2).then(fn3)

export default {
  data: function() {
    return { text1: text1,textArray1:[] };
  }
};
</script>

<style>
</style>
