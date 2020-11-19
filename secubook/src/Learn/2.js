import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/webserviceReq_image1.png'
import image2 from '../assets/webserviceReq_image2.png'
import image3 from '../assets/webserviceReq_image3.png'
import image4 from '../assets/webserviceReq_image4.png'

class Learn_2 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_2_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <br></br>
                        <h1>웹 서비스 요청 및 결과 검증</h1>
                        <br></br>

                        <b><h3>취약점 개요</h3></b>
                        <br></br>
                        웹 서비스(게시판 등) 요청(스크립트 게시 등)과 응답결과(스크립트 포함 웹 페이지 등)에 대한 검증방법과 적절하지 않은 데이터에 대한 처리방법을 설계해야 한다.
                        <br></br><br></br>
                        <b><h3>취약점 사례</h3></b><br></br>
                        <div>
                            <b>사례1 : 외부 입력값을 검증 없이 응답페이지 생성에 사용하는 경우</b><br></br>
                            웹 페이지 악의적인 스크립트를 포함시켜 웹페이지를 열람하는 접속자의 권한으로 부적절한 스크립트가 수행되어 정보유출 등의 공격을 유발할 수 있다.<br></br>
                            <img className="learn_image_big" src={image1}></img><br></br>
                            위 사진은 해당 취약점 때문에 나타날 수 있는 Relective XSS 공격을 나타낸 사진이다.<br></br>
                        </div>
                        <br></br>

                        <div>
                            <b>사례2 : DB에 저장된 값을 검증없이 응답페이지 생성에 사용하는 경우</b><br></br>
                            공격자가 미리 취약한 서버에 악의적인 스크립트가 포함된 정보를 저장해서 일반 사용자들이 해당 정보를 조회하는 경우 접속자의 권한으로 부적절한 스크립트가 수행되어 정보 유출등의 공격을 유발할 수 있다. <br></br>
                            <img className="learn_image_big" src={image2}></img><br></br>
                            위 사진은 해당 취약점 때문에 나타날 수 있는 Stored XSS 공격을 나타낸 사진이다.<br></br>
                        악의적인 스크립트를 살펴보면 검색 인자로 작성한 스크립트를 넘겨 줌을 알 수 있다. 해당 스크립트의 내용은 본인의 웹페이지로 URL을 클릭한 사용자의 쿠키 값이 전송되도록 되어 있으며, 링크를 클릭한 사용자는 해커한테 본인의 의도와는 상관없이 자신의 쿠키 값을 전송하게 된다.
                        </div>

                        <br></br>
                        <br></br>
                        <b><h3>설계시 고려사항</h3></b><br></br>
                        <div>
                            <b>1. 사용자로부터 입력받은 값을 동적으로 생성되는 응답페이지에 사용하는 경우 크로스사이트 스크립트(XSS) 필터링을 수행한 뒤 사용해야한다.</b><br></br>
                        입력값에 대해 필터링 또는 인코딩 정책을 적용하는 공통코드를 작성하여 웹컨테이너, 또는 MVC 프레임워크에 적용한다.
                        <br></br>
                        (ㄱ) 필터를 이용한 입력값 검증<br></br>
                        웹컴포넌트인 Filter를 사용하여 사용자의 입력값에 대해 XSS 필터나 HTML 인코딩을 적용하여 안전한 값으로 치환한 뒤 사용할 수 있도록 모든 애플리케이션에 일괄 적용한다.
                        <br></br><br></br>
                        (ㄴ) 인터셉트를 이용한 입력값 검증<br></br>
                        MVC프레임워크를 사용하는 경우 Interceptor 컴포넌트를 사용하여 사용자의 입력값에 대해 XSS 공격 패턴의 문자열이 포함되었는지를 검사하여 요청을 차단 또는 허용하는 정책을 모든 애플리케이션에 일괄 적용한다.
                        <br></br><br></br>
                        (ㄷ) 라이브러리 또는 Validator 컴포넌트를 이용한 입력값 검증<br></br>
                        공통코드로 입력값을 검증하는 Validator 컴포넌트를 작성하여 XSS 공격패턴의 사용자 입력값을 필터링 할 수 있도록 설계한다.
                        <br></br><br></br>

                            <img className="learn_image_big" src={image3}></img><br></br>

                            <br></br>
                            <b>2. DB 조회 결과를 동적으로 생성되는 응답페이지에 사용하는 경우 HTML 인코딩 또는 크로스사이트스크립트(XSS) 필터링을 수행한 두 사용해야 한다.</b><br></br>
                        각각의 컴포넌트에서 출력값에 대해 XSS 필터 또는 HTML 인코딩을 적용하여 안전한 값만 응답에 사용한다.
                        <br></br>
                        (ㄱ) View 컴포넌트에서 출력값에 대해 HTML 인코딩 적용<br></br>
                        View 컴포넌트에서 사용자 입력값을 동적으로 생성되는 응답페이지에 사용하는 경우 XSS 필터 또는 HTML 인코딩을 적용하여 코드를 작성하도록 시큐어코딩 규칙을 정의한다.
                        <br></br><br></br>
                        (ㄴ) DB 조회 결과값에 대한 XSS 필터 적용<br></br>
                        DB 조회 결과값으로 응답페이지를 생성하는 경우 XSS 필터를 적용하여 사용해야한다. DB에서 읽어오는 데이터도 외부입력값의 범위에 포함시켜, 응답페이지에 출력하기 전에 반드시 검증작업을 수행해야 한다. DB에서 읽어온 값에 대한 검증작업을 프레임워크의 컴포넌트로 일괄 필터링하는 것이 쉽지 않다. 이 경우 각 개발자들은 출력값에 대해 검증 작업을 수행하도록 시큐어코딩 규칙을 정의한다. HTML, URL 등의 문자를 인코딩 및 필터링하여 XSS 취약점을 최소화할 수 있도록 아래와 같은 라이브러리의 사용을 고려할 수 있다.
                        <br></br><br></br>

                            <img className="learn_image_big" src={image4}></img><br></br>

                        </div>
                        <br></br><br></br>

                        <b><h3>관련 구현 단계 보안약점 항목</h3></b><br></br>
                        크로스사이트 스크립트


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