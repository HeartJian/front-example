<template>
    <div>
        <el-card class="b-card">
         <text-word :header="text1" :contents="textArray1"/>
        </el-card>
    </div>
</template>

<script>

function Person(name) {
  this.name = name;
}

Person.prototype.getName = () => {
  return this.name;
};

function objFactory ()  {
  const obj = new Object(),Constructor = [].shift.call(arguments);
  obj._proto_ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
};

const a = objFactory(Person, "sven");
console.log(a.name)

export default {
    data:function(){
        return {text1:"1",textArray1:[]}
    }
};
</script>

<style>
</style>
