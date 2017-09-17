import React from 'react';
import Fixednav from './sidenav';
import './round1.css';
import axios from 'axios';
import Question from './question';


class Round1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questxt : ['Question 1','Question 2', 'Question 3','Question 4','Question 5','Question 6','Question 7','Question 8','Question 9','Question 10'],
    }
    var x;
    let start = (e) =>{
        e.preventDefault();
        console.log("inside start function");
        this.refs.demo.innerHTML = "start clicked";
        var hr = this.refs.hr.innerHTML;
        var min = this.refs.min.innerHTML;
        var sec = this.refs.sec.innerHTML;
        var maxmin=60;
        var maxsec=60;
        x = setInterval(myFunc, 1000);
        var myFunc= () => {
            if(hr>=0 && min>=0 && sec>=0){
                if(sec<=0){
                    min = min-1;
                    sec=59;
                }
                if(min<=0){
                  hr=hr-1;
                  min=59;
                }
                sec = sec-1;
                this.refs.hr.innerHTML = hr;
                this.refs.min.innerHTML = min;
                this.refs.sec.innerHTML = sec;
            }
            else{
                clearInterval(x);
               }
             }

           }
           let stop = (e) => {
              e.preventDefault();
              this.refs.demo.innerHTML = "stop clicked";
              clearInterval(x);
          }

  }
    //start and stop function*/}


  render(){


    let questxt = this.state.questxt;
    return(

      <div id="round1">
        <div className="row">
          <div className="col s3">
            <Fixednav />
          </div>

          <div className="col s9">
            <div className="row">
              <div className="col m6 s12">
                <h2 className="round1head">Round1</h2>
              </div>
              <div className="col m6 hide-on-med-and-down">
                  <p><span id="hr" ref="hr">3</span>: <span id="min" ref="min">00</span> : <span id="sec" ref="sec">00</span>
                  <a onClick={this.start} className="playbtn btn-floating btn-large waves-effect waves-light" ><i className="material-icons">play_arrow</i></a>
                  <a onClick={this.stop} className="pausebtn btn-floating btn-large waves-effect waves-light" ><i className="material-icons">pause</i></a>
                  </p>
                  <p ref="demo"></p>
            </div>
            </div><br />

            <div id="questionmaindiv">
              <div className="quescontainer">
                <ol>
                  {questxt.map((txt,i)=> <Question key={i} questxt={txt} quesid={i+1} />)}
                </ol>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
{/* here all the data from backend will be fetched and stored in state and then while rendering question component ,
  it will be passed in as props after that all details will be available as props in individual question
  component  */}
export default Round1;
