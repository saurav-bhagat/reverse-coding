import React from 'react';
import './css/welcome.css';
import Question from './userpage/question';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './admin/ModalShow';

const Topbox = (props) => {
  return(
      <div className="tb-wrapper">
          <span className="tb-head">REVERSE CODING</span>
          <NavLink to="/logout" >
          <button className="btn lo-btn z-index-5">
              Logout
          </button>
          </NavLink>
          <NavLink to="/leaderboard">
              <div className="ld-link btn">
                  Leaderboard
              </div>
          </NavLink>
      </div>
    );
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questxt : ['Question 1','Question 2', 'Question 3','Question 4','Question 5','Question 6','Question 7','Question 8','Question 9','Question 10','Question11','Question12','Question13','Question14','Question15'],
            exequestion: [],
            jarquestion: [],
            linuxquestion: []
        }
    }

    componentDidMount() {
        axios.get("http://139.59.20.9:1337/question/getquestion")
            .then(res => {
                let jarquestion=[];
                let exequestion=[];
                let linuxquestion= [];
                for(let j=0;j<Object.keys(res.data.fileswin).length;j++){
                    exequestion.push("http://139.59.20.9:1337/"+res.data.fileswin[j+1]);
                    jarquestion.push("http://139.59.20.9:1337/"+res.data.filesmac[j+1]);
                    linuxquestion.push("http://139.59.20.9:1337/"+res.data.fileslinux[j+1]);
                }
                exequestion.push("http://139.59.20.9:1337/files/win_final/q11.exe");
                jarquestion.push("http://139.59.20.9:1337/files/mac_final/q11.o");
                linuxquestion.push("http://139.59.20.9:1337/files/linux_final/q11.o");
                exequestion.push("http://139.59.20.9:1337/files/win_final/q12.exe");
                jarquestion.push("http://139.59.20.9:1337/files/mac_final/q12.o");
                linuxquestion.push("http://139.59.20.9:1337/files/linux_final/q12.o");
                exequestion.push("http://139.59.20.9:1337/files/win_final/q13.exe");
                jarquestion.push("http://139.59.20.9:1337/files/mac_final/q13.o");
                linuxquestion.push("http://139.59.20.9:1337/files/linux_final/q13.o");
                exequestion.push("http://139.59.20.9:1337/files/win_final/q14.exe");
                jarquestion.push("http://139.59.20.9:1337/files/mac_final/q14.o");
                linuxquestion.push("http://139.59.20.9:1337/files/linux_final/q14.o");
                exequestion.push("http://139.59.20.9:1337/files/win_final/q15.exe");
                jarquestion.push("http://139.59.20.9:1337/files/mac_final/q15.o");
                linuxquestion.push("http://139.59.20.9:1337/files/linux_final/q15.o");

                this.setState({
                    jarquestion:jarquestion,
                    exequestion,
                    linuxquestion
                });

            })
    }

    render() {
        let questxt     = this.state.questxt;
        let exequestion = this.state.exequestion;
        let jarquestion = this.state.jarquestion;
        let linuxquestion = this.state.linuxquestion;
        return(
            <div>
                <Topbox />
                {/*<span style={{float:'right',color:'#ffffff',marginRight:'20px'}}>Please refresh the page if question box is not opening</span>*/}
                <div className="welcome-wrapper">
                    <br /> <br />
                    <div className="row">
                        <div className="col s6">
                            <h4 className="cool-link">Coding Challenges</h4>


                        </div>
                        <div className="col s6">
                            {/*<NavLink to="/leaderboard">*/}
                            {/*<div className="ld-link btn">*/}
                                {/*Leaderboard*/}
                            {/*</div>*/}
                            {/*</NavLink>*/}
                        </div>

                    </div>
                    <h5>Note:</h5>
                    <ul>

                        <li>
                            <h5>
                                Plagiarism will be strictly checked. If found guilty, you will be eliminated immediately.
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>&nbsp;
                                Please fill out the feedback form whose link will be provided to you just after the event in Homepage.
                            </h5>
                        </li>
                    </ul>

                    <br />
                    <ul className="collapsible popout" data-collapsible="accordion">
                        {questxt.map((txt,i)=> <Question key={i} exe={exequestion[i]} jar={jarquestion[i]} linux={linuxquestion[i]} questxt={txt} quesid={i+1} />)}
                    </ul>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Welcome;