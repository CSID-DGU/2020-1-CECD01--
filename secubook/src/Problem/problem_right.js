import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './problem.css'
import axios from 'axios';

class Problem_right extends Component {
    state = {
        list: [],
    };


    componentDidMount() {
        axios.get("http://localhost:8001/problem")
            .then((resp) => {
                for (var i = 0; i < resp.data.results.length; i++) {
                    this.state.list.push({
                        id: resp.data.results[i].id, title: resp.data.results[i].title, category: resp.data.results[i].category,
                        level: resp.data.results[i].level, cntOfSolve: resp.data.results[i].cntOfSolve, cntOfRun: resp.data.results[i].cntOfRun,
                        timeAverage: resp.data.results[i].timeAverage
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    move = (e) => {

      

        document.location.href="/problem/content"
    }
    //난이도 추가
    render() {
        const listList = this.state.list.map(

            (list) => (
                <div className="box">
                    <b className="bold">
                        <div className="problem_num">{list.id}</div>
                        <div className="problem_name">{list.title}</div>
                    </b>
                    <br></br>
                    <div>
                        <div className="problem_solve">{list.cntOfSolve}</div>
                        <div className="problem_percentage">정답률 </div>
                    </div>
                </div>
            )
        );
        return (
            <div>
                <div class="row">
                    <div className="box" onClick={this.move}>
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

                </div>
            </div >
        )
    }

}

export default Problem_right;