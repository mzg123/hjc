<template>
    <div class="yg_app flex_con flex_dir_c" >

         <div class="flex_con flex_p_100">
             <router-view  class="main_content flex_p_100"></router-view>
         </div>

        <div class="footer flex_con flex_dir_r flex_s_c flex_v_c" >
            <div class="flex_p_100 align_c">首页</div>
            <div class="flex_p_100 align_c">产品</div>
            <div class="flex_p_100 align_c">我的</div>
        </div>
    </div>

</template>
<script>

    import { mapState,mapGetters } from 'vuex';

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
    ,computed: {

        ...mapGetters([
                'doneTodos',
            ])
        }
//    ,components: { helloItem }
    ,methods:{
            a:function(msg){
                alert(msg);}
        }

    }

</script>

<style lang="sass">
    @import '../../common/scss/main.scss';

    .yg_app,.main_content{
        height:100%;
        overflow-y: auto
    }
    .footer{
        height: pxToRem(30px);
        line-height: pxToRem(30px);
        font-size: pxToRem(20px); ;
    }
</style>