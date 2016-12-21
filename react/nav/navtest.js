import React from "react";
import {Link} from 'react-router';
//var Link=reactRouter.Link;
export default class Navtest  extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
              <Link to="/roller">轮播图</Link>
        );
    }
}