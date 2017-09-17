import React from 'react';
import {NavLink} from 'react-router-dom';
import './faq.css';

class Fixednav extends React.Component {
  constructor(props){
    super(props);
    this.showNav = this.showNav.bind(this);
  }
  showNav = (e) => {
    e.preventDefault();
    let x = this.refs.navul;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  render(){

    return(
       <div id="sidenav">
         <ul id="nav-ul" ref="navul">
          <li className="li-ele"><NavLink to="/round1" activeStyle={{ fontWeight:'bold',backgroundColor:'#757575',color: '#0D47A1'}}>Round1</NavLink></li>
          <li className="li-ele"><NavLink to="/round2" activeStyle={{ fontWeight:'bold',backgroundColor:'#757575',color: '#0D47A1'}}>Round2&nbsp;&nbsp;<i className="fa fa-lock" aria-hidden="true"></i></NavLink></li>
          <li className="li-ele"><NavLink to="/faq" activeStyle={{ fontWeight:'bold',backgroundColor:'#757575',color: '#0D47A1' }}>FAQs</NavLink></li>
          <li className="li-ele"><NavLink to="/logout" activeStyle={{ fontWeight:'bold',backgroundColor:'#757575',color: '#0D47A1' }}>Logout</NavLink></li>
          <a href="javascript:void(0);" style={{fontSize:'15px'}} className="icon" onClick={this.showNav}>&#9776;</a>
      </ul>
       </div>
    );
  }
}

export default Fixednav;
