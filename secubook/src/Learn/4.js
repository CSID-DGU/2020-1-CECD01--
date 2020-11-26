import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/HTTP_image1.png'
import image2 from '../assets/HTTP_image2.png'

class Learn_4 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_4_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <br></br>
                        <h1>HTTP 프로토콜 유효성 검증</h1>
                        <br></br>

                        <b><h3>취약점 개요</h3></b>
                        <br></br>
                        비정상적인 HTTP 헤더, 자동연결 URL 링크 등 사용자가 원하지 않은 결과를 생성할 수 있는 HTTP 헤더 및 응답 결과에 대한 유효성 검증방법과 유효하지 않은 값에 대한 처리 방법을 설계한다.
                        <br></br><br></br>
                        <b><h3>취약점 사례</h3></b><br></br>
                        <div>
                            <b>사례1 : HTTP 응답분할</b><br></br>
                            <img className="learn_image_big" src={image1}></img><br></br>
                            공격자가 HTTP 요청에 삽입한 인자값이 HTTP 응답헤더에 포함되어 사용자에게 다시 전달될 때 개행문자를 이용하여 첫 번째 응답을 종료시키고 두 번째 응답에 악의적인 코드가 주입되어 XSS공격 등이 가능해진다.
                        </div>
                        <br></br>

                        <div>
                            <b>사례2 : 신뢰되지 않은 URL로 자동 접속연결</b><br></br>
                            <br></br>
                            <img className="learn_image_big" src={image2}></img><br></br>
                            사용자의 입력값을 외부사이트의 주소로 사용하여 자동으로 연결하는 서버 프로그램에서는 공격자가 사용자를 피싱(Phishing)사이트 등 위험한 URL로 접속하도록 유도할 수 있게 된다.
                            </div>

                        <br></br>
                        <br></br>
                        <b><h3>설계시 고려사항</h3></b><br></br>
                        <div>
                            <b>1. 외부입력값을 쿠키 및 HTTP 헤더정보로 사용하는 경우, HTTP 응답분할 취약점을 가지지 않도록 필터링해서 사용해야 한다. </b><br></br>
                            ₩r₩n 문자는 HTTP응답에서 헤더와 바디를 구분하는 구분자로 사용되기 때문에 HTTP 응답 헤더에 삽입되는 외부입력값은 반드시 ₩r₩n 문자를 제거하여 사용할 수 있도록 시큐어코딩 규칙 을 정의한다.
                            프로그램에서 Cookie값을 설정하거나, 응답 헤더값을 설정하거나, 페이지 리다이렉트를 하기 위한 Location정보를 삽입하는 등 응답 헤더에 외부 입력값이 삽입되는 경우, HTTP응답분할을 일으킬 수 있는 문자(₩r₩n)을 필터링하도록 검증절차를 적용한다.
                            <br></br>
                            <br></br>
                            <b>2. 외부입력값이 페이지이동(리다이렉트 또는 포워드)을 위한 URL로 사용되어야 하는 경우, 해당 값은 시스템에서 허용된 URL목록의 선택자로 사용되도록 해야 한다. </b><br></br>
                            페이지 이동을 허용하는 URL목록을 소스코드에 하드코딩 하거나, 설정파일(XML, properties)에 저장하여 허용된 URL로만 이동할 수 있도록 설계한다.
                         <br></br><br></br>

                        </div>
                        <br></br><br></br>

                        <b><h3>관련 구현 단계 보안약점 항목</h3></b><br></br>
                        HTTP 응답분할, 신뢰되지 않은 URL 주소로 자동접속 연결



                        <br></br>
                        <br></br>
                        <br></br>
                        <b><h3>사고 사례</h3></b><br></br>
                        <b>OOO 등 주요 인터넷사이드 동시다발 DDoS 공격에 불통 충격 [디지털 데일리] 2009-07-08 01:12:39 이유지 기자 </b><br></br>
                        OO 등 국내 주요 대형 인터넷 사이트가 동시에 분산서비스거부(DDoS) 공격을 받아 서비스가 마비되는 사태가 발생했다. 7일 오후 6-7시부터 8일 자정이 지난 현재, OO 등 국내 사이트가 접속이 안되거나 불안한 상태다. 방송통신위원회가 한국정보보호진흥원(KISA)는 이날 오후 7시경부터 이들 주요 인터넷 사이트에 서비스가 중단되는 현상이 발생하자, 긴급히 상황 분석 작업을 벌였다. 그 결과, 대량 유해 트래픽을 수반하는 DDoS 공격으로 인해 국내 일부 사이트에 대한 인터넷 접속이 지연되거나 접속이 되지 않는 것으로 파악했다.

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

export default Learn_4;