import React from 'react';
import './section3.css';


class Section3 extends React.Component{
  render(){
    return(
        <div className="section3" id="section3">
            {/*accordian*/}
            <h2 className="center ruleheader">Rules and Regulations</h2><br />
            <div className="rulessection container">
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
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>
            </div>
        </div>
    );
  }
}

export default Section3;
