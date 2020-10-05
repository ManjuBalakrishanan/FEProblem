import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Facilino from "./facilino";
 
 
class  Header  extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Falcone</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/facilino">Find Falcone</NavLink></li>
         
         
          </ul>
          <div className="content">
         <Route exact path="/" component={Home}/>
         <Route path="/facilino" component={Facilino}/>
         
         
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Header;