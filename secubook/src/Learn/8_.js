import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_8_ extends Component {

    state = {
        check: 0,
        re1: '',
        answer1_1: false,
        answer1_2: false,
        answer1_3: false,
        answer1_4: false,
    };

    submit = (e) => {
        if (this.state.re1 === "답이 맞았습니다.") {

            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "파일-업로드", type: 1 }, { withCredentials: true, }
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

        if (this.state.answer1_2 === true && this.state.answer1_1 == false && this.state.answer1_3 === false && this.state.answer1_4 === false) {
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

                    <div onClick={this.submit} className="goProblem">목록보기</div>
                    <div className="problem">
                        <div className="problem_title">
                            1.  (      )으로 허용된 확장자만 업로드를 허용한다.의 괄호 안에 들어갈 말은?
                        </div>
                        <br></br>
                        <div id="problem0">

                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} /> 블랙 리스트 방식
                            <br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} /> 화이트 리스트 방식
                            <br></br>
                            <input type="checkbox" name="answer1_3" value={this.state.answer1_3} onChange={this.handleCheck} /> String 비교
                            <br></br>
                            <input type="checkbox" name="answer1_4" value={this.state.answer1_4} onChange={this.handleCheck} /> 암호화


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

export default Learn_8_;