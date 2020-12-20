import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'

class Problem_left extends Component {

    state = {
        category: [false, false, false, false, false, false],
        level: [false, false, false]
    };

    handleCategory = (e) => {
        const { category } = this.state;
        if (category[e.target.id]) {
            category[e.target.id] = false;
        }
        else {
            category[e.target.id] = true;
        }
        alert(category);
    }

    handleLevel = (e) => {
        const { level } = this.state;
        if (level[e.target.id]) {
            level[e.target.id] = false;
        }
        else {
            level[e.target.id] = true;
        }
        alert(level);
    }

    render() {
        return (
            <div className="left">
                <div>
                    <b>이승민</b>님<br></br><br></br>
                    <div className="left_left">
                        순위 <br></br>
                    해결한 문제 수 <br></br>
                    획득한 점수 <br></br>
                        <hr></hr>
                    </div>
                    <div className="left_right">
                        10 <br></br>
                    50 <br></br>
                    100 <br></br>
                        <hr></hr>
                    </div>
                </div>
                <div className="left_category">
                    <b>카테고리</b><br></br><br></br>
                    <div id="0" onClick={this.handleCategory}>SQL 인젝션 (SQL Injection)</div>
                    <div id="1" onClick={this.handleCategory}>취약한 인증 <br></br>(Broken Authentication)</div>
                    <div id="2" onClick={this.handleCategory}>크로스 사이트 스크립팅 <br></br>(Cross-Site Scripting)</div>
                    <div id="3" onClick={this.handleCategory}>취약한 접근 제어 <br></br>(Broken Access Control)</div>
                    <div id="4" onClick={this.handleCategory}>보안 설정 오류 <br></br>(Security Misconfiguration)</div>
                    <div id="5" onClick={this.handleCategory}>민감 데이터 노출 <br></br>(Sensitive Data Exposure)</div>
                </div>
                <hr></hr>
                <div className="left_category">
                    <b>난이도</b><br></br><br></br>
                    <div id="0" onClick={this.handleLevel}>Level 1</div>
                    <div id="1" onClick={this.handleLevel}>Level 2</div>
                    <div id="2" onClick={this.handleLevel}>Level 3</div>
                </div>
            </div>

        )
    }

}

export default Problem_left;