<template>
    <div class="roller " >
        <div style="position: relative;width:100%;overflow:hidden;">
            <div style="width:300%">
                <div class="currentBanner b" >1</div>
                <div class="Banner b">2</div>
                <div class="Banner b">3</div>
            </div>

        </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
    </div>

</template>
<script type='es6'>

    import { mapState,mapGetters } from 'vuex';


    export default {
     computed:
     {
     ...mapState({
     currentPage:state => state.home.currentPage
     ,homePage:state => state.home.homePage
     ,investPage:state => state.home.investPage
     ,personalPage:state => state.home.personalPage
     })
        //...mapGetters([
        //        'doneTodos',
        //    ])
        }
//    ,components: { helloItem }
    ,methods:{
            goto:function(evt,index){
              this.$store.commit('footerClick',{index:index});
               //this.$store.dispatch('modifyaction');
            }
        }

    }

</script>

<style lang="sass">
    @import '../../../common/scss/main.scss';
    .b{
    @include background(pxToRem(750px),pxToRem(338px),'../../../dist/image/banner1.png');

    }
.roller{
    .currentBanner{
        display: inline-block;width:33.33%
    }
    .Banner{
        display: inline-block;width:33%
    }
}

</style>