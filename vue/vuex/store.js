import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const moduleA = {
    state: {
        mzg:"mzg"
    },
    mutations: {
        modify:function(state){
            state.mzg=="王小明"?state.mzg="张三丰":state.mzg="王小明";
        }
    },
    actions: {
        modifyaction:function(ctx){
            ctx.commit('modify')
        }
    },
    getters: {
        doneTodos: state => {
            return "3";
        }
    }
}

const moduleB = {
    state: {
        mzg:"yyyyyyyy"
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

export default store;
//const app = new Vue({
//    el: '#app',
//    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
//    store,
//    components: { Counter },
//    template: `
//    <div class="app">
//      <counter></counter>
//    </div>
//  `
//})

//if (module.hot) {
//    // 使 actions 和 mutations 成为可热重载模块
//    module.hot.accept(['./mutations', './modules/a'], () => {
//        // 获取更新后的模块
//        // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
//        const newMutations = require('./mutations').default
//        const newModuleA = require('./modules/a').default
//        // 加载新模块
//        store.hotUpdate({
//            mutations: newMutations,
//            modules: {
//                a: newModuleA
//            }
//        })
//    })
//}