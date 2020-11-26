import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/xml_image1.png'

class Learn_0 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_0_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <br></br>
                        <h1>XML조회-및-결과-검증</h1>
                        <br></br>

                        <b><h3>취약점 개요</h3></b>
                        <br></br>
                        XML 문서를 조회할 경우, 입력값 조작을 통해 XQuery나 XPath와 같은 쿼리문의 구조를 임의로 변경하여 허가되지 않은 데이터를 조회하거나 심지어 인증절차를 우회할 수 있다. 다음 그림은 전반적인 시나리오를 보여준다.
                        <br></br>
                        <img className="image" src={image1}></img><br></br>
                        <br></br>
                        <b><h3>설계시 고려사항</h3></b><br></br>
                        당신이 XML 문서를 조회하는 기능을 구현해야 하는 경우라면 XML 쿼리에 사용되는 파라미터가 쿼리를 조작하지 않도록 적절히 필터링하거나, 미리 작성된 쿼리문에 입력값을 자료형에 따라 바인딩해야한다. 여러가지 방법이 있는데 다음과 같다. <br></br><br></br>
                        <div>
                            <b>1. 공통 검증 컴포넌트 사용 </b><br></br>
                            XML 삽입공격이 가능한 문자열들을 필터링하는 Validator 컴포넌트를 개발하여 입력값을 검증하도록 설계한다.

                        <br></br> <br></br>
                            <b>2. 필터 컴포넌트 사용 </b><br></br>
                            “, [, ], /, =, @ 등 XML 삽입공격이 가능한 입력값들을 필터링하는 컴포넌트를 작성 후 일괄 적용해야한다.

                        <br></br><br></br>
                            <b>3. 개별 코드에서 필터링 </b><br></br>
                            각각 컴포넌트에서 위에서 언급한 값들을 제거 혹은 안전하게 치환하도록 하자.

                        <br></br> <br></br>

                            <b>4. 안전한 API 사용  </b><br></br>
                            외부 입력값이 쿼리문의 구조를 바꿀 수 없는 API, 예를 들면 JAVA의 XQuery API가 있는데 이런 것을 사용하면 좋다.


                        <br></br> <br></br>

                        </div>
                        <br></br><br></br>

                        <b><h3>관련 구현 단계 보안약점 항목</h3></b><br></br>
                        XQuery 삽입, XPath 삽입



                        <br></br>
                        <br></br>
                        <br></br>
                        <b><h3>사고 사례</h3></b><br></br>
                        2013년에 발생한 사건으로 한 가족이 여행지에서 찍은 사진과 동영상 파일을 외부 사이트에 노출된 사건이다. 평소 보안을 꼼꼼히 챙겼으나, 기존에 잘 알려지지 않은 XML 공격을 통해 정보 유출이 되었다. 이런 경우가 발생하는 이유는 XML 파서가 취약하게 설정돼 서버의 디렉토리와 파일정보를 공격자에 노출되어서 이다. 이를 해결하기 위해선 XML 파서 설정을 안전하게 해야한다.
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

export default Learn_0;