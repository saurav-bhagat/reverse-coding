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
        exequestion: [],
        jarquestion: []
    }

  }
  componentDidMount() {
      axios.get("https://reverse-coding-acm.herokuapp.com/question/getquestion")
          .then(res => {
              console.log(res)
                console.log(res.data.queroundoneexe);
                  this.setState({
                      exequestion : res.data.queroundoneexe
                  })
              for(let j=0;j<10;j++){
                  this.state.jarquestion.push(res.data.queroundonejar[j+1]);
              }
              console.log("questions are" + this.state.exequestion);
          })

  }

  render(){


    let questxt     = this.state.questxt;
    let exequestion = this.state.exequestion;
    let jarquestion = this.state.jarquestion;
    console.log(this.state.exequestion);
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
            </div><br />

            <div id="questionmaindiv">
              <div className="quescontainer">
                <ul>
                  {questxt.map((txt,i)=> <Question key={i} exe={exequestion[i+1]} jar={jarquestion[i+1]} questxt={txt} quesid={i+1} />)}
                </ul>
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
