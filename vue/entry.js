
import Vue from 'vue'
import hello from './component/helloword/hello.vue'
//Hello=require("./component/helloword/hello.vue");
console.log(hello,11111);

/* eslint-disable no-new */
new Vue({
    el:'#hello',
    render: (createElement) => createElement(hello)
})