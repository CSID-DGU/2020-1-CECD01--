import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './level.css'
import Header from '../components/header.js'
import image from '../assets/test.png'

class Level extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">
                    <div className="level_explain">
                        <div>Level 메뉴에 대한 설명</div>
                    </div>

                    <div className="level" id="1">
                        <div className="level_name">LEVEL 1</div>
                        <br></br>
                        <div className="level_detail">LEVEL 1에 해당되는 내용 </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="2">
                        <div className="level_name">LEVEL 2</div>
                        <br></br>
                        <div className="level_detail">LEVEL 2에 해당되는 내용 </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="3">
                        <div className="level_name">LEVEL 3</div>
                        <br></br>
                        <div className="level_detail">LEVEL 3에 해당되는 내용 </div>
                    </div>
                </div >
            </div >
        )
    }

}

export default Level;