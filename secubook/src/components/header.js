import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header() {

    function signout() {
        localStorage.setItem('usertoken', "[object Object]");

        window.location = '/';
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#"><img className="logo" src="../assets/logo.png"></img> 서비스 이름</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">

                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link" >Learn</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/home/level" className="nav-link" >Level</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/home/problem" className="nav-link" >Problem</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/home/talk" className="nav-link" >Talk</Link>
                    </li>
                    <li className="right-menu">
                        <Link to="/login" className="nav-link" >로그인</Link>
                    </li>
                    <li>
                        <Link to="/register" className="nav-link" >회원가입</Link>
                    </li>
                </ul>

                { /** <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Username" />
                    <input className="form-control mr-sm-2" type="text" placeholder="Password" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={signout}>Sign Out</button>
                </form>*/}




            </div>


        </nav>
    )
}

export default Header;