import React from 'react';
import './section1.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import  mainlogo from './../../images/logo.gif';
import dots from './../../images/dots.png';
import axios from 'axios';
import line1 from './../../images/line1.png';
import line2 from './../../images/line2.png';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';



class Section1 extends React.Component{
  state={
      reversed:[true,true,true,true,true,true,true],
      loginValue : "sign in"
  };
  constructor(props){
    super(props);
    let reverseLetter = (index) => {
      if(index>=7)return;
      let newRev = [...this.state.reversed];
      newRev[index] = false;
      this.setState({reversed: newRev});
      setTimeout(()=>reverseLetter(index+1),1000);
    }
    setTimeout(()=>reverseLetter(0), 0);
  }
  static contextTypes = {
      router: React.PropTypes.object.isRequired
    }
  handleSubmit=(e)=> {
    e.preventDefault();
    this.setState({
       loginValue: "signing in..."
    });
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    axios.post('http://139.59.20.9:1337/team/login', {
      username: formData.username,
      password: formData.password
    })
    .then((response) =>{
        this.setState({
            loginValue: "sign in"
        });
        localStorage.setItem('token',response.data.token);
      // this.props.history.push('/welcome');
        window.location.reload();

    })
    .catch(function (error) {
      console.log(error);
      alert("Enter valid username and password");
    });

  }
  componentDidMount () {
   let ele = this.refs.line2;
   ele.style.display = 'none';
   setTimeout(function(){

     ele.classList.add("fadeInUp");
     ele.style.display = 'inline';
   },1000)

 }

  render(){
    let submitbtn = {
      marginBottom:'10px',
      backgroundColor:'#0D47A1',
      padding:'0 1em',
      marginRight:'20px',
      marginLeft:'24px',
      width:'-webkit-fill-available'
    }
    return(
      <div>
        <div className="section1">
          <div id="imgandtextdiv" className="center" style={{position:'relative'}}>
            <img src= {mainlogo} alt="Loading" id="mainlogo" />
            <span id="headtext"><span id="tobemirrored">
              <span className={this.state.reversed[0] && "mirror"} id="let1">R</span>
              <span className={this.state.reversed[1] && "mirror"} id="let2">E</span>
              <span className={this.state.reversed[2] && "mirror"} id="let3">V</span>
              <span className={this.state.reversed[3] && "mirror"} id="let4">E</span>
              <span className={this.state.reversed[4] && "mirror"} id="let5">R</span>
              <span className={this.state.reversed[5] && "mirror"} id="let6">S</span>
              <span className={this.state.reversed[6] && "mirror"} id="let7">E</span>

              </span> &nbsp;<span id="coding">CODING</span>
              <div className = "midText">
                <p style={{fontSize:'18px',marginTop: '2px'}}><span>3,000 prize</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>14 Hours</span>
                 </p>
              </div>

          </span>



          </div>
          {/*yhan pe the midtext div wala*/}

          <br />
          <div className="row">
            <div className="col m4 hide-on-small-only">
              <ReactCSSTransitionGroup transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={0}
                  transitionEnter={false}
                  transitionLeave={false}>
                <img src={dots} className="dotsimage" />
                <img src={line1} className="line1 animated fadeInLeft" />
                <img src={line2} ref="line2" className="line2 animated " />
              </ReactCSSTransitionGroup>
            </div>
            <div className="col m8">
              <div className="left">
                <div className="cardsty card">
                  <form onSubmit={this.handleSubmit}>
                    <h5 style={{color:'#0D47A1',textAlign:'center'}}>Login</h5>
                    <div id="afterlogin">
                     <div className="row">
                       <div className="input-field col s12">
                         <input id="username" type="text" className="validate" name="username" ref="username" required />
                         <label htmlFor="username">Username</label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="input-field col s12">
                         <input id="password" type="password" className="validate" name="password" ref="password" required />
                         <label htmlFor="password">Password</label>
                       </div>
                     </div>
                   </div>
                      <button type="submit" className="btn lo-btn z-index-5 center-align" style={submitbtn}>
                          {this.state.loginValue}
                      </button>
                      {/*<h2 style={{color:'#0D47A1',textAlign:'center'}}>*/}
                          {/*Welcome!<br /> <br /> Event will start at 10:00am*/}
                      {/*</h2>*/}
                   {/*<input className="btn waves-effect waves-light center-align" type="submit" value= name="action"*/}
                     {/*style={submitbtn} />*/}

                 </form>
                </div>
              </div>
              <a className="hide-on-small-only downbtn btn-floating btn-large waves-effect waves-light z-depth-5" href="#section3"><i className="material-icons">keyboard_arrow_down</i></a>
            </div>{/*col s8 end*/}
          </div> {/*row div end*/}

        </div>
 <br />
      </div>
    );
  }
}

Section1.contextTypes = {
    router : React.PropTypes.object
}



export default withRouter(Section1);
