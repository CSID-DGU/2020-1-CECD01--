import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'
import Header from '../components/header.js'
import Left from './problem_left.js'
import Right from './problem_right.js'


class Problem extends Component {
    state = {
        list: [],
    };


    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">

                    <div className="problem_explain">
                        <b>Problem</b>
                        <br></br><br></br>
                        문제를 통해 시큐어 코딩 실력을 향상시켜보세요.
                    </div>

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