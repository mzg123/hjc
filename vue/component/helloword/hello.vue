<template>
  <div class="example">{{msg}} <helloItem :foo="msg" :t="t" :tt="tt" @alert="a"></helloItem></div>
</template>
<script>
import helloItem from './helloItem.vue'
export default {
  data () {
    return {
      msg: 'Hello world!'
      ,t:"t1"
      ,tt:{
       ttt:'90909090',rrr:2
      }
    }
  }
  ,components: { helloItem }
  ,methods:{
  a:function(msg){
  alert(msg);}
  }

}
</script>
<style>
.example {
  color: red;
}
</style>