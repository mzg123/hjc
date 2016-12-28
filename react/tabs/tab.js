var React = require('react');
var reactRedux = require('react-redux')
require("./tab.scss");
var Redux=require("redux");
var actions=require("../redux/actions.js");
var reactRouter=require('react-router');

var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Tabs = React.createClass({

    componentDidMount() {
        //this.props.router.setRouteLeaveHook(
        //    this.props.route,
        //    this.routerWillLeave
        //)
    },

    render: function () {
        var modal1={close:this.props.close1,id:"modal1",width:200,height:100,
            sureClick:this.props.show2,sureClose:0,
            sureClickParam:modal2,content:"<div style='color:red'>1212</div>"}
        var modal2={close:this.props.close2,id:"modal2",width:400,height:500,
            sureClick:this.props.close2,
            sureClickParam:{a:3},content:"<div style='color:blue'>3212</div>"}
        modal1.sureClickParam=modal2
        var click=this.props.modalClick

        var d=this.props.tabData,currentTabIndex=this.props.currentTabIndex,onItemClick=this.props.onItemClick;
        var tabs=d.data.map(function(item,index){
            if(index==currentTabIndex){
                return (<div onClick={onItemClick.bind(this,item.tabIndex)} className="tab current">{item.tag}</div>)
            }
            else{
                return <div onClick={onItemClick.bind(this,item.tabIndex)}  className="tab">{item.tag}</div>
            }
        })

        return (
            <div    className="tabs">
            {tabs}
                <button onClick={click.bind(this,"showM1",modal1)}>modal1</button>
                <button  onClick={click.bind(this,"showM2",modal2)}>modal2</button>
            </div>


        );
    }
});


const mapStateToProps =function (state) {
    return {
        tabData:state.tabCounter.tabData
        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(id){
            dispatch(actions.tabClick(id));
        }
        ,modalClick:function(type,option){
            dispatch({type:type,option:option});
        }
        ,close1:function(){
            dispatch({type:"hiddenM1"});
        }
        ,close2:function(){
            dispatch({type:"hiddenM2"});
        }
        ,show2:function(option){
           alert(option);
        }
    }
}
function initTabs(props){
    return connect(
        function (state) {
            return props;
            //return {
            //    tabData:state.tabCounter.tabData
            //    ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
            //}
        },
        function(dispatch ,ownProps) {
            return {
                onItemClick: function(id){
                    dispatch(actions.tabClick(id));
                }
            }
        }
    )(Tabs);
}
var Tabs=connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
module.exports =Tabs;

