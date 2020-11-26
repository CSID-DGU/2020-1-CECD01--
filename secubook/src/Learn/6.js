import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/Parameter_image1.png'
import image2 from '../assets/Parameter_image2.png'
import image3 from '../assets/Parameter_image3.png'
import image4 from '../assets/Parameter_image4.png'
import image5 from '../assets/Parameter_image5.png'

class Learn_10 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_6_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <h1>파라미터 조작</h1>
                        <b><h3>취약점 개념 설명</h3></b>
                        <br></br>
                        클라이언트와 서버는 서로 통신할 때 요청과 응답이라는 프로세스로 여러가지 정보를 주고 받는다. 이런 정보를 header나 body의 형태로 브라우저에서 쉽게 확인할 수 있다. 크롬에서 개발자 정보 탭을 많이 사용해본 사람들은 알 것이다. 파라미터 변조란 이런 값들을 조작하면서 공격하는 기법이다. 해커는 header나 body에 담긴 사용자의 기밀정보, 주문한 상품의 개수 등 여러가지 요소를 조작하면서 공격할 수 있다. 공격 내용을 쿠키나, form 필드, 쿼리 문자열에 쉽게 포함시키면서 말이다.
                        <br></br><br></br>
                        예시를 들어보자. 해당 사이트(https://securely.tistory.com/entry/No9-파라미터-변조-공격)를 참고했다.
                        <br></br><br></br>
                        먼저 admin 계정으로 게시물을 하나 등록하자.
                        <br></br><br></br>
                        <img className="image" src={image1}></img><br></br>
                        그 다음 일반 사용자로 또다른 게시물을 등록하자.<br></br><br></br>
                        <img className="image" src={image2}></img><br></br>
                        등록한 게시물을 확인해보자. 우리는 관리자의 게시물을 파라미터 조작을 통해 변경해보고자 한다.
                        <img className="image" src={image3}></img><br></br>
                        아래 사진은 옛날 툴을 사용했는데, 요청 header의 내용을 바꾸는 용도인 듯 하다. 현재 사용자 계정에서 아래와 같이 idx만 admin 계정으로 남긴 게시물의 idx로 바꿔서 요청을 날려보자.
                        <img className="image" src={image4}></img><br></br>
                        이 공격으로 인해 admin 계정의 게시물은 아래와 같이 현재 사용자의 게시물이 되었다.
                        <img className="image" src={image5}></img><br></br>
                        이처럼 파라미터 조작으로 사용자는 원치않는, 해커가 원하는 방향으로 요청이 전달되도록 하는 것이 파라미터 조작이다.
                        <br></br>
                        <br></br>


                        <br></br>


                        <button className="problem_button" onClick={this.move}>미니문제 풀러 가기</button>
                    </div>

                </div>

            </div >
        )
    }
}

export default Learn_10;