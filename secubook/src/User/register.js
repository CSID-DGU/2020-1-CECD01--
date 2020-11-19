import React, { Component } from 'react';
import './register.css'
import axios from 'axios';

class Register extends Component {
    state = {
        checked: false,
        password: '',
        passwordConfirrm: '',
        id: '',
        name: ''
    };

    handleCheck = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    confirm = (e) => {

        if (this.state.name === '') {
            alert("이름을 입력해주세요.");
            e.preventDefault();
        }
        else if (this.state.id === '') {
            alert("아이디를 입력해주세요.");
            e.preventDefault();
        }
        else if (this.state.password === '') {
            alert("비밀번호를 입력해주세요.")
            e.preventDefault()
        }
        else if (this.state.password !== this.state.passwordConfirrm) {
            alert("비밀번호가 서로 다릅니다.");
            e.preventDefault();
        }
        else if (!this.state.checked) {
            alert("개인정보 활용을 동의해주세요.");
            e.preventDefault();
        }
        else {
            axios.post('http://localhost:8001/auth/join', { name: this.state.name, email: this.state.id, password: this.state.password }, { 'Content-Type': "application/x-www-form-urlencoded" })
                .then(function (response) {
                    alert("확인");
                    console.log(response);
                    document.location.href = "/login";
                })
                .catch(error => {
                    //if (error.response.status === 409) {
                    //alert("이미 있는 아이디입니다.")
                    //}
                    console.log('error : ', error.response);
                });
        }
    }

    render() {
        return (
            <div id="logreg-forms">
                <div>
                    <h1 className="h3 mb-3 font-weight-normal"><b>회원가입</b></h1>
                    <div className="social-login">
                        <div><button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        </div>

                        <div>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>

                        </div>
                    </div>

                    <p> OR  </p>
                    <input type="text" id="inputName" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="이름" required="" autoFcus="" />
                    <input type="id" id="inputId" name="id" value={this.state.id} onChange={this.handleChange} className="form-control" placeholder="아이디" required="" />
                    <input type="password" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required="" />
                    <input type="password" id="inputPassword" name="passwordConfirrm" value={this.state.passwordConfirrm} onChange={this.handleChange} className="form-control" placeholder="Password 확인" required="" />

                    <br></br>

                    <input type="checkbox" name="checked" value={this.state.checked} onChange={this.handleCheck}></input>   이용약관 및 개인정보 처리방침에 동의합니다.
                    <button className="btn btn-success btn-block" onClick={this.confirm}><i className="fas fa-sign-in-alt"></i>Sign up</button>
                    {/*<a href="#" id="forgot_pswd">Forgot password?</a>*/}
                </div>
                <br></br>
            </div>
        )
    }

}

export default Register;