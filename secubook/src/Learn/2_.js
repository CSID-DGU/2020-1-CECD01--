import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_2_ extends Component {

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

            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "웹-서비스-요청-및-결과-검증", type: 0 }, { withCredentials: true, }
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

        if (this.state.answer1 === "Reflective XSS") {
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
                            1. 외부 입력값을 검증없이 응답페이지 생성에 사용하는 경우 발생할 수 있는 XSS 공격 기법을 영어로 작성하시오.
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
                        <div className="problem_title">2. 설계시 고려사항에 맞지 않은 것을 고르시오

</div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer2_1" value={this.state.answer2_1} onChange={this.handleCheck} />  입출력 값 검증 - 사용자가 입력한 값에 대한 검증과 사용자가 입력한 값을 그대로 출력할 때 검증이 필요
<br></br>
                            <input type="checkbox" name="answer2_2" value={this.state.answer2_2} onChange={this.handleCheck} />  XSS 방어 라이브러리 사용 - XSS 라이브러리를 사용하는 것은 프론트 단에서 개발자가 추가하는 것이다.
 <br></br>
                            <input type="checkbox" name="answer2_3" value={this.state.answer2_3} onChange={this.handleCheck} />  웹 방화벽 사용 - 웹 방화벽은 XSS 뿐만아니라 각종 Injection 공격을 효과적으로 방어할 수 있다.
                            <input type="checkbox" name="answer2_4" value={this.state.answer2_4} onChange={this.handleCheck} />  입출력 값 검증 - 사용자가 입력한 값에 대한 검증과 사용자가 입력한 값을 그대로 출력할 때 검증이 필요
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

export default Learn_2_;