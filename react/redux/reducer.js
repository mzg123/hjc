
var inits=function initState(){

    return {
        state:1,
        content:{},
        currenttxt:"",
        treeItems:[
            {
                text:"1第一级"

                ,child:[
                {
                    text:"1-1第二级"
                    ,child:[
                    {
                        text:"1-1-1第三级"
                        ,child:[
                        {text:"1-1-1-1第四级"}
                        ,{text:"1-1-1-2第四级"}
                    ]
                    },
                    {
                        text:"1-1-2第三级"
                    }
                ]
                },
                {
                    text:"1-2第二级",
                    child:[
                        {
                            text:"1-2-1第三级"
                        }
                        ,{
                            text:"1-2-2第三级"
                        }
                    ]
                }
            ]
            }
        ]
        ,options:{
        }

    }
}
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if(! p.hasOwnProperty(i)){
            continue;
        }
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}
module.exports={
    initState:inits
    ,counter:function (state,action) {
    state||(state={mzg:"mzg"});
    switch (action.type) {
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        default:
            return state;
    }
}
,treeCounter:function (state , action) {
    state||(state=inits());

        switch (action.type) {
            case "loadding":
                state.state=0;
                return deepCopy(state);
                //return $.extend({},state);
            case "getdata":
                state.content[action.param]? state.content[action.param]= action.data+"\n\n"+state.content[action.param]: state.content[action.param]=action.data;
                state.content.currentcontent=state.content[action.param];
                state.currenttxt=state.content[action.param];
                return deepCopy(state);
                //return $.extend({},state);
            default:

                return  state;
            }
    }
    ,navCounter:function(state,action){
        state||(state=inits());
        state.navData || (state=$.extend({},state,{
             navData:{
            type:"hor"
            ,currentMenu:""
                 ,modal_1_option:{id:"modal1",modalState:0}
                 ,modal_2_option:{id:"modal2",modalState:0}
            ,data:[
                {
                    tag:"首页"
                    ,href:"/"

                }
                , {
                    tag:"组件管理"
                    ,MenuEc:"leave"
                    ,child:[
                        {
                            tag:"lefttree"
                            ,href:"/tree"
                        }
                        ,{
                            tag:"轮播"
                            ,href:"/roller"
                        }
                        ,{
                            tag:"tabs"
                            ,href:"/tabs"
                        }
                        ,{
                            tag:"modals"
                            ,href:"/modals"
                        }
                    ]
                }
                , {
                    tag:"债权转让"
                    ,MenuEc:"leave"
                    ,child:[
                        {
                            tag:"p2p债券"
                            ,href:"/test"
                        }
                        ,{
                            tag:"p2p债券"
                            ,href:"/test"
                        }
                    ]
                }
                ,{
                    tag:"银谷课堂"
                    ,href:"/"

                }
            ]
        }}));
        switch(action.type){
            case "enter":
                state.navData.data.map(function(item,index){
                    if(item.tag==action.tag){
                        item.MenuEc="enter";
                    }
                })
                state.navData.currentMenuEc="currentMenuEcenter";
                return deepCopy(state);
                //return $.extend({},state);
            case "leave":
                state.navData.data.map(function(item,index){
                    if(item.tag==action.tag){
                        item.MenuEc="leave";
                    }
                })
                state.navData.currentMenuEc="currentMenuEcleave";
                return deepCopy(state);
                //return $.extend({},state);

            case "showM1":
                state.navData.modal_1_option=action.option;
                state.navData.modal_1_option.modalState=1;
                return deepCopy(state);
                //return $.extend({},state,true);
            case "showM2":
                state.navData.modal_2_option=action.option;
                state.navData.modal_2_option.modalState=1;
                return deepCopy(state);
                //return $.extend({},state,true);
            case "hiddenM2":
                state.navData.modal_2_option.modalState=0;
                return deepCopy(state);
                //return $.extend({},state,true);

            case "hiddenM1":
                state.navData.modal_1_option.modalState=0;
                return deepCopy(state);
                //return $.extend({},state,true);
            default:
                return state;
        }
    }
    ,tabCounter:function(state,action){
        state||(state=inits());
        state.tabData || (state=$.extend({},state,{ tabData:{
            currentTabIndex:1
            ,data:[
                {
                    tag:"已充值"
                    ,href:"/"
                    ,tabIndex:0
                }
                ,{
                    tag:"已充值"
                    ,href:"/"
                    ,tabIndex:1
                }
                ,{
                    tag:"充值失败"
                    ,href:"/"
                    ,tabIndex:2
                }
                ,{
                    tag:"未处理"
                    ,href:"/"
                    ,tabIndex:3
                }
            ]
        }}));

        switch(action.type){
            case "tabclick":
                state.tabData.currentTabIndex=action.tabIndex;
                return deepCopy(state);
                //return $.extend({},state);
            default:
                return state;
        }
    }
}
