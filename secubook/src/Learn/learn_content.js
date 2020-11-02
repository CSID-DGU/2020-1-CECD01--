import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'

class Learn_Content extends Component {

    move = (e) => {
        //통신

        document.location.href = "/learn_problem";
    };

    render() {
        return (
            <div>

                <div className="connection-wrap-content">
                    하이
                    <img src={Arrow} onClick={this.move} />
                </div>


            </div>
        )
    }

}

export default Learn_Content;