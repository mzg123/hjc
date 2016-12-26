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
     getInitialState(){
         return {
             navData:{
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
             }
         }
     }
     createNav(data,props){
          var self=this;
         //{self.createNav(item.child,props)}
         return data.map(function(item,index){
             let c="position_a menu "+item.MenuEc;
             if(item.child){

                 return (
                  <li data-name={item.tag} props={props} onMouseLeave={self.mouseLeave.bind(self)} onMouseEnter={self.mouseEnter.bind(self)}>
                         <Link to={item.href}>{item.tag}</Link>
                         <ul data-name={item.tag} className={c}>
                         {
                             item.child.map(function(itemc,indexc){
                                 return ( <li  data-name={item.tag}><Link to={itemc.href}>{itemc.tag}</Link></li>);
                             })
                             }
                         </ul>
                     </li>
                 )
             }else{

                return(
                    <li ><Link to={item.href}>{item.tag}</Link></li>
                )


             }
         })
     }
     mouseEnter(evt){

         this.props.changeMenu("enter",$(evt.target).parent().attr("data-name"));
     }
     mouseLeave(evt){
         this.props.changeMenu("leave",$(evt.target).parent().attr("data-name"));
     }
    render(){
        let navData=this.props.navData;
        let r=this.createNav(navData.data,this.props.changeMenu);

        return (
            <div className="con">
                    <div id="nav" className="nav">
                        <ul >
                         { r }
                        </ul>
                    </div>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps =function (state) {

    return {
      navData:state.navCounter.navData,
       currentMenuEc:state.navCounter.navData.currentMenuEc
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        changeMenu: function(ty,tag){
             dispatch({type:ty,tag:tag});
        }
    }
}

var navcon=connect(
    mapStateToProps,
    mapDispatchToProps
)(nav);
export default navcon;