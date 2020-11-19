import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

class Learn_9_ extends Component {

    state = {
        re1: '',
        re2: '',
        re3: '',
        answer1_1: '',
        answer1_2: '',
        answer1_3: '',
        answer2: '',
        answer3_1: '',
        answer3_2: '',
        answer3_3: ''
    };

    submit = (e) => {
        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다." && this.state.re3 === "답이 맞았습니다.") {
            alert(1);
            axios.post('http://localhost:8001/learn/check', { userAnswer: "", title: "크로스-사이트-스크립팅", type: 1 }, { withCredentials: true, }
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

        if (this.state.answer1_1 === true || this.state.answer1_2 === false || this.state.answer1_3 === false) {
            this.setState({
                re1: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re1: "답이 틀렸습니다."
            });
        }

        if (this.state.answer2 === "게시판") {
            this.setState({
                re2: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re2: "답이 틀렸습니다."
            });
        }

        if (this.state.answer3_2 === true || this.state.answer3_1 === false || this.state.answer3_3 === false) {
            this.setState({
                re3: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re3: "답이 틀렸습니다."
            });
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
                            1. 해커가 웹 애플리케이션에서 XSS 취약점이 있는 곳을 파악하고, 악성스크립트를 삽입해 해당 스크립트가 데이터베이스에 저장되는 XSS 공격 방법은?
                        </div>
                        <br></br>
                        <div id="problem0">

                            <input type="checkbox" name="answer1_1" value={this.state.answer1_1} onChange={this.handleCheck} /> Persistent(or Stored) XSS
                            <br></br>
                            <input type="checkbox" name="answer1_2" value={this.state.answer1_2} onChange={this.handleCheck} /> Reflected XSS <br></br>
                            <input type="checkbox" name="answer1_3" value={this.state.answer1_3} onChange={this.handleCheck} />DOM based XSS

                        </div>
                        <div className="error">
                            {this.state.re1}
                        </div>

                    </div>

                    <div className="problem">
                        <div className="problem_title">2. XSS 공격이 가장 많이 발생하는 곳은?</div>
                        <br></br>
                        <div>
                            <input id="answer2" name="answer2" value={this.state.answer2} onChange={this.handleChange} type="text" /><br></br>
                        </div>
                        <div className="error">
                            {this.state.re2}
                        </div>
                    </div>

                    <div className="problem">
                        <div className="problem_title">3. XSS 공격을 대응하기 위한 방안 중 틀리게 짝지어진 것은?
</div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer3_1" value={this.state.answer3_1} onChange={this.handleCheck} />  입출력 값 검증 - 사용자가 입력한 값에 대한 검증과 사용자가 입력한 값을 그대로 출력할 때 검증이 필요
<br></br>
                            <input type="checkbox" name="answer3_2" value={this.state.answer3_2} onChange={this.handleCheck} />  XSS 방어 라이브러리 사용 - XSS 라이브러리를 사용하는 것은 프론트 단에서 개발자가 추가하는 것이다.
 <br></br>
                            <input type="checkbox" name="answer3_3" value={this.state.answer3_3} onChange={this.handleCheck} />  웹 방화벽 사용 - 웹 방화벽은 XSS 뿐만아니라 각종 Injection 공격을 효과적으로 방어할 수 있다.

                        </div>
                        <div className="error">
                            {this.state.re3}
                        </div>
                    </div>

                    <button className="problem_button" onClick={this.check}>제출하기</button>
                </div>


            </div >
        )
    }

}

export default Learn_9_;