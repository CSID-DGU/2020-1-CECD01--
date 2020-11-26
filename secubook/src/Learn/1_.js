import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_0_ extends Component {

    state = {
        check: 0,
        re1: '',
        re2: '',
        answer1_1: false,
        answer1_2: false,
        answer1_3: false,
        answer2_1: false,
        answer2_2: false,
        answer2_3: false,
    };

    submit = (e) => {

        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {

            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "DBMS-조회-및-결과-검증", type: 0 }, { withCredentials: true, }
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

        if (this.state.answer1_1 === true && this.state.answer1_2 === true && this.state.answer1_3 === true) {
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
                        <div className="problem_title">1. 입력값에 대한 검증으로 할 수 있는 방법을 모두 고르시오. </div>
                        <br></br>
                        <div id="problem1">
                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} />  필터
                            <br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} />  인터셉트
                            <br></br>
                            <input type="checkbox" name="answer1_3" value={this.state.answer1_3} onChange={this.handleCheck} />  라이브러리
                            <br></br>
                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>
                    </div>


                    <div className="problem">
                        <div className="problem_title">2. 쿼리문을 동적으로 생성하지 않고 싶을 때 사용하는 것을 고르시오. </div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} />  Statement
                            <br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  PreparedStatement
                            <br></br>
                            <input type="checkbox" name="answer2_3" value={this.state.answer2_3} onChange={this.handleCheck} />  getParameter()
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

export default Learn_0_;