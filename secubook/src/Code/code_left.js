import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './code.css'
import cookie from 'react-cookies';

class Code_left extends Component {

    render() {
        return (
            <div className="left">
                {cookie.load("content")}
                <img className="image" src={cookie.load("image")} ></img>
            </div>

        )
    }

}

export default Code_left;