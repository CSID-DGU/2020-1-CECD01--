import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

class Learn extends Component {
    state = {
        id: '',
        name: '',
        index: ''
    };

    move = (e) => {
        alert(1);
        this.state.id = e.target.id;
        this.state.name = e.target.name;

        axios.get('http://3.35.220.252/learn/', {
            params: {
                category: this.state.id,
                title: this.state.name
            }
        })
            .then((resp) => {

                console.log(resp.data);
                //this.setState({ name: resp.data.user })
            }
            ).catch((err) => {
                console.log(err)
            })

    }

    check = (e) => {
        alert(this.state.name);
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_explain">Learn 메뉴에 대한 설명</div>
                    <div className="learn_block">
                        <div className="block">
                            <b> <div class="block_name">분석/설계 단계 보안 취약점</div></b>

                            <div className="row">

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">DBMS 조회 및 결과 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">XML조회 및 결과 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">웹 서비스 요청 및 결과 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">시스템 자원 접근 및 명령어 수행 입력값 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">웹 기반 중요기능 수행 요청 유효성 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">HTTP프로토콜 유효성 검증</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">허용된 범위 내 메모리 접근</div></b>

                                </div>

                                <div id="0" onClick={this.move} className="learn">
                                    <b><div className="learn_name">업로드, 다운로드 파일 검증</div></b>

                                </div>

                            </div>

                        </div>
                        <div className="block">
                            <b> <div class="block_name">구현 단계 보안 취약점</div></b>

                            <div class="row">

                                <div name="SQL-Injection" id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">SQL INJETION</div></b>


                                </div>

                                <div id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">취약한 인증</div></b>

                                </div>

                                <div id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">크로스 사이트 스크립팅</div></b>

                                </div>

                                <div id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">취약한 접근 제어</div></b>

                                </div>

                                <div id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">보안 설정 오류</div></b>

                                </div>

                                <div id="1" onClick={this.move} className="learn">
                                    <b><div className="learn_name">민감 데이터 노출</div></b>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Learn;