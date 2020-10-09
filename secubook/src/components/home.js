import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import jwt_decode from 'jwt-decode';

import Header from './header.js';

class Home extends Component {


    render() {
        if (localStorage.usertoken === "[object Object]") {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <Header />
            </div>
        )
    }
}


export default Home;

