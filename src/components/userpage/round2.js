import React from 'react';
import Fixednav from './sidenav';
import './round2.css';

class Round2 extends React.Component{
  render(){
    return(
      <div className="round2">
        <div className="row">
          <div className="col s3">
            <Fixednav />
          </div>

          <div className="col s9">
            <h1>Round2</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Round2;
