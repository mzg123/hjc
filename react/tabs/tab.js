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
        console.log(this.props);
        var d=this.props.tabData,currentTabIndex=this.props.currentTabIndex;
        var tabs=d.data.map(function(item,index){
            if(index==1){
                return (<div  className="tab current">{item.tag}</div>)
            }
            else{
                return <div className="tab">{item.tag}</div>
            }
        })

        return (
            <div    className="tabs">
            {tabs}
            </div>


        );
    }
});



const mapStateToProps =function (state) {

    return {
        tabData:state.tabCounter.tabData
        ,currentTabIndex:state.tabCounter.currentTabIndex
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(id){
            dispatch(actions.getAjaxLog(id));
        }
    }
}

var Tabs=connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
module.exports =Tabs;
