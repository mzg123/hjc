var React = require('react');
var reactRedux = require('react-redux')

var Redux=require("redux");
var actions=require("../redux/actions.js");
var reactRouter=require('react-router');

var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Table = React.createClass({

    componentDidMount() {
        //this.props.router.setRouteLeaveHook(
        //    this.props.route,
        //    this.routerWillLeave
        //)
    }

    ,render: function () {
        return (
            <div className={this.props.isShow?"":"display_n"}>
            {this.props.option}
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

    }
}

//var Tabs=connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(Tabs);
module.exports =Table;

