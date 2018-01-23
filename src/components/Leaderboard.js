import React from 'react';
import './css/leaderboard.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './css/welcome.css';

const Topbox = (props) => {
    return(
        <div className="tb-wrapper">
            <span className="tb-head">LeaderBoard</span>
            {
                localStorage.getItem('token') &&
                    <div className="ld-nav">
                        <a href="/welcome">
                            <div className="btn ld-nav-c z-index-5 " style={{textAlign:'center'}}>
                                Challenges
                            </div>
                        </a>
                        <NavLink to="/logout" >
                            <button className="btn ld-nav-l z-index-5">
                                Logout
                            </button>
                        </NavLink>

                    </div>
            }


        </div>
    );
}

const TeamRow = (props) => {
  return(
      <tr>
          {/*<td>{props.index+1}</td>*/}
          <td>{props.data.teamname}</td>
          <td>{props.data.score}</td>

      </tr>
  );
};

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ledetails : []
        }
    }

    componentDidMount() {
        axios.get("http://139.59.20.9:1337/team/getscore")
            .then(res => {

                for(let i=0; i< res.data.data.length ;i++)
                {
                    this.state.ledetails.push(res.data.data[i]);
                }

                this.setState({});

            })
    }

    render() {
        let leaderBoard = this.state.ledetails;
        return(
            <div>
                <Topbox />
                <br />

                <div className="tb-container">
                    <div>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
                        {/*{*/}
                            {/*localStorage.getItem('token') &&*/}
                            {/*<NavLink to="/welcome">*/}
                                {/*<div className="ch-link btn z-index-5" style={{textAlign:'center'}}>*/}
                                    {/*Challenges*/}
                                {/*</div>*/}
                            {/*</NavLink>*/}
                        {/*}*/}

                    </div>
                    <br /> <br />
                    <table className="bordered">
                        <thead>
                        <tr>
                            {/*<th>Rank</th>*/}
                            <th>Team Name</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                leaderBoard.map((team,index) => {
                                return <TeamRow key = {index} data = {team} index={index} />
                                })
                            }

                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        );
    }
}


TeamRow.propTypes = {
    data : PropTypes.element.isRequired,
};

export default Leaderboard;