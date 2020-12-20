import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './learn.css';
import Header from '../components/header.js'
import Arrow from '../assets/play.svg'

class Learn_Problem extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="connection-wrap-content">
                    <div className="problem">
                        <div className="problem_title">1. 데이터베이스(DB)와 연동된 웹 응용프로그램에서 입력된 데이터에 대한 유효성 검증을 하지 않을 경우, <br></br>
                        공격자가 입력 폼 및 URL 입력란에 SQL 문을 삽입하여 DB로부터 정보를 열람하거나 조작할 수 있는 보안취약점은 무엇인가요?</div>
                        <br></br>
                        <div>
                            <input type="text" /><br></br>
                        </div>
                    </div>

                    <div className="problem">
                        <div className="problem_title">2. 설계시 고려해야 할 사항이 아닌것은?</div>
                        <br></br>
                        <div>
                            <input type="checkbox" value={1} />  애플리케이션에서 DB연결을 통해 데이터를 처리하는 경우 최대 권한이 설정된 계정을 사용해야 한다.<br></br>
                            <input type="checkbox" value={2} />  외부입력값이 삽입되는 SQL쿼리문을 동적으로 생성해서 실행하지 않도록 해야 한다. <br></br>
                            <input type="checkbox" value={3} />외부입력값을 이용해 동적으로 SQL쿼리문을 생성해야 하는 경우, 입력값에 대한 검증을 수행한 뒤 사용해야 한다.
                        </div>
                    </div>

                    <div className="problem">
                        <div className="problem_title">3. 필터를 이용한 입력값 검증방법을 모두 고르세요.</div>
                        <br></br>
                        <div>
                            <input type="checkbox" value={1} />  필터를 이용한 입력값 검증<br></br>
                            <input type="checkbox" value={2} />  인터셉트를 이용한 입력값 검증 <br></br>
                            <input type="checkbox" value={3} />  라이브러리 또는 Validator 컴포넌트를 이용하여 입력 값 검증
                        </div>
                    </div>

                    <button className="problem_button">제출하기</button>
                </div>


            </div >
        )
    }

}

export default Learn_Problem;