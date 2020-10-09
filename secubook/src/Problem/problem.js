import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'
import Header from '../components/header.js'

class Problem extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">
                    <h1>Problem</h1>

                </div>
            </div>
        )
    }

}

export default Problem;