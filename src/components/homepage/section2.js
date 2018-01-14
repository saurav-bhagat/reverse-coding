import React from 'react';
import './section2.css';
import acmlogo from './../../images/acm-white1.png';
import footerrc from './../../images/footerrc.png';
import vitlogo from './../../images/vitlogo1.png';
import codechef from './../../images/codechef.png';
import tech from './../../images/tech2.png';

class Section2 extends React.Component {
  render(){
    return(
      <div>
        <div className="section2">
          <Sponsors />
            <br />
          <Footer />
        </div>
      </div>
    );
  }
}

const Sponsors = () => {
    return(
        <div>
            <div id="studentorg" className="center">
                <span id="headd">SPONSORS</span>
            </div>
            <div className="sponsor-wrapper">
                <div className="row">
                    <div className="col s12 m6">
                        <img src={codechef} className="codechef-logo" />
                    </div>
                    <div className="col s12 m6">
                        <img src={tech} className="tech-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
};

class Footer extends React.Component {
  render(){
    return(
      <div>

        <div className="row " id="footer">
          <div className="col m4 left hide-on-med-and-down">
            <img src={acmlogo} alt="ACM" id="acmlogo" />
          </div>
          <div className="col m4 center-align hide-on-med-and-down" id="footermid">
            <a href="https://github.com/ACMVITU"><i className="fa fa-github fa-2x" id="gitfooter" aria-hidden="true"></i></a>
            <img src={footerrc} alt="reverse" id="footerrc" />
            <a href="https://facebook.com/acmvitu"><i className="fa fa-facebook fa-2x" id="fbfooter" aria-hidden="true"></i></a>

          </div>
          <div className="col m4 hide-on-med-and-down">
            <img src={vitlogo} alt="gravita" id="gravita" className="right" />
          </div>

          <div className="col s12 center show-on-small hide-on-med-and-up">
            <img src={acmlogo} alt="ACM" id="acmlogo" />
          </div>
          <div className="col s12 center-align show-on-small  hide-on-med-and-up" id="footermid">
            <a href="https://github.com/ACMVITU"><i className="fa fa-github fa-2x" id="gitfooter" aria-hidden="true"></i></a>
            <img src={footerrc} alt="reverse" id="footerrc" />
            <a href="https://facebook.com/acmvitu"><i className="fa fa-facebook fa-2x" id="fbfooter" aria-hidden="true"></i></a>

          </div>
          <div className="col s12 center-align">
            <img src={vitlogo} alt="gravita" id="gravita" className="show-on-small hide-on-med-and-up"
              style={{marginLeft: 'auto',marginRight : 'auto'}} />
          </div>

        </div>
      </div>
    );
  }
}
class Photoshow extends React.Component {
  render(){
    return(
      <div className="card col m5ths s6 orgcard z-depth-5">
        <div className="card-image">
          <img className="orgimage responsive-img" alt="" src={this.props.imgsrc} />
        </div>
        <div className="card-content">
          <span>{this.props.imgname}</span>
        </div>
      </div>
    );
  }
}
  {/*Here we will collect the source and text of images and will send it as props while calling that component*/}
class Studentorg extends React.Component {


  constructor(){
    super();
    this.state = {
      imgsrc : ['http://lorempixel.com/190/190','http://lorempixel.com/190/190','http://lorempixel.com/190/190','http://lorempixel.com/190/190','http://lorempixel.com/190/190'],
      imgname : ['name1','name2','name3','name4','name5']

    }
    console.log(this.state.imgsrc);
  }
  render() {
    let avtaars = this.state.imgsrc;
    let name = this.state.imgname;
    return(
      <div>
        <div id="studentorg" className="center">
            <span id="headd">STUDENT ORGANIZER</span>
        </div>
          <div id="photosection">
            <div className="row center">
              {/*basically, here i have to write map function which will render photoshow component 5 times

              */}<br/>
              {avtaars.map((avtaar,i)=> <Photoshow key={i} imgname={name[i]} imgsrc={avtaar} />)}
              
            </div>
          </div>
      </div>

    );
  }
}

export default Section2;
