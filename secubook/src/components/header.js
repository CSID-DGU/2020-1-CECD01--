import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

class Header extends Component {

    state = {
        name: '',
    };

    componentDidMount() {
        alert("들어옴");
        axios.get("http://3.35.220.252/")
            .then((resp) => {
                console.log(resp.data);
            }
            ).catch((err) => {
                console.log(err)
            })
    }

    logout = (e) => {
        axios.get("http://3.35.220.252/auth/logout")
            .then((resp) => {
                console.log(resp.data);
            }
            ).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/"><img className="logo" src="../assets/logo.png"></img> 서비스 이름</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    {this.state.name !== "테스트" ? (<ul className="navbar-nav mr-auto">
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
                            <Link to="/mypage" className="nav-link" >{this.state.name} 님</Link>
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