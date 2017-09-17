import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import tick from './try.js';
import App from './App';
import Section1 from './components/homepage/section1';
import Section2 from './components/homepage/section2';
import Section3 from './components/homepage/section3';
import Faq from './components/userpage/faq';
import Round1 from './components/userpage/round1';
import Round2 from './components/userpage/round2';
import Logout from './components/userpage/logout';
import {createBrowserHistory} from 'history';




// ReactDOM.render(<App txt="This is a props!!" cat={5} />, document.getElementById('root'));
class Homepage extends React.Component{
  render(){
    return(
      <div>
        <Section1 />
        <Section3 />
        <Section2 />
      </div>

    );
  }
}

class Main extends React.Component {
  render(){
    return(
      <BrowserRouter >
        {/*{localStorage.getItem('token')?*/}
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/faq' component={Faq} />
          <Route path='/round1' component={Round1} />
          <Route path='/round2' component={Round2} />
          <Route path='/logout' component = {Logout} />
          {/*<Route exact path='/' component={Homepage} />*/}
        </div>
        {/*:
        <div>
         keep homepage route here by removinf the exact keyword
        </div>
      */}
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
{/*  <Section1 />
  <Section2 />
  <Section3 />*/}
