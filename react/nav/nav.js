var React = require('react');
var reactRedux = require('react-redux')
require("./nav.scss");
var Redux=require("redux");
var actions=require("../redux/actions.js");
//var reactRouter=require('react-router');
//import reactRouter from 'react-router';
import { Link } from 'react-router';
var connect=reactRedux.connect,provider =reactRedux.Provider;

 class nav extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div onClick={this.props.onItemClick}>33333</div>
        )
    }
}

const mapStateToProps =function (state) {
    console.log(state,111);
    return {
        navType:state.navCounter

    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(id){
            //dispatch(actions.getAjaxLog(id));
            alert(3);
        }
    }
}

var navcon=connect(
    mapStateToProps,
    mapDispatchToProps
)(nav);
export default navcon;