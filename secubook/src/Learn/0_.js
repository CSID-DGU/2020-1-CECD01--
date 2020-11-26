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
        answer1_4: false,
        answer1_5: false,
        answer2_1: false,
        answer2_2: false,
        answer2_3: false,
        answer2_4: false,
        answer2_5: false,
    };

    submit = (e) => {

        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {

            //axios.post('http://3.35.220.252/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "XML조회-및-결과-검증", type: 0 }, { withCredentials: true, }
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

        if (this.state.answer1_3 === true && this.state.answer1_1 === false && this.state.answer1_2 === false && this.state.answer1_4 === false && this.state.answer1_5 === false) {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re1: "답이 틀렸습니다."
            });
        }


        if (this.state.answer2_4 === true && this.state.answer2_1 === true && this.state.answer2_3 === false && this.state.answer2_2 === false && this.state.answer2_5 === false) {
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
                        <div className="problem_title">1. XPath, XQuery 등의 질의문을 조작하여 공격하는 기법은 어떤 파일을 대상으로 진행되는가?


</div>
                        <br></br>
                        <div id="problem1">
                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} />  XSS
<br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} />  HTML
 <br></br>
                            <input type="checkbox" name="answer1_3" value={this.state.answer1_3} onChange={this.handleCheck} />  XML
                            <br></br>                             <input type="checkbox" name="answer1_4" value={this.state.answer1_4} onChange={this.handleCheck} />  JS
<br></br>                   <input type="checkbox" name="answer1_5" value={this.state.answer1_5} onChange={this.handleCheck} />  PUG

<br></br>
                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>
                    </div>


                    <div className="problem">
                        <div className="problem_title">2. XML 공격을 막을 수 있는 방법을 모두 골라보시오.


</div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} />  입력값 검증

<br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  HTTPS 통신 사용

 <br></br>
                            <input type="checkbox" name="answer2_3" value={this.state.answer2_3} onChange={this.handleCheck} />  인증 절차 도입
                            <br></br>
                            <input type="checkbox" name="answer2_4" value={this.state.answer2_4} onChange={this.handleCheck} />  안전한 API 사용
<br></br>                    <input type="checkbox" name="answer2_5" value={this.state.answer2_5} onChange={this.handleCheck} />  PreparedStatement 사용

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