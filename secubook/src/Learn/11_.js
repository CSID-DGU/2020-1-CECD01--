import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_11_ extends Component {

    state = {
        check: 0,
        re1: '',
        re2: '',
        answer1: '',
        answer2_1: false,
        answer2_2: false,
        answer2_3: false,
        answer2_4: false,
    };

    submit = (e) => {
        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {
            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "암호화", type: 1 }, { withCredentials: true, }
            )
                .then(function (response) {
                    document.location.href = "/learn";
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

        if (this.state.answer1 === "DES") {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re1: "답이 틀렸습니다."
            });
        }

        if (this.state.answer2_2 === true && this.state.answer2_1 === false && this.state.answer2_3 === false && this.state.answer2_4 === false) {
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
                            1. 64비트의 평문을 46비트의 암호문으로 만드는 대표적인 블록 암호 기술로서, 1975년에 당시 NBS(현재의 NIST)를 통해 발표되어 그 이후로 수많은 <br></br>시스템에 사용되어져온 알고리즘은?
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
                        <div className="problem_title">2. 안전하다고 알려진 암호화 알고리즘이 아닌 것은? </div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} /> AES
                            <br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  RC2
                            <br></br>
                            <input type="checkbox" name="answer2_3" value={this.state.answer2_3} onChange={this.handleCheck} />  SEED
                            <br></br>
                            <input type="checkbox" name="answer2_4" value={this.state.answer2_4} onChange={this.handleCheck} />  3DES
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

export default Learn_11_;