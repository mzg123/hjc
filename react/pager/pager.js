var React = require('react');
require("./pager.scss");
//var reactRedux = require('react-redux')
//var Redux=require("redux");
//var actions=require("../redux/actions.js");
//var reactRouter=require('react-router');
//
//var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Pager = React.createClass({
    getInitialState:function(){
      return {
          currentPage:14
          ,totalPage:15

      }
    },
    init:function(option){
          if(option.totalPage==1){
             var c= option.currentPage==1?"current":"";
              return '<div class="'+ c+'">1</div>';
          }
          else if(option.totalPage<=10&&option.totalPage>=2){
              var c= option.currentPage==1?"current":"";
              var pre=option.currentPage==1?" pre disable ":" pre ";
              var next=option.currentPage==option.totalPage?" next disable ":" next ";
              var r=' <div class="'+pre+'">上一页</div><div class="'+c+'">1</div>';
              for(var i=2;i<=option.totalPage;i++){
                  c= option.currentPage==i?"current":"";
                  r=r+'<div class="'+c+'">'+i+'</div>';
              }
              return r+'<div class="'+next+'">下一页</div>';
          }
          else{
              var c= option.currentPage==1?"current":"";
              var pre=option.currentPage==1?" pre disable ":" pre ";
              var next=option.currentPage==option.totalPage?" next disable ":" next ";
              var r=' <div class="'+pre+'">上一页</div>';
              if(option.currentPage<=4){
                  for(var i=1;i<=7;i++){
                      c= option.currentPage==i?"current":"";
                      r=r+'<div class="'+c+'">'+i+'</div>';
                  }
                  r=r+'<div >...</div>';
              }
              else if(option.totalPage-option.currentPage<=5){
                  for(var i=1;i<=8;i++){
                      c=option.totalPage- option.currentPage;
                      i<=3&&(r=r+'<div>'+i+'</div>');
                      i==4&&(r=r+'<div >...</div>');
                      i==5&&(r=r+'<div class="'+(c==5?"current":"")+'">'+(option.totalPage-5)+'</div>');
                      i==6&&(r=r+'<div class="'+(c==4?"current":"")+'">'+(option.totalPage-4)+'</div>');
                      i==7&&(r=r+'<div class="'+(c==3?"current":"")+'">'+(option.totalPage-3)+'</div>');
                      i==8&&(r=r+'<div class="'+(c==2?"current":"")+'">'+(option.totalPage-2)+'</div>');
                  }
              }
              else if(option.totalPage-option.currentPage>5&&option.currentPage>4){
                  for(var i=1;i<=7;i++){
                      c=option.totalPage- option.currentPage;
                      i<=2&&(r=r+'<div >'+i+'</div>');
                      i==3&&(r=r+'<div >...</div>');
                      i==4&&(r=r+'<div >'+(option.currentPage-1)+'</div>');
                      i==5&&(r=r+'<div class="current">'+(option.currentPage)+'</div>');
                      i==6&&(r=r+'<div >'+(option.currentPage+1)+'</div>');
                      i==7&&(r=r+'<div >'+(option.currentPage+2)+'</div>');
                  }
                  r=r+'<div >...</div>';
              }

              c=option.totalPage-option.currentPage;

              return r+'<div class="'+(c==1?"current":"")+'">'+(option.totalPage-1)+'</div><div class="'+(c==0?"current":"")+'">'+option.totalPage+'</div><div class="'+next+'">下一页</div>';
          }
    },
    render: function () {
        var option=this.getInitialState();//this.props.option;
        var r=this.init(option);
        return (
            <div className="pager" dangerouslySetInnerHTML={{__html: r}} >

            </div>
        );
    }
});


//const mapStateToProps =function (state) {
//    return {
//        tabData:state.tabCounter.tabData
//        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
//    }
//}
//
//const mapDispatchToProps = function(dispatch ,ownProps) {
//    return {
//        onItemClick: function(id){
//            dispatch(actions.tabClick(id));
//        }
//
//    }
//}

//var Pager=connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(Pager);
module.exports =Pager;

