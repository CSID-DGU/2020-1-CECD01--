import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './code.css'
import Header from '../components/header.js'
import Left from './code_left.js'
import Right from './code_right.js'

class Code extends Component {

    render() {
        return (
            <div>
                <div className="connection-wrap">
                    <div className="code_block">
                        <div className="code_left"><Left /></div>

                        <div className="code_right"><Right /></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Code;