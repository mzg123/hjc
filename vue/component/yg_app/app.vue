<template>
    <div class="yg_app flex_con">


        <router-view class="main_content"></router-view>
        <div class="footer flex_con flex_s_c flex_s_c">33333</div>
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


</style>