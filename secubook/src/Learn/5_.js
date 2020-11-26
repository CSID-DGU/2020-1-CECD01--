import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_5_ extends Component {

    state = {
        check: 0,
        re1: '',
        re2: '',
        answer1_1: false,
        answer1_2: false,
        answer1_3: false,
        answer2_1: false,
        answer2_2: false,
    };

    submit = (e) => {

        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {

            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "업로드/다운로드-파일-검증", type: 0 }, { withCredentials: true, }
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

        if (this.state.answer1_2 === true && this.state.answer1_1 === false && this.state.answer1_3 === false) {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re1: "답이 틀렸습니다."
            });
        }


        if (this.state.answer2_2 === true && this.state.answer2_1 === false) {
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
                        <div className="problem_title">1. 파일 다운로드 요청 시, 요청파일명에 대한 검증작업에 해당하지 않는 것은? </div>
                        <br></br>
                        <div id="problem1">
                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} />  파일 다운로드를 위해 요청되는 파일명에 경로를 조작하는 문자가 포함되어 있는지 점검
                            <br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} />  허가된 사용자의 허가되지 않은 안전한 파일에 대한 다운로드 요청인지 확인
                            <br></br>
                            <input type="checkbox" name="answer1_3" value={this.state.answer1_3} onChange={this.handleCheck} />  사용자의 요청에 의해 서버에 존재하는 파일이 참조되는 경우 화이트리스트 정책으로 접근통제
                            <br></br>
                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>
                    </div>


                    <div className="problem">
                        <div className="problem_title">2. 업로드되어 저장되는 파일은 외부에서 식별되어야 한다. </div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} />  예
                            <br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  아니오
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

export default Learn_5_;