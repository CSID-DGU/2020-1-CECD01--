import React, { Component } from 'react';
import Header from '../components/header.js'
import './level.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

class Level_2 extends Component {


    state = {

        check: 0,
        re1: '',
        re2: '',
        re3: '',
        re4: '',
        re5: '',
        answer1: '',
        answer2_1: '',
        answer2_2: '',
        answer2_3: '',
        answer2_4: '',
        answer3_1: '',
        answer3_2: '',
        answer3_3: '',
        answer4: '',
        answer5_1: '',
        answer5_2: '',
        answer5_3: ''
    };


    submit = (e) => {
        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다.") {

            //3.35.220.252
            //axios.post('http://3.35.220.252/learn/check', { level: "1" }, { withCredentials: true, }

            axios.post('http://localhost:8001/learn/check', { level: "2" }, { withCredentials: true, }
            )
                .then(function (response) {
                    document.location.href = "/level";
                })
                .catch(error => {
                    console.log('error : ', error.response)

                    //document.location.href = "/login";
                });

        }
        else {
            document.location.href = "/level";
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

        if (this.state.answer2_2 === true || this.state.answer2_1 === false || this.state.answer2_3 === false || this.state.answer2_4 === false) {
            this.setState({
                re2: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re2: "답이 틀렸습니다."
            });
        }

        if (this.state.answer3_1 === true || this.state.answer3_2 === false || this.state.answer3_3 === false) {
            this.setState({
                re3: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re3: "답이 틀렸습니다."
            });
        }

        if (this.state.answer4 === "게시판") {
            this.setState({
                re4: "답이 맞았습니다."
            });
        }
        else {
            this.setState({
                re4: "답이 틀렸습니다."
            });
        }

        if (this.state.answer5_2 === true || this.state.answer5_1 === false || this.state.answer5_3 === false) {
            this.setState({
                re5: "답이 맞았습니다."
            });
        }
        else {

            this.setState({
                re5: "답이 틀렸습니다."
            });
        }

        if (this.state.re1 === "답이 맞았습니다." && this.state.re2 === "답이 맞았습니다." && this.state.re3 === "답이 맞았습니다." && this.state.re4 === "답이 맞았습니다." && this.state.re5 === "답이 맞았습니다.") {

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
                <div className="connection-wrap">

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

                    <div className="problem">
                        <div className="problem_title">
                            3. 해커가 웹 애플리케이션에서 XSS 취약점이 있는 곳을 파악하고, 악성스크립트를 삽입해 해당 스크립트가 데이터베이스에 저장되는 XSS 공격 방법은?
                        </div>
                        <br></br>
                        <div id="problem0">

                            <input type="checkbox" name="answer3_1" value={this.state.answer3_1} onChange={this.handleCheck} /> Persistent(or Stored) XSS
                            <br></br>
                            <input type="checkbox" name="answer3_2" value={this.state.answer3_2} onChange={this.handleCheck} /> Reflected XSS <br></br>
                            <input type="checkbox" name="answer3_3" value={this.state.answer3_3} onChange={this.handleCheck} />DOM based XSS

                        </div>
                        <div className="error">
                            {this.state.re3}
                        </div>

                    </div>

                    <div className="problem">
                        <div className="problem_title">4. XSS 공격이 가장 많이 발생하는 곳은?</div>
                        <br></br>
                        <div>
                            <input id="answer4" name="answer4" value={this.state.answer4} onChange={this.handleChange} type="text" /><br></br>
                        </div>
                        <div className="error">
                            {this.state.re4}
                        </div>
                    </div>

                    <div className="problem">
                        <div className="problem_title">5. XSS 공격을 대응하기 위한 방안 중 틀리게 짝지어진 것은?
</div>
                        <br></br>
                        <div id="problem2">
                            <input type="checkbox" name="answer5_1" value={this.state.answer5_1} onChange={this.handleCheck} />  입출력 값 검증 - 사용자가 입력한 값에 대한 검증과 사용자가 입력한 값을 그대로 출력할 때 검증이 필요
<br></br>
                            <input type="checkbox" name="answer5_2" value={this.state.answer5_2} onChange={this.handleCheck} />  XSS 방어 라이브러리 사용 - XSS 라이브러리를 사용하는 것은 프론트 단에서 개발자가 추가하는 것이다.
 <br></br>
                            <input type="checkbox" name="answer5_3" value={this.state.answer5_3} onChange={this.handleCheck} />  웹 방화벽 사용 - 웹 방화벽은 XSS 뿐만아니라 각종 Injection 공격을 효과적으로 방어할 수 있다.

                        </div>
                        <div className="error">
                            {this.state.re5}
                        </div>
                    </div>
                    {(this.state.check == 0) ? (<button className="problem_button" onClick={this.check}>채점하기</button>) : <button className="problem_button" onClick={this.submit}>제출하기</button>}


                </div>

            </div >
        )
    }
}

export default Level_2;