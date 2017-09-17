import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt : "This is a state text",
      visible: false
    }
    // setTimeout(()=>{
    //   setState({visible: true});
    // },1000)
  }
  update (e) {
    this.setState({ txt: e.target.value })
  }
  render(){
    return(
      <div>
        <h1>{this.props.txt}</h1>
        <span>{this.props.cat}</span><br />
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
        <Cons />
        {/*{visible && (
          <div>
            sdfgdf
          </div>
        )}*/}
      </div>

    );
  }
}
//to define some properties for our Components we can define as :

App.propTypes = {
  txt : React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
// we can also set default properties of a Component which can be overrided by actual props while giving in rendering.

//use of constructor...
class Cons extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        tt : new Date().toUTCString()
    }
    // this.update = this.update.bind(this);
    setTimeout(this.update.bind(this), 1000);
  }
  update = () => {
    this.setState = {
      tt : new Date().toUTCString()
    }
  }

  render(){
    return(
      <h2>Time is : {this.state.tt} </h2>
    )
  }
}

App.defaultProps = {
  txt : "This is the default text!!!"
}
export default App;
