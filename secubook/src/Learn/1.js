import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/DBMS_image1.png'
import image2 from '../assets/DBMS_image2.png'
import image3 from '../assets/DBMS_image3.png'

class Learn_2 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_1_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <br></br>
                        <h1>DBMS 조회 및 결과 검증</h1>
                        <br></br>

                        <b><h3>취약점 개요</h3></b>
                        <br></br>
                        해당 취약점은 DB와 연동된 프로그램에서 입력된 데이터에 대한 유효성 검증을 하지 않을 경우 생기는 취약점을 의미한다.<br></br><br></br>

                        <img className="learn_image_big" src={image1}></img><br></br>
                        위 그림처럼 쿼리를 조작할 수 있는 문자열을 입력해서 조작된 요청을 보내면, 인가되지 않은 사용자가 DB 데이터를 무단으로 조회 및 삭제할 수 있다.

                        <br></br>
                        <br></br>
                        <b><h3>설계시 고려사항</h3></b><br></br>
                        <div>
                            <b>1. DB를 통해 데이터를 처리하는 경우, 계정에 최소 권한만 할당해줘야 한다. </b><br></br>
                            <br></br>

                            <b>2. 외부로부터 입력받는 SQL 쿼리문을 동적으로 생성해서 실행하지 않도록 해야한다. </b><br></br>
                            <br></br>

                            <b>3. 동적으로 생성해야하는 경우 입력값에 대한 검증을 해야한다.  </b><br></br>

                            <img className="learn_image_big" src={image2}></img><br></br>
                            (ㄱ) 필터를 이용한 검증 <br></br>
                            삽입이 가능한 문자열들을 필터링하여 안전한 값으로 치환하는 컴포넌트를 설계 후 DB를 처리하는 로직에 모두 심어두자.
                        <br></br><br></br>
                        (ㄴ) 인터셉트를 이용한 검증<br></br>
                        MVC 프레임워크를 사용 중이라면, Interceptor 컴포넌트를 사용해 입력 값을 필터링하고 요청을 허용하거나 차단하도록 하자
                        <br></br><br></br>
                        (ㄷ) 라이브러리 또는 Validator 컴포넌트를 이용한 입력값 검증<br></br>
                        입력값을 검증하는 Validator 컴포넌트를 공통으로 생성하고 검증하는 용도로 사용하자. 아래 언어 별로 사용가능한 프레임워크를 확인해보자
                        <br></br><br></br>
                            <br></br>
                        </div>


                        <img className="learn_image_big" src={image3}></img><br></br><br></br>
                        <b><h3>관련 구현 단계 보안약점 항목</h3></b><br></br>
                        SQL 삽입


                        <br></br>
                        <br></br>
                        <br></br>
                        <b><h3>사고 사례</h3></b><br></br>
                        실제 2015년 발생한 사건으로 취약점을 이용해 DB를 공격해서 회원정보가 유출되었다. 해커는 홈페이지 구조 및 취약점을 파악하고 SQL Injection을 통해 개인정보를 탈취한 것으로 확인되었다.

                        <br></br>
                        <br></br>
                        <hr></hr>


                        <button className="problem_button" onClick={this.move}>미니문제 풀러 가기</button>
                    </div>

                </div>

            </div >
        )
    }
}

export default Learn_2;