import React from 'react';
import './faq.css';
import Fixednav from './sidenav';
import {Link} from 'react-router-dom';

class Faq extends React.Component {
  render(){
    return(
      <div className="faqmain">
        <div className="row">
          <div className="col s3">
            <Fixednav activeClass="faq" />
          </div>

          <div className="col s9 container ">
            {/*accordian*/}
            <div className="faqsection">
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header active"><i className="material-icons">filter_drama</i>First</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>
            </div>
            {/*<div>
              <Link to="/round1"><button className="btn waves">Round1</button></Link>
              <Link to="/round2"><button className="btn waves right btn2">Round2</button></Link>
            </div>*/} 
          </div>
        </div>
      </div>
    );
  }
}



export default Faq;
