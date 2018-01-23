import React from 'react';
import './round1.css';
import axios from 'axios';
import FormData from 'form-data';
import classNames from 'classnames';



class Question extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        file : '',
        fileSubmitDisabled:true,
        showit: true,
        isPressed : false,
        uploadText: 'upload',
        ifUploaded : ''
    }

  }
    showexeandjar = () => {
        this.setState({showit:false,isPressed:true})
    };
    handlefileChange = (event) =>{
        let name 	= event.target.value;
        name 		= name.split(".");
        let extension 	= name.pop();
        if(extension == 'cpp' || extension == 'py' || extension == 'java' || extension == 'c')
        {
            this.setState({file: event.target.files[0],fileSubmitDisabled:true});
        }
        else{

            alert("wrong file type");
            this.setState({fileSubmitDisabled:true});
        }


    };
    handleSubmit = (quesid) =>{
        if(!this.state.fileSubmitDisabled){
            this.setState({uploadText: 'uploading...'});
            const formData = new FormData();
            formData.append('que', this.props.quesid);
            // formData.append('round','one');
            formData.append('upload',this.state.file);
            {/*formData.append('token',localStorage.getItem('token'));*/}

            axios.post('http://139.59.20.9:1337/question/upload',
                formData,{
                    headers: {
                        'Authorization' : 'Bearer '+localStorage.getItem('token')
                    }
                }
            ).then((response)=> {
                console.log(response);
                this.setState({uploadText: 'upload'});
                //make event.target.value=""
                this.refs.fileInput.value="";
                this.setState({ifUploaded: 'uploaded'})
            })
                .catch((err)=> {
                    console.log(err);
                    console.log(formData);
                })
        }
        else{
            alert("Select file first");
        }

  };


  render(){
      const hamburgerButton=classNames({
          "is-active":this.state.showit,
          "exe-and-jar-div": this.state.isPressed
      });
      console.log(`key is ${this.props.quesid} and corresponding question is ${this.props.exe}`);
    return(
        <li>
            <div className="collapsible-header" style={{fontSize:'21px',fontWeight: 'bold'}}><i className="material-icons">add</i>{this.props.questxt}</div>
            <div className="collapsible-body">
                <div className="row">
                    <div className="col l6 m12 s12 questionfiles">
                        <div style={{textAlign:'center'}} >
                            <button className="btn waves downloadbtn" style={{color: '',display: '-webkit-box'}} onClick={this.showexeandjar}>Download</button>
                        </div>

                             <div className={hamburgerButton}>
                                 <br />
                                <a className="btn waves exnja" href={this.props.exe} download>win</a>&nbsp;
                                <a className="btn waves exnja" href={this.props.jar} download>mac</a>&nbsp;
                                 <a className="btn waves exnja" href={this.props.linux} download>linux</a>
                            </div>

                    </div>
                    <div className="col l6 m7 s12 upload-div-wrapper">
                        <div className="row">
                            <div className="file-field input-field col s8">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" onChange={this.handlefileChange} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" required />
                                </div>
                            </div>
                            <div className="col s4">
                                <button className={this.state.fileSubmitDisabled?"disabled":""} id="uploadbtn" onClick={this.handleSubmit}>{this.state.uploadText}</button>
                            </div>
                        </div>
                        <span style={{position:'relative',bottom:'20px',float:'right',right:'80px'}}>{this.state.ifUploaded}</span>
                    </div>
                </div>
            </div>
        </li>
    );
  }
}
{/* now here all individual question details are avaialable in props
  we have to just upload the question using that details  */}

export default Question;
