import React from 'react';
import './round1.css';
import axios from 'axios';
import FormData from 'form-data';


class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        file : '',
        fileSubmitDisabled:true,
    }
  }

  handlefileChange = (event) =>{
    this.setState({file: event.target.files[0],fileSubmitDisabled:false});
  }
  handleSubmit = (quesid) =>{

    const formData = new FormData();
    formData.append('que', 1);
    formData.append('round','one');
    formData.append('file',this.state.file);
    {/*formData.append('token',localStorage.getItem('token'));*/}
    console.log(localStorage.getItem('token'));

    axios.post('https://reverse-coding-acm.herokuapp.com/question/upload',
          formData,{
            headers: {
              'Authorization' : 'Bearer '+localStorage.getItem('token')
            }
          }
        ).then((response)=> {
          console.log(response);
        })
        .catch((err)=> {
          console.log(err);
          console.log(formData);
        })

  }
  downloadexe = ()=> {

  }
  downloadjar = () => {

  }

  render(){
    return(
        <div>
          <p style={{fontSize:'21px',fontWeight: 'bold'}}>{this.props.questxt}</p>
           <div className="row">
               <div className="col l6 m12 s12 questionfiles">
                 <button className="btn waves downloadbtn" style={{color: '',display: '-webkit-box'}}>Download</button>
                  <button className="btn waves exnja" onClick={this.downloadexe}>.exe</button>&nbsp;
                  <button className="btn waves exnja" onClick={this.downloadjar}>.jar</button>

               </div>
               <div className="col l6 m7 s12">
                 <div className="row">
                   <div className="file-field input-field col s8">
                     <div className="btn">
                       <span>File</span>
                       <input type="file" onChange={this.handlefileChange} />
                     </div>
                     <div className="file-path-wrapper">
                       <input className="file-path validate" type="text" />
                     </div>
                   </div>
                   <div className="col s4">
                     <button disabled={true} className={this.state.fileSubmitDisabled?"disabled":""} id="uploadbtn" onClick={this.handleSubmit}>Upload</button>
                   </div>
                 </div>
               </div>
             </div>
          </div>
    );
  }
}
{/* now here all individual question details are avaialable in props
  we have to just upload the question using that details  */}
export default Question;
