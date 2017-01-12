<template>
  <div class="example">{{msg}}</div>
</template>
<script>


  export default {
    data () {
     console.log(this.$store.getters.doneTodos,90879087);
      return {
        msg: 'Hello world!'
        ,t:"t1"
        ,tt:{
          ttt:'90909090',rrr:2
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