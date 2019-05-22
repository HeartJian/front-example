<template>
<el-button @click="requestLocal">发送网络请求</el-button>
</template>


<script>
import request from '../utils/Request.js'
export default {

    methods:{
        requestLocal(){
            request('',{},'POST')
        }
    }
    

}
</script>

<style>

</style>
