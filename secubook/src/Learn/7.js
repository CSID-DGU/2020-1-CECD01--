import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/xss_image1.png'
import image2 from '../assets/xss_image2.png'
import image3 from '../assets/xss_image3.png'
import image4 from '../assets/xss_image4.png'
import image5 from '../assets/xss_image5.png'

class Learn_7 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_7_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <h1>명령어 삽입</h1>
                        <b><h3>취약점 개념 설명</h3></b>
                        <br></br>
                        적절한 검증절차를 거치지 않은 사용자 입력값이 운영체제 명령어의 일부 또는 전부로 구성되어 실행 되는 경우, 의도하지 않은 시스템 명령어가 실행되어 부적절하게 권한이 변경되거나 시스템 동작 및 운영에 악영향을 미칠 수 있다.
                        <br></br><br></br>
                        일반적으로 명령어 라인의 파라미터나 스트림 입력 등 외부 입력을 사용하여 시스템 명령어를 생성 하는 프로그램이 많이 있다. 하지만 이러한 경우 외부 입력 문자열은 신뢰할 수 없기 때문에 적절한 처리를 해주지 않으면, 공격자가 원하는 명령어 실행이 가능하게 된다.
                        <br></br><br></br>
                        <br></br><br></br>
                        <b><h3>대응방안</h3></b><br></br>
                        <div>
                            웹 인터페이스를 통해 서버 내부로 시스템 명령어를 전달시키지 않도록 응용프로그램을 구성하고, 외부에서 전달되는 값을 검증 없이 시스템 내부 명령어로 사용하지 않는다. 외부 입력에 따라 명령어 를 생성하거나 선택이 필요한 경우에는 명령어 생성에 필요한 값 들을 미리 지정해 놓고 외부 입력에 따라 선택하여 사용한다.
                        </div>
                        <br></br><br></br>

                        <b><h3>코드 예제</h3></b><br></br>
                        <div>
                            <b>안전하지 않은 코드의 예1 JAVA</b><br></br>
                            <div>

                                public static void main(String args[]) throws IOException {" { "} <br></br>
                                    // 해당 프로그램에서 실행할 프로그램을 제한하고 있지 않아 파라미터로 전달되는 모든 프로그램이 실행될 수 있다. <br></br>
                                    String cmd = args[0]; <br></br>
Process ps = null; <br></br>
try {"{"} <br></br>
                                    ps = Runtime.getRuntime().exec(cmd) {";"} <br></br>
...
<br></br><br></br>

                            </div>

                            RuntimegetRuntime().exec()명령어를 통해 프로그램을 실행하며, 외부에서 전달 되는 인자값은 명령어의 생성에 사용된다. 그러나 해당 프로그램에서 실행할 프로그램을 제한하지 않고 있기 때문에 외부의 공격자는 가능한 모든 프로그램을 실행시킬 수 있다. 따라서 미리 정의된 파라미터의 배열을 만들어 놓고, 외부의 입력에 따라 적절한 파라 미터를 선택하도록 하여, 외부의 부적절한 입력이 명령어로 사용될 가능성을 배제하여야 한다.
                            <br></br><br></br>
                            <b>안전한 코드의 예1 JAVA</b><br></br>
                            <div>

                                public static void main(String args[]) throws IOException {"{"} <br></br>
                                    // 해당 어플리케이션에서 실행할 수 있는 프로그램을 노트패드와 계산기로 제한하고 있다.<br></br>
                                {"List < String > allowedCommands = new ArrayList<String>();"}<br></br>
                                “ allowedCommands.add("notepad"); <br></br>allowedCommands.add("calc"); <br></br>String cmd = args[0];<br></br>
if (!allowedCommands.contains(cmd)) {"{"}<br></br>
                                        System.err.println("허용되지 않은 명령어입니다.");<br></br>
return; {"}"}<br></br>
Process ps = null; try {"{"}<br></br>
                                        ps = Runtime.getRuntime().exec(cmd); ...<br></br>

                            </div>
                            <br></br><br></br>

                            <b>안전하지 않은 코드의 예2 JAVA</b><br></br>
                            <div>

                                String date = request.getParameter("date");<br></br>
                                    String command = new String("cmd.exe /c backuplog.bat"); <br></br>Runtime.getRuntime().exec(command + date);<br></br>

                                <br></br><br></br>

                            </div>
                            운영체제 명령어 실행 시에는 아래와 같이 외부에서 들어오는 값에 의하여 멀티라인을지원하는 특수 문자(| ; {"&"} :)나 파일 리다이렉트 특수문자({"> >>"})등을 제거하여 원하지 않은 운영체제 명령어가 실행 될 수 없도록 필터링을 수행한다.

                        <br></br><br></br>
                            <b>안전한 코드의 예2 JAVA</b><br></br>
                            <div>
                                String date = request.getParameter("date");<br></br>
                                String command = new String("cmd.exe /c backuplog.bat");<br></br>
                                //외부로부터 입력 받은 값을 필터링을 통해 우회문자를 제거하여 사용한다.<br></br>
                                date = date.replaceAll("|","");<br></br>
                                date = date.replaceAll(";","");<br></br>
                                date = date.replaceAll("{"&"}","");<br></br>
                                date = date.replaceAll(":","");<br></br>
                                date = date.replaceAll("{">"}",""); <br></br>
                                Runtime.getRuntime().exec(command + date);<br></br>

                            </div>
                        </div>
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

export default Learn_7;