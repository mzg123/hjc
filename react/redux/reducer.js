
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
                return $.extend({},state);
            case "getdata":
                state.content[action.param]? state.content[action.param]= action.data+"\n\n"+state.content[action.param]: state.content[action.param]=action.data;
                state.content.currentcontent=state.content[action.param];
                state.currenttxt=state.content[action.param];
                return $.extend({},state);
            default:

                return  state;
            }
    }
    ,navCounter:function(state,action){
        state||(state=inits());
        state.navData || (state=$.extend({},state,{ navData:{
            type:"hor"
            ,currentMenu:""
            ,data:[
                {
                    tag:"首页"
                    ,href:"/"

                }
                , {
                    tag:"财富管理"
                    ,MenuEc:"leave"
                    ,child:[
                        {
                            tag:"p2p债券"
                            ,href:"/m"
                        }
                        ,{
                            tag:"p2p债券"
                            ,href:"/m"
                        }
                    ]
                }
                , {
                    tag:"债权转让"
                    ,MenuEc:"leave"
                    ,child:[
                        {
                            tag:"p2p债券"
                            ,href:"/m"
                        }
                        ,{
                            tag:"p2p债券"
                            ,href:"/m"
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
                return $.extend({},state);
            case "leave":
                state.navData.data.map(function(item,index){
                    if(item.tag==action.tag){
                        item.MenuEc="leave";
                    }
                })
                state.navData.currentMenuEc="currentMenuEcleave";
                return $.extend({},state);
            default:
                return state;
        }
    }
}
