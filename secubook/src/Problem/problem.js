import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'
import Header from '../components/header.js'
import Left from './problem_left.js'
import Right from './problem_right.js'

class Problem extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">

                    <div className="problem_expalin">Problem 메뉴에 대한 설명</div>
                    <div className="problem_block">
                        <div className="problem_left"><Left /></div>
                        <div className="problem_right"><Right /></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Problem;