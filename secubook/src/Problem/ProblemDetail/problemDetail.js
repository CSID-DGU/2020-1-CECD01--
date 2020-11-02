import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';


import './problemDetail.css'

class ProblemDetail extends Component {

    state = {
        id: 1,
        category : '파일 업로드',
        title: 'JPG 파일만 업로드하기',
        content : 'JPG파일만 업로드 가능하게 하는 코드를 작성하시오. (endsWith 함수 사용)',
        code: 'if (!file.isEmpty()) {\n     String fileName = file.getOriginalFilename();\n     String successMessage = "File successfully uploaded";\n     modelData.put("fileName", fileName);\n     modelData.put("uploadMessage", successMessage);\n     savefile(file);\n     return new ModelAndView("uploadForm", modelData);\n}',
        result: '채점 결과가 여기에 표시됩니다.',
        userCode: 'if (!file.isEmpty()) {\n     String fileName = file.getOriginalFilename();\n     String successMessage = "File successfully uploaded";\n     modelData.put("fileName", fileName);\n     modelData.put("uploadMessage", successMessage);\n     savefile(file);\n     return new ModelAndView("uploadForm", modelData);\n}'
    }
    
    get = (e) => {
        axios.get('http://3.35.220.252/problem/2', {
            params: {
                problemNumber: this.state.id,
            }
        }).then((res) => {
                console.log(res.data);
                // 값 받아온 뒤 화면 구성
            }
            ).catch((err) => {
                console.log(err)
            })

    }

    post = (e) => {
        axios.post('http://3.35.220.252/problem/2', { 
            email: 'ssionii', 
            userCode: this.state.userCode
        }, { 'Content-Type': "application/x-www-form-urlencoded" })
            .then(function (response) {
                console.log(response);

            })
            .catch(error => {

                console.log('error : ', error.response);
            });
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
    }
      
    onChange = (newValue, e) => {
        console.log('onChange', newValue, e);
        this.state.userCode = newValue;
    }

    handleSubmit = () => {
        alert(this.state.userCode);
    }

    render() {
        return (
            <div>
                <button onClick={this.get}>get</button>
                <button onClick={this.post}>post</button>
                <div className="top-wrap">
                    <div className="logo"> 로고 </div>
                    <text className="top-category-text">  문제 풀이 > {this.state.category} >  </text>
                    <text className="top-title-text"> {this.state.title} </text>
                </div>

                <div className="bottom-wrap">
                
                    <div className="left-content">
                    <div className="content-title">{this.state.title}</div>
                     {this.state.content}       
                    </div>
                    <div className="right-container">
                        <div className="right-top-empty"></div>
                        <div>
                            <MonacoEditor
                            width="140vh"
                            height="70vh"
                            language="java"
                            theme="vs-dark"
                            value={this.state.code}
                            onChange={this.onChange}
                            editorDidMount={this.editorDidMount}
                        />
                    </div>

                    <div className="result-container">
                        <b>채점 결과</b>
                        <text className="result-text">{this.state.result}</text>
                        <br></br>
                        <br></br>
                        <button class="submit-button" onClick={this.handleSubmit}>
                             코드 제출
                        </button>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProblemDetail;