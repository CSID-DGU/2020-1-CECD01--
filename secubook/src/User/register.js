import React, { Component } from 'react';
import './register.css'

class Register extends Component {
    state = {
        checked: false,
        password: '',
        passwordConfirrm: '',
        email: '',
        name: ''
    };

    handleCheck = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }

    handleChange = (e) => {
        //alert(this.setState.checked + ', ' + this.state.password + ', ' + this.state.passwordConfirrm);
        this.setState({ [e.target.name]: e.target.value });
    };

    isEmail = email => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return emailRegex.test(email);
    };

    confirm = (e) => {

        if (this.state.name === '') {
            alert("이름을 입력해주세요.");
            e.preventDefault();
        }
        else if (this.state.email === '') {
            alert("이메일을 입력해주세요.");
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
    }

    render() {
        return (
            <div id="logreg-forms">
                <form class="form-signin" onSubmit={this.confirm}>
                    <h1 className="h3 mb-3 font-weight-normal"><b>회원가입</b></h1>
                    <div className="social-login">
                        <div><button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        </div>

                        <div>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>

                        </div>
                    </div>

                    <p> OR  </p>
                    <input type="text" id="inputName" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="이름" required="" autofocus="" />
                    <input type="email" id="inputEmail" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email address" required="" autofocus="" />
                    <input type="password" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required="" />
                    <input type="password" id="inputPassword" name="passwordConfirrm" value={this.state.passwordConfirrm} onChange={this.handleChange} className="form-control" placeholder="Password 확인" required="" />

                    <br></br>

                    <input type="checkbox" name="checked" value={this.state.checked} onChange={this.handleCheck}></input>   이용약관 및 개인정보 처리방침에 동의합니다.
                    <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i>Sign up</button>
                    {/*<a href="#" id="forgot_pswd">Forgot password?</a>*/}
                </form>
                <br></br>
            </div>
        )
    }

}

export default Register;