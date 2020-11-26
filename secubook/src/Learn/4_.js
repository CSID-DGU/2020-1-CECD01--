import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_4_ extends Component {

    state = {
        check: 0,
        re1: '',
        re2: '',
        answer1: '',
        answer2_1: false,
        answer2_2: false,
        answer2_3: false,
    };

    submit = (e) => {
        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {
            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "HTTP-프로토콜-유효성-검증", type: 0 }, { withCredentials: true, }
            )
                .then(function (response) {
                    document.location.href = "/";
                })
                .catch(error => {
                    console.log('error : ', error.response)

                    //document.location.href = "/login";
                });



        }
        else {
            document.location.href = "/";
        }
    }

    check = (e) => {

        if (this.state.answer1 === "필터링") {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re1: "답이 틀렸습니다."
            });
        }

        if (this.state.answer2_2 === true && this.state.answer2_1 === false && this.state.answer2_3 === false) {
            this.setState({
                re2: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re2: "답이 틀렸습니다."
            });
        }

        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {

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
                        <div className="problem_title">
                            1. 다음 빈칸에 들어갈 단어는? 외부 입력값을 쿠키 및 HTTP 헤더정보로 사용하는 경우, HTTP 응답 분할 취약점을 가지지 않도록 ___해서 사용해야 한다.
                        </div>
                        <br></br>
                        <div id="problem0">
                            <input id="answer1" name="answer1" value={this.state.answer1} onChange={this.handleChange} type="text" /><br></br>

                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>

                    </div>


                    <div className="problem">
                        <div className="problem_title">2. http 프로토콜 유효성 검증을 하지 않으므로 인해 생길 수 있는 보안 취약점이 아닌 것을 고르시오. </div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} />  HTTP 응답분할
                            <br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  경로조작 및 자원삽입
                            <br></br>
                            <input type="checkbox" name="answer2_3" value={this.state.answer2_3} onChange={this.handleCheck} />  신뢰되지 않은 URL 주소로 자동접속 연결
                            <br></br>
                        </div>
                        <div className="error">
                            {this.state.re2}
                        </div>
                    </div>

                    {(this.state.check == 0) ? (<button className="problem_button" onClick={this.check}>채점하기</button>) : <button className="problem_button" onClick={this.submit}>제출하기</button>}

                </div>


            </div >
        )
    }

}

export default Learn_4_;