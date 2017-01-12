<template>
  <div class="example">{{msg}}</div>
</template>
<script>


  export default {
    data () {
     console.log(this.$store.getters.doneTodos,90879087);
      return {
        msg: '000000000000000000!'
        ,t:"t1"
        ,tt:{
          ttt:'000000000000000000',rrr:2
        }
      }
    }
  ,methods:{
      a:function(msg){
        alert(msg);}
    }

  }
</script>

<style>
.example {
  color: green;
}
</style>