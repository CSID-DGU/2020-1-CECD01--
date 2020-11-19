import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

class Learn extends Component {
    state = {
        list1: [],
        list2: [],
        id: ''
    };

    componentDidMount() {
        axios.get("http://localhost:8001/learn")
            .then((resp) => {
                console.log(resp.data.results.length)
                for (var i = 0; i < resp.data.results.length; i++) {
                    if (resp.data.results[i].category === 0) {
                        this.state.list1.push({ title: resp.data.results[i].title });
                    }
                    else {
                        this.state.list2.push({ title: resp.data.results[i].title });
                    }

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    move = (e) => {
        this.state.id = e.target.id;
        console.log(this.state.id);

        if (this.state.id === 'XML조회-및-결과-검증') {
            document.location.href = "/learn_0"
        }
        else if (this.state.id === 'DBMS-조회-및-결과-검증') {
            document.location.href = "/learn_1"
        }
        else if (this.state.id === '웹-서비스-요청-및-결과-검증') {
            document.location.href = "/learn_2"
        }
        else if (this.state.id === '시스템-자원-접근-및-명령어-수행-입력값-검증') {
            document.location.href = "/learn_3"
        }
        else if (this.state.id === 'HTTP-프로토콜-유효성-검증') {
            document.location.href = "/learn_4"
        }
        else if (this.state.id === '업로드,-다운로드-파일-검증') {
            document.location.href = "/learn_5"
        }
        else if (this.state.id === 'SQL-INJECTION') {
            document.location.href = "/learn_6"
        }
        else if (this.state.id === '취약한-인증') {
            document.location.href = "/learn_7"
        }
        else if (this.state.id === '크로스-사이트-스크립팅') {
            document.location.href = "/learn_9"
        }
        else if (this.state.id === '취약한-접근-제어') {
            document.location.href = "/learn_10"
        }
        else if (this.state.id === '보안-설정-오류') {
            document.location.href = "/learn_10"
        }
        else if (this.state.id === '민감-데이터-노출') {
            document.location.href = "/learn_11"
        }

        //document.location.href = "/learn_content";
    }

    render() {

        const list1List = this.state.list1.map(

            (list1) => (
                <div className="learn" onClick={this.move} id={list1.title}>
                    <b>
                        <div className="learn_name" >
                            {list1.title}
                        </div>
                    </b>
                </div >
            )
        );

        const list2List = this.state.list2.map(

            (list2) => (
                <div className="learn" onClick={this.move} id={list2.title}>
                    <b>
                        <div className="learn_name">
                            {list2.title}
                        </div>
                    </b>

                </div>
            )
        );

        return (
            <div>
                <Header />
                <div className="connection-wrap">

                    <div className="learn_explain">
                        <b>Learn</b>
                        <br></br><br></br>
                        분석/설계 단계와 구현단계의 보안취약점 유형을 공부해보세요.
                    </div>

                    <div className="learn_block">
                        <div className="block">
                            <b> <div className="block_name">분석/설계 단계 보안 취약점</div></b>

                            <div className="row">

                                {list1List}

                            </div>
                        </div>

                        <div className="block">
                            <b> <div className="block_name">구현 단계 보안 취약점</div></b>

                            <div className="row">

                                {list2List}

                            </div>

                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default Learn;