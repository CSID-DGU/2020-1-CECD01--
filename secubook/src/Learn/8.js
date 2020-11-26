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

class Learn_10 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_8_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <h1>파일 업로드</h1>
                        <b><h3>취약점 개념 설명</h3></b>
                        <br></br>
                        서버 측에서 실행될 수 있는 스크립트 파일(asp, jsp, php 파일 등)이 업로드가능하고, 이 파일을 공격자가 웹을 통해 직접 실행시킬 수 있는 경우, 시스템 내부명령어를 실행하거나 외부와 연결하여 시스템을 제어할 수 있는 보안약점이다.
                        <br></br><br></br>

                        <b><h3>대응방안</h3></b><br></br>
                        <div>
                            화이트 리스트 방식으로 허용된 확장자만 업로드를 허용한다. 업로드 되는 파일을 저장할 때에는 파일명과 확장자를 외부사용자가 추측할 수 없는 문자열로 변경하여 저장하며, 저장 경로는 ‘web document root’ 밖에 위치시켜서 공격자의 웹을 통한 직접 접근을 차단한다. 또한 파일 실행여부를 설정할 수 있는 경우, 실행 속성을 제거한다.   </div>
                        <br></br><br></br>

                        <b><h3>코드 예제</h3></b><br></br>
                        <div>
                            <b>안전하지 않은 코드의 예1 JAVA</b><br></br>
                            <div>

                                String fileName = multi.getFilesystemName("filename");<br></br>
                                sql = " INSERT INTO board(email,r_num,w_date,pwd,content,re_step,re_num,filename) "
                                + " values ( ?, 0, sysdate(), ?, ?, ?, ?, ? ) "; preparedStatement pstmt = con.prepareStatement(sql);<br></br>
                                pstmt.setString(1, stemail);<br></br>
                                pstmt.setString(2, stpwd);<br></br>
                                pstmt.setString(3, stcontent);<br></br>
                                pstmt.setString(4, stre_step);<br></br>
                                pstmt.setString(5, stre_num);<br></br>
                                pstmt.setString(6, fileName);<br></br>
                                pstmt.executeUpdate();<br></br>
                                Thumbnail.create(savePath+"/"+fileName, savePath+"/"+"s_"+fileName, 150);
                                <br></br>

                            </div>
                            <br></br>
                            업로드 파일의 확장자를 검사하여 허용되지 않은 확장자인 경우 업로드를 제한해야 한다. 업로드할 파일에 대한 유효성을 검사하지 않으면, 위험한 유형의 파일을 공격자가 업로드 하거나 전송할 수 있다.
                            <br></br>
                            <br></br>
                            <b>안전한 코드의 예1 JAVA</b><br></br>
                            <div>

                                String fileName = multi.getFilesystemName("filename");<br></br>
if (fileName != null) {"{"}<br></br>
                                    //1.업로드 파일의 마지막 “.” 문자열의 기준으로 실제 확장자 여부를 확인하고, 대소문자 구별을 해야한다.<br></br>
                                    String fileExt = FileName.substring(fileName.lastIndexOf(".")+1).toLowerCase();<br></br>
//2.되도록 화이트 리스트 방식으로 허용되는 확장자로 업로드를 제한해야 안전하다.<br></br>
if (!"gif".equals(fileExt) {"&&"} !"jpg".equals(fileExt) {"&&"} !"png".equals(fileExt)) {"{"}<br></br>
                                    alertMessage("업로드 불가능한 파일입니다.");<br></br>
return; {"}"}<br></br>

                                {"}"}<br></br>
sql = " INSERT INTO<br></br>
board(email,r_num,w_date,pwd,content,re_step,re_num,filename) " + " values ( ?, 0, sysdate(), ?, ?, ?, ?, ? ) ";<br></br>
PreparedStatement pstmt = con.prepareStatement(sql); <br></br>......<br></br>
Thumbnail.create(savePath+"/"+fileName, savePath+"/"+"s_"+fileName, 150);<br></br>

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

export default Learn_10;