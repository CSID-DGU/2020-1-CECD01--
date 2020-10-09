import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './level.css'
import Header from '../components/header.js'

class Level extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">
                    <h1>Level</h1>

                </div>
            </div>
        )
    }

}

export default Level;