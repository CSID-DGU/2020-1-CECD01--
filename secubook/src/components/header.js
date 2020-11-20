import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

import cookie from 'react-cookies';

class Header extends Component {


    state = {
        response: ''
    };

    componentDidMount() {
        //cookie.save("user", "");
        console.log(this.state.response)
        //axios.get("http://3.35.220.252/", { withCredentials: true, })
        axios.get("http://localhost:8001/", { withCredentials: true, })
            .then((resp) => {
                //cookie.save("user", "");

                if (resp.data.user == undefined) {
                    cookie.save("user", "")
                }
                else {
                    cookie.save("user", resp.data.user.name)
                }
                this.state.response = resp.data.user;
            }
            ).catch((err) => {
                console.log(err)
            })
    }

    logout = (e) => {
        //axios.get("http://3.35.220.252/auth/logout", { withCredentials: true, })
        axios.get("http://localhost:8001/auth/logout", { withCredentials: true, })
            .then((resp) => {
                //console.log(resp.data);
                cookie.save("user", "")
                document.location = "/"
            }
            ).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/"> SecuBook</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    {(cookie.load("user") === "") ? (<ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Learn</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/level" className="nav-link" >Level</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/problem" className="nav-link" >Problem</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/talk" className="nav-link" >Talk</Link>
                        </li>

                        <li className="right-menu">
                            <Link to="/login" className="nav-link" >로그인</Link>
                        </li>
                        <li>
                            <Link to="/register" className="nav-link" >회원가입</Link>
                        </li>
                    </ul>) : (<ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Learn</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/level" className="nav-link" >Level</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/problem" className="nav-link" >Problem</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/talk" className="nav-link" >Talk</Link>
                        </li>

                        <li className="right-menu">
                            <Link to="/mypage" className="nav-link" > {cookie.load("user")} 님</Link>
                        </li>
                        <li>
                            <div onClick={this.logout} className="nav-link" >로그아웃</div>
                        </li>

                    </ul>)}
                </div>


            </nav>
        )
    }

}

export default Header;