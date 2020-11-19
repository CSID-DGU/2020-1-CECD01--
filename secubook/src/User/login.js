import React, { Component } from 'react';
import './login.css'
import axios from 'axios';
import cookie from 'react-cookies';

class Login extends Component {

    state = {
        password: '',
        id: '',
        token: ''
    };

    confirm = (e) => {

        /*
        return axios.post('http://3.35.220.252/auth/login', { email: this.state.id, password: this.state.password }, {
            withCredentials: true,
        })
            .then(
                function (response) {
                    console.log(response.headers['set-cookie'])
                    //document.location.href = "/"
    
                }
            );
    */
        //axios.post('http://3.35.220.252/auth/login', { email: this.state.id, password: this.state.password }, { withCredentials: true, }
        axios.post('http://localhost:8001/auth/login', { email: this.state.id, password: this.state.password }, { withCredentials: true, }
        )
            .then(function (response) {
                alert("확인");

                console.log(response);
                document.location.href = "/";
            })
            .then(function (response) {
                cookie.save("ha", "ha");
            })
            .then(function (response) {
                alert(cookie.load("ha"));
            })
            .then(function (response) {
                alert(cookie.load("connect.sid"));
            })
            .catch(error => {
                alert("error")
                console.log('error : ', error.response)

                //document.location.href = "/login";
            });

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div id="logreg-forms">

                <div>
                    <h1 className="h3 mb-3 font-weight-normal"><b>로그인</b></h1>
                    <div className="social-login">
                        <div><button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        </div>

                        <div>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                        </div>
                    </div>

                    <p> OR  </p>

                    <input type="id" id="inputId" name="id" value={this.state.id} onChange={this.handleChange} className="form-control" placeholder="아이디" required="" autoFocus="" />
                    <input type="password" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required="" />
                    <br></br>
                    <button className="btn btn-success btn-block" onClick={this.confirm}><i className="fas fa-sign-in-alt"></i> Sign in</button>
                    {/*<a href="#" id="forgot_pswd">Forgot password?</a>*/}
                    <hr></hr>
                    <button className="btn btn-primary btn-block" type="button" id="btn-signup" ><i className="fas fa-user-plus"></i> Sign up New Account</button>
                </div>


                <br></br>
            </div>
        )
    }

}

export default Login;