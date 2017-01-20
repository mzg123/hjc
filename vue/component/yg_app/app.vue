<template>
    <div class="yg_app flex_con flex_dir_c" >

         <div class="flex_con flex_p_100">
             <router-view  class="main_content flex_p_100"></router-view>
         </div>

        <div class="footer flex_con flex_dir_r flex_s_c flex_v_c" >
            <div class="flex_p_100 flex_dir_c flex_s_c" @click="a($event,'33')">
                <div class="align_c " :class="home_press"></div>
                <div class="align_c">首页</div>
            </div>
            <div class="flex_p_100 flex_dir_c flex_s_c">
                <div class="align_c " :class="invest_normal"></div>
                <div class="align_c">产品</div>
            </div>
            <div class="flex_p_100 flex_dir_c flex_s_c">
                <div class="align_c personal_normal"></div>
                <div class="align_c">我的</div>
            </div>


        </div>
    </div>

</template>
<script type='es6'>

    import { mapState,mapGetters } from 'vuex';


    export default {
        data () {
            return {
                home_press: 'home_press world!'
                ,invest_normal:"invest_normal"
            }
        }
    , computed:{
        ...mapGetters([
                'doneTodos',
            ])
        }
//    ,components: { helloItem }
    ,methods:{
            a:function(msg,d){
            console.log(msg);
            alert(d);
            }
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
        /*height: pxToRem(30px);*/
        /*line-height: pxToRem(30px);*/
        font-size: pxToRem(22px);
        .home_press{
         @include background(auto,pxToRem(40px),'../../dist/image/tab_home_press.png');
         }
        .invest_normal{
          @include background(auto,pxToRem(40px),'../../dist/image/tab_invest_normal.png');
        }
        .personal_normal{
        @include background(auto,pxToRem(40px),'../../dist/image/tab_personal_normal.png');
        }

    }

</style>