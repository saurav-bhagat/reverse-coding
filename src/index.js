import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Section1 from './components/homepage/section1';
import Section2 from './components/homepage/section2';
import Section3 from './components/homepage/section3';
import Faq from './components/userpage/faq';
import Round1 from './components/userpage/round1';
import Round2 from './components/userpage/round2';
import Logout from './components/userpage/logout';
import {createBrowserHistory} from 'history';
import Welcome from './components/Welcome';
import Leaderboard from "./components/Leaderboard";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPortal from "./components/admin/AdminPortal";




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
      const baseUrl = process.env.PUBLIC_URL;
    return(
      <BrowserRouter >
          <div>
              {localStorage.getItem('token') &&
              <Switch>

                  <Route exact path={baseUrl + "/faq"} component={Faq}/>
                  <Route exact path={baseUrl + "/round1"} component={Round1}/>
                  <Route exact path='/round2' component={Round2}/>
                  <Route exact path='/logout' component={Logout}/>
                  <Route exact path={baseUrl + "/leaderboard"} component={Leaderboard}/>
                  <Route exact path={baseUrl} component={Welcome}/>
                   {/*<Route exact path='/' component={Homepage} />*/}
              </Switch>
              }
         {!localStorage.getItem('token') &&
        <div>
            <Route exact path={baseUrl + "/"} component={Homepage} />
            <Route exact path={baseUrl + "/leaderboard"} component={Leaderboard}/>
            {/*<Route exact path={baseUrl + "/baap"} component={AdminLogin}/>*/}
            {/*<Route exact path={baseUrl + "/adminportal"} component={AdminPortal}/>*/}
        </div>
          }
          </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
