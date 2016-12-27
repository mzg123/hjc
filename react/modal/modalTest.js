var React = require('react');
var reactRedux = require('react-redux')
var Redux=require("redux");
var actions=require("../redux/actions.js");
var reactRouter=require('react-router');

var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;

var ModalTest=React.createClass({
    render:function(){
        var click=this.props.onItemClick
        return (
           <div>
               <button onClick={click.bind(this,"showM1")}>modal1</button>
               <button  onClick={click.bind(this,"showM2")}>modal2</button>
           </div>

        )
    }
})

const mapStateToProps =function (state) {
    return {
        tabData:state.tabCounter.tabData
        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(type){
            dispatch({type:type});
        }

    }
}

var ModalTest=connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalTest);

module.exports=ModalTest;
