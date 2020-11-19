import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import DBMS from '../assets/DBMS.png'

class Learn_Content extends Component {

    move = (e) => {
        //통신

        document.location.href = "/learn_problem";
    };

    render() {
        return (

            <div>
                <Header />
                <div className="connection-wrap-content">
                    <div>
                        <div className="name">DBMS 조회 및 결과 검증 </div>
                        <div onClick={this.move} className="goProblem">문제풀러가기</div>
                    </div>

                    <br></br>
                    <div className="content">
                        <br></br>
                        데이터베이스(DB)와 연동된 웹 응용프로그램에서 입력된 데이터에 대한 유효성 검증을 하지 않을 경우, 공격자가 입력 폼 및 URL 입력란에 <br></br>SQL 문을 삽입하여 DB로부터 정보를 열람하거나 조작할 수 있는 보안취약점을 말한다.
                        DBMS 조회를 위한 질의문(SQL) 생성시 사용되는 입력값과 조회결과에<br></br> 대한 검증방법(필터링 등)을 설계하고 유효하지 않은 값에 대한 처리방법을 설계해야 한다.
                        <br></br>
                        <img className="image" src={DBMS} ></img>
                        <br></br><br></br>
                        <div className="color">DBMS 조회를 위한 질의문(SQL) 생성시 사용되는 입력값과 조회결과에 대한 검증방법(필터링 등)을 설계하고 유효하지 않은 값에 대한 처리방법을 설계해야 한다.</div>
                        <b>1. 애플리케이션에서 DB연결을 수행할 때 최소권한의 계정을 사용해야 한다.</b> <br></br>
                        취약한 애플리케이션으로 인해 침해사고가 발생하더라도 나머지 부분에 대해 공격자가 액세스 권한을 가지지 않도록 애플리케이션에서 DB연결을 위해 사용되는 계정은 <br></br>
                         해당 애플리케이션이 사용하는 데이터에 대한 읽기, 쓰기, 삭제, 업데이트 권한만 설정한다. <br></br><br></br>
                        <b>2. 외부입력값이 삽입되는 SQL쿼리문을 동적으로 생성해서 실행하지 않도록 해야 한다.</b> <br></br>
                        쿼리문의 구조가 외부입력값에 의해 변경되지 않는 API를 사용하도록 시큐어코딩 규칙을 지정 한다.<br></br>
                        ORM프레임워크를 사용하여 안전한 정적 쿼리 구조로 SQL문을 수행할 수 있도록 개발환경을 설정하고, 시큐어코딩 규칙을 통해 정적쿼리문(외부입력값에 의해 쿼리문의<br></br>구조가 변경되지 않는)을 사용하도록 한다.
                        <br></br> <br></br>
                        <b>3. 외부입력값을 이용해 동적으로 SQL쿼리문을 생성해야 하는 경우, 입력값에 대한 검증을 수행한 뒤 사용해야 한다.</b> <br></br>
                        클라이언트와 서버 양측에서 입력값에 대해 안전한 값만 사용될 수 있도록 검증작업을 수행한다.<br></br>
                        (ᄀ) 필터를 이용한 입력값 검증 <br></br>
                        외부입력값에서 SQL삽입이 가능한 문자열들을 필터링하여 안전한 값으로 치환하도록 하는 Filter 컴포넌트를 생성하고, DB에서 관리하는 데이터를 처리하는 모든 <br></br>
                        애플리케이션에 일괄 적용한다. <br></br>
                        (ᄂ) 인터셉트를 이용한 입력값 검증
                        MVC프레임워크를 사용하는 경우 Interceptor 컴포넌트를 사용하여 입력값에 대한 검증 작업을 수행한 뒤 요청을 차단하거나 <br></br>
                        허용하는 정책을 애플리케이션에 일괄 적용한다. <br></br>
                        (ᄃ) 라이브러리 또는 Validator컴포넌트를 이용한 입력값 검증
                        입력값을 검증하는 Validator 컴포넌트를 공통코드로 생성하고, 모든 개발자가 SQL문에 삽입되는 <br></br>
                        입력값에 대해 검증작업을 해당 컴포넌트에서 수행하도록 시큐어코딩 규칙을 정의한다.
                        SQL삽입 취약점을 최소화하고 SQL문을 안전하게 처리할 수 있도록<br></br> 다음과 같은 프레임워크나 라이브러리 의 사용을 고려할 수 있다.

                    </div>

                </div>


            </div>
        )
    }

}

export default Learn_Content;