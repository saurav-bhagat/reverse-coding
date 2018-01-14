import React from 'react';
import './Adminstyle.css' ;
import axios from 'axios';


const TeamDetails = (props) => {
  return(
      <div className="team-details">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repudiandae?
              {props.thisDetails.map((item)=>{
                  return <a href={``} >
                      <button className="btn">
                          {item}
                      </button>
                  </a>
              })}

          </p>
      </div>
  );
};
class TeamName extends React.Component {
    constructor(props) {
        super(props);
        this.handleTeamClick = this.handleTeamClick.bind(this);
        this.state = {
            team1 : ['path1','path2'],
            clickTrue : false
        }
    }

    handleTeamClick = () => {
        console.log(this.props.teamName)
        // axios.post('http://139.59.20.9:1337/team/marked', {
        //     username: 'akshit',
        //     password: '1516',
        //     teamname: 'akshit'
        // })
        // .then((response) =>{
        //     alert(response);
        //      let person = response.data;
                //let team1=[]
        //     for (x in person) {
        //         team1.push(person[x])
               //     }
                //this.setState({team1});
            //
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            if(this.state.clickTrue){
                this.setState({
                    clickTrue: false
                })
            }
            else{
                this.setState({
                    clickTrue : true

                })
            }
            // here send post request to get the team details and set the state according to it.
            // and then send the props to Team component
    };

    render() {
        return(
            <div className="team-details-wrapper">
                <div className="a-team-btn">
                    <button className="btn" onClick={this.handleTeamClick}>{this.props.teamName}</button>
                </div>
                <br />
                {
                   this.state.clickTrue && <TeamDetails thisDetails={this.state.team1} />
                }
            </div>
        );
    }
}


class AdminPortal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submitText : 'submit',
            teamDetails: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.post("http://139.59.20.9:1337/team/getdetails",{
            username: 'akshit',
            password : '1516'
        })
            .then(res => {

                for(let i=0; i< res.data.teams.length ;i++)
                {
                    this.state.teamDetails.push(res.data.teams[i].teamname);
                }

                this.setState({});

            })
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.setState({
           submitText: 'submitting..'
        });
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        formData['username'] = 'akshit';
        formData['password'] = '1516';
        axios.post('http://139.59.20.9:1337/team/putscore', {
            username: formData.username,
            password: formData.password,
            que     : formData.que,
            teamname: formData.teamname,
            score   : formData.score
        })
            .then((response) =>{
                this.setState({
                    submitText: 'submit'
                });
                alert(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let submitbtn = {
            marginBottom:'10px',
            backgroundColor:'#0D47A1',
            padding:'0 1em',
            marginRight:'20px',
            marginLeft:'24px',
            width:'-webkit-fill-available'
        }
        return(
            <div className="adminportal-wrapper">
                <div className="put-score-form z-depth-5">
                    <h4 style={{color:'#0d47a1',textAlign:'center'}}>Put Score</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="questionNumber" type="text" className="questionNumber" name="que" ref="que" />
                                <label htmlFor="questionNumber">Question Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="teamName" type="text" className="teamName" name="teamname" ref="teamname" />
                                <label htmlFor="teamName">Team Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="score" type="text" className="score" name="score" ref="score" />
                                <label htmlFor="score">Score</label>
                            </div>
                        </div>

                        <input className="btn waves-effect waves-light center-align" type="submit" value={this.state.submitText} name="action"
                               style={submitbtn} />
                    </form>
                </div><br /> <br />
                <div className="row">

                        {
                            this.state.teamDetails.map((t,index) => {
                                return  <TeamName teamName={t} key={index} />
                            })
                        }

                </div>
            </div>
        );
    }
}

export default AdminPortal;
