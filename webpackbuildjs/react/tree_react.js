var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../../react/redux/store.js');
var Tree=require("../../react/tree_react/tree.js");
var Roller=require("../../react/roller/roller.js");
var Test=require("../../react/tree_react/Test.js");
import Navtest from "../../react/nav/navtest.js";

//var  App=require("../block/tree_react/reactredux.js");
var Router=reactRouter.Router, Route=reactRouter.Route, browserHistory=reactRouter.browserHistory;

reduxStore.initState();




console.log(Navtest)
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/nav"  component={Navtest}/>
    </Router>
    , document.getElementById("nav"));

function d(){console.log(3);}
ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={browserHistory}>
            <Route path="/m"  onLeave={d} component={Test}/>
            <Route path="/roller"   component={Roller} />
            <Route path="/home"  onLeave={d} onEnter={d} component={Tree} />
        </Router>
    </Provider>
    , document.getElementById("con"));








