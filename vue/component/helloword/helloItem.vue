<template>
  <div class="example_item" @click='click'>2222222222{{msg}}{{foo}}{{t}}{{tt.ttt}}</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'mzg!'
    }
  }
   ,props:['foo','t','tt']
   ,methods:{
     click:function(){
     this.$emit('alert','子组件向上传递')
     }
     }
}
</script>
<style>
.example_item {
  color: blue;
}
</style>