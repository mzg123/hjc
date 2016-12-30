var tabcontent1 = require('../data/tabcontent1.json');
var tabcontent2 = require('../data/tabcontent2.json');
//var tabcontent3 = require('../data/tabcontent3.json');
//var tabcontent4 = require('../data/tabcontent4.json');



module.exports={
    getAjaxLog:function(subreddit) {
        return function (dispatch) {
            dispatch({ type: "getdata"
                       ,param:subreddit
            })
            setInterval(function(){
                dispatch({ type: "getdata"
                    ,param:subreddit
                    ,data:new Date().getSeconds()
                })
            },10000);
            $.ajax({
                type: "post",
                url: "http://172.24.132.49:10280/get_data",
                data: {
                    name:"/data/logs/tomcat/tomcat-web.log"
                    ,Remode:""
                    ,Rows_count:"1"
                    ,search_conditions:""
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                },
                exception: function (data) {
                    alert(9009);
                    console.log(data);
                }

            });
        }
    }
    ,loadData:function(option){
        return function (dispatch) {
            option.page==2&&(tabcontent1=tabcontent2);
            dispatch({ type: option.type,data:tabcontent1
            });
            //setInterval(function(){
            //    console.log(option);
            //
            //},10000);
            //$.ajax({
            //    type: "get",
            //    async: false,
            //    url: "http://react.com/tabcontent1.json?callType=jsonp",
            //    dataType: "jsonp",
            //    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //
            //    success: function(json){
            //        console.log(json);
            //    },
            //    error: function(){
            //        alert('fail');
            //    }
            //});
//            $.getJSON("http://react.com/tabcontent1.json?callback=?",function(data){
//alert(data);
//            })

        }
    }
    ,tabClick:function(option){
        return function(dispatch){
            //处理其它逻辑
            dispatch({type:"tabclick",tabIndex:option});
        }
    }
}