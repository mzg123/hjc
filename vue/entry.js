
import Vue from 'vue'
import hello from './component/helloword/hello.vue'
import store from './vuex/store.js'



console.log(hello,11111);

/* eslint-disable no-new */
new Vue({
    el:'#hello',
    data:{
        mzg:"ddd"
    },
    store,
    //components: {
    //    'hello': hello
    //},
    render: (createElement) => createElement(hello)

})