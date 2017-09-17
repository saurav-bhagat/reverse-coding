import React from 'react';
import {
  withRouter
} from 'react-router-dom';



class Logout extends React.Component{
  constructor(){
    super();
  }
  componentWillMount() {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }
  render(){
    return(
      <p>Login again</p>
    );
  }
}

export default withRouter(Logout);
