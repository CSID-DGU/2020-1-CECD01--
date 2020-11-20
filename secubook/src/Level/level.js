import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './level.css'
import Header from '../components/header.js'
import axios from 'axios';

class Level extends Component {

    move1 = () => {
        //axios.post('http://3.35.220.252/level/test', { level: 1 }, { withCredentials: true, }

        axios.post('http://localhost:8001/level/test', { level: 1 }, { withCredentials: true, }
        )
            .then(function (response) {
                if (response.data.result !== "이수 조건을 만족하지 못해 진행할 수 없습니다.") {
                    document.location.href = "/level1";
                }
                else {
                    alert("이수조건을 만족하지 못하였습니다.")
                }

            })
            .catch(error => {


                console.log('error : ', error.response)
                //document.location.href = "/login";
            });

        //document.location.href = "/level_content"
    }
    move2 = () => {
        //axios.post('http://3.35.220.252/level/test', { level: 2 }, { withCredentials: true, }

        axios.post('http://localhost:8001/level/test', { level: 2 }, { withCredentials: true, }
        )
            .then(function (response) {
                if (response.data.result !== "이수 조건을 만족하지 못해 진행할 수 없습니다.") {
                    document.location.href = "/level2";
                }
                else {
                    alert("이수조건을 만족하지 못하였습니다.")
                }

            })
            .catch(error => {
                console.log('error : ', error.response)
                //document.location.href = "/login";
            });

        //document.location.href = "/level_content"
    }
    move3 = () => {
        //axios.post('http://3.35.220.252/level/test', { level: 3 }, { withCredentials: true, }
        axios.post('http://localhost:8001/level/test', { level: 3 }, { withCredentials: true, }
        )
            .then(function (response) {

                if (response.data.result !== "이수 조건을 만족하지 못해 진행할 수 없습니다.") {
                    document.location.href = "/level3";
                }
                else {
                    alert("이수조건을 만족하지 못하였습니다.")
                }

            })
            .catch(error => {
                console.log('error : ', error.response)
                //document.location.href = "/login";
            });

        //document.location.href = "/level_content"
    }

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">
                    <div className="level_explain">
                        <b>Level</b>
                        <br></br><br></br>
                        자신의 보안 레벨을 확인해보세요.
                    </div>

                    <div className="level" id="1" onClick={this.move1}>
                        <div className="level_name">LEVEL 1</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, (구현)크로스 사이트 스크립팅 취약점 </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="2" onClick={this.move2}>
                        <div className="level_name">LEVEL 2</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, DBMS 조회 및 결과 검증, XML 조회 및 결과 검증
                        <br></br>(구현)크로스 사이트 스크립팅 취약점, SQL INJECTION </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="3" onClick={this.move3}>
                        <div className="level_name">LEVEL 3</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, DBMS 조회 및 결과 검증, XML 조회 및 결과 검증, 시스템 자원 접근 및 명령어 수행 입력값 검증,
                        <br></br>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP프로토콜 유효성 검증, 업로드/다운로드 파일 검증</div>

                            (구현)크로스 사이트 스크립팅 취약점, SQL INJECTION, 취약점 인증, 취약한 접근 제어, 보안 설정 오류, 민감 데이터 노출 </div>
                    </div>
                </div >
            </div >
        )
    }

}

export default Level;