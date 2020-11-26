import React, { Component } from 'react';
import Header from '../components/header.js'
import './learn.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/Am_image1.png'
import image2 from '../assets/xss_image2.png'
import image3 from '../assets/xss_image3.png'
import image4 from '../assets/xss_image4.png'
import image5 from '../assets/xss_image5.png'

class Learn_11 extends Component {

    state = {
        check: 0
    };

    move = (e) => {
        document.location.href = "/learn_11_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <h1>암호화</h1>
                        <b><h3>취약점 개념 설명</h3></b>
                        <br></br>
                        SW 개발자들은 환경설정 파일에 저장된 패스워드를 보호하기 위하여 간단한 인코딩 함수를 이용 하여 패스워드를 감추는 방법을 사용하기도 한다. 그렇지만 base64와 같은 지나치게 간단한 인코딩 함수로는 패스워드를 제대로 보호할 수 없다.
정보보호 측면에서 취약하거나 위험한 암호화 알고리즘을 사용해서는 안 된다. 표준화되지 않은 암호화 알고리즘을 사용하는 것은 공격자가 알고리즘을 분석하여 무력화시킬 수 있는 가능성을 높일 수도 있다. 몇몇 오래된 암호화 알고리즘의 경우는 컴퓨터의 성능이 향상됨에 따라 취약해지기도 해서, 예전에는 해독하는데 몇 십 억년이 걸릴 것이라고 예상되던 알고리즘이 며칠이나 몇 시간 내에 해독되기도 한다. RC2, RC4, RC5, RC6, MD4, MD5, SHA1, DES 알고리즘이 여기에 해당된다. DES 암호화 알고리즘의 경우, 64비트의 평문을 46비트의 암호문으로 만드는 대표적인 블록 암호 기술로서, 1975년에 당시 NBS(현재의 NIST)를 통해 발표되어 그 이후로 수많은 시스템에 사용되어져 왔지만, 현재는 IT 전반적인 HW 성능의 발전으로 빠른 시간 안에 해독이 가능하며, 더이상 안전하지 않은 암호화 알고리즘으로 알려져 있다.
<br></br><br></br>

                        <b><h3>대응방안</h3></b><br></br>
                        <div>
                            자신만의 암호화 알고리즘을 개발하는 것은 위험하며, 학계 및 업계에서 이미 검증된 표준화된 알고리즘을 사용한다. 기존에 취약하다고 알려진 DES, RC5등의 암호알고리즘을 대신하여, 3DES, AES, SEED 등의 안전한 암호알고리즘으로 대체하여 사용한다. 또한, 업무관련 내용, 개인정보 등에 대한 암호 알고리즘 적용 시, IT보안인증 사무국이 안전성을 확인한 검증필 암호모듈을 사용해야한다.
                            <br></br>
                            안전한 암호 알고리즘 및 키 길이는 다음과 같다.<br></br>
                            <img className="image" src={image1}></img><br></br>

                        </div>
                        <br></br><br></br>

                        <b><h3>코드 예제</h3></b><br></br>
                        다음 예제는 취약한 DES 알고리즘으로 암호화하고 있다.

                        <div>
                            <br></br>
                            <b>안전하지 않은 코드의 예 JAVA</b><br></br>
                            <div>

                                import java.security.*;<br></br>
                                import javax.crypto.Cipher;<br></br>
                                import javax.crypto.NoSuchPaddingException;<br></br>
public class CryptoUtils {"{"}<br></br>
                                    public byte[] encrypt(byte[] msg, Key k) {"{"}<br></br>
                                    byte[] rslt = null;<br></br>
          try {"{"}<br></br>
                                    // 키 길이가 짧아 취약함 암호와 알고리즘인 DES를 사용하여 안전하지 않다.<br></br>
                                    Cipher c = Cipher.getInstance(“DES”);<br></br>
               c.init(Cipher.ENCRYPT_MODE, k);<br></br>
               rslt = c.update(msg);<br></br>
                                {"}"}
                                <br></br>

                            </div>

                            <br></br>
                            <b>안전한 코드의 예 JAVA</b><br></br>
                            <div>

                                import java.security.*;<br></br>
                                import javax.crypto.Cipher;<br></br>
                                import javax.crypto.NoSuchPaddingException;<br></br>
public class CryptoUtils {"{"}<br></br>
                                    public byte[] encrypt(byte[] msg, Key k) {"{"}<br></br>
                                    byte[] rslt = null;<br></br>
          try {"{"}<br></br>
                                    // 키 길이가 길어 강력한 알고리즘인 AES를 사용하여 안전하다.<br></br>
                                    Cipher c = Cipher.getInstance(“AES/CBC/PKCS5Padding”);<br></br>
               c.init(Cipher.ENCRYPT_MODE, k);<br></br>
               rslt = c.update(msg);<br></br>
                                {"}"}<br></br>

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

export default Learn_11;