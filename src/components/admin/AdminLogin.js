import React from 'react';
import './Adminstyle.css';
import axios from 'axios';

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit=(e)=> {
        e.preventDefault();
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        axios.post('http://139.59.20.9:1337/user/login', {
            username: formData.username,
            password: formData.password
        })
            .then((response) =>{
                if(response)
                    this.props.history.push('/adminportal');
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
            <div>
                <h3 className="adminHead">ADMIN LOGIN</h3>
                <div className="adminForm">
                    <form onSubmit={this.handleSubmit}>
                        <h5 style={{color:'#ffffff',textAlign:'center'}}>Login</h5>
                        <div id="">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="adminUsername" type="text" className="adminValidate" name="username" ref="username" />
                                    <label htmlFor="adminUsername">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="adminPassword" type="text" className="adminValidate" name="password" ref="password" />
                                    <label htmlFor="adminPassword">Password</label>
                                </div>
                            </div>
                        </div>
                        <input className="btn waves-effect waves-light center-align" type="submit" value="Sign in" name="action"
                           style={submitbtn} />

                    </form>
                </div>
            </div>
        );
    }
}

export default AdminLogin;