import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'

class Problem_right extends Component {

    render() {
        return (
            <div>
                <div class="row">

                    <div className="box">
                        <b className="bold">
                            <div className="problem_num">1234</div>
                            <div className="problem_name">문제 이름</div>
                            <div className="problem_complete">완료</div>
                        </b>
                        <div className="problem_type">크로스사이트스크립트</div>
                        <br></br>
                        <div>
                            <div className="problem_solve">235명 완료</div>
                            <div className="problem_percentage">정답률 65%</div>
                        </div>
                    </div>

                    <div className="box">
                        <b className="bold">
                            <div className="problem_num">1234</div>
                            <div className="problem_name">문제 이름</div>
                        </b>
                        <div className="problem_type">크로스사이트스크립트</div>
                        <br></br>
                        <div>
                            <div className="problem_solve">235명 완료</div>
                            <div className="problem_percentage">정답률 65%</div>
                        </div>
                    </div>

                    <div className="box">
                        <b className="bold">
                            <div className="problem_num">1234</div>
                            <div className="problem_name">문제 이름</div>
                        </b>
                        <div className="problem_type">크로스사이트스크립트</div>
                        <br></br>
                        <div>
                            <div className="problem_solve">235명 완료</div>
                            <div className="problem_percentage">정답률 65%</div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default Problem_right;