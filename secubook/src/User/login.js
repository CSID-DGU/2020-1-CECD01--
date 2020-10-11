import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    goRegister(e) {
        document.location.href = "/register"
    }

    render() {
        return (
            <div id="logreg-forms">
                <form class="form-signin">

                    <h1 className="h3 mb-3 font-weight-normal"><b>로그인</b></h1>
                    <div className="social-login">
                        <div><button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        </div>

                        <div>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>

                        </div>
                    </div>

                    <p> OR  </p>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />

                    <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
                    {/*<a href="#" id="forgot_pswd">Forgot password?</a>*/}
                    <hr></hr>
                    <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={this.goRegister}><i className="fas fa-user-plus"></i> Sign up New Account</button>
                </form>



                <br></br>
            </div>
        )
    }

}

export default Login;