import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_3_ extends Component {

    state = {
        check: 0,
        re1: '',
        answer1_1: false,
        answer1_2: false,

    };

    submit = (e) => {

        if (this.state.re1 === "답이 맞았습니다.") {

            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "시스템-자원-접근-및-명령어-수행-입력값-검증", type: 0 }, { withCredentials: true, }
            )
                .then(function (response) {
                    console.log(response.data.results);
                    document.location.href = "/";
                })
                .catch(error => {
                    console.log('error : ', error.response)

                    //document.location.href = "/login";
                });

        }

    }

    check = (e) => {

        if (this.state.answer1_1 === true && this.state.answer1_2 === false) {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re1: "답이 틀렸습니다."
            });
        }

        if (this.state.re1 === "답이 맞았습니다.") {

            this.setState({ check: 1 });
        }
        else {
            this.setState({ check: 0 });
        }

    }

    handleCheck = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="connection-wrap-content">

                    <div className="problem">
                        <div className="problem_title">1. 공격자가 입력값 조작을 통해 시스템이 보호하는 자원에 임의로 접근하여 자원의 수정.삭제, 시스템 정보누출, 시스템 자원 간 충돌로 인한 서비스 장애 등을 <br></br>유발시킬 수 있는 취약점 사레는? </div>
                        <br></br>
                        <div id="problem1">
                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} />  경로조작 및 자원삽입 <br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} />  입력값을 조작하여 허가되지 않은 명령 실행 <br></br>
                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>
                    </div>

                    {(this.state.check == 0) ? (<button className="problem_button" onClick={this.check}>채점하기</button>) : <button className="problem_button" onClick={this.submit}>제출하기</button>}

                </div>


            </div >
        )
    }

}

export default Learn_3_;