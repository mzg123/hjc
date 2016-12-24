var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../../react/redux/store.js');
var Tree=require("../../react/tree_react/tree.js");
var Roller=require("../../react/roller/roller.js");
var Test=require("../../react/tree_react/Test.js");
import navtest from "../../react/nav/navtest.js";
import nav from "../../react/nav/nav.js";

//var  App=require("../block/tree_react/reactredux.js");
var Router=reactRouter.Router, Route=reactRouter.Route,IndexRoute=reactRouter.IndexRoute, browserHistory=reactRouter.browserHistory;

reduxStore.initState();



//ReactDOM.render(
//    <Router history={browserHistory}>
//        <Route path="/"  component={nav}/>
//    </Router>
//    , document.getElementById("nav"));

function d(){console.log(3);}
ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={browserHistory}>

            <Route path="/"  component={nav}>
                <Route path="roller"   component={Roller} />
                <Route path="m"  onLeave={d} component={Test}/>
                <IndexRoute component={Test}/>
                <Route path="home"  onLeave={d} onEnter={d} component={Tree} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById("con"));








