import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import MonacoEditor from 'react-monaco-editor';

import cookie from 'react-cookies';
import './code.css'
import axios from 'axios';

class Code_right extends Component {

    state = {
        code: cookie.load("code"),
        time: '',
        result: '',
        userCode: ''
    }

    componentDidMount() {
        cookie.save("result!!", "");
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
    }

    handleCheck = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }

    onChange = (newValue, e) => {
        console.log('onChange', newValue, e);
        this.state.userCode = newValue;
    }

    submit = (e) => {
        var endTime = new Date().getTime();
        alert(this.state.code);

        //axios.post('http://3.35.220.252/auth/logout', { problemNumber: cookie.load("number"), time: endTime - cookie.load("starttime"), userCode: this.state.code }, { withCredentials: true, }
        axios.post('http://localhost:8001/problem/check', { userCode: this.state.code, problemNumber: cookie.load("number"), time: endTime - cookie.load("starttime"), }, { withCredentials: true, }
            //axios.post('http://localhost:8001/talk/add', { title: "title", content: "content", }, { withCredentials: true, }
        )
            .then(function (response) {
                console.log(response.data.testMessage);
                alert(response.data.result);
            })
            .catch(error => {
                console.log('error : ', error.response)

                //document.location.href = "/login";
            });
    }

    heyhey = () => {
        alert(this.state.result)
    }


    render() {

        return (
            <div>

                <MonacoEditor
                    width="100vh"
                    height="70vh"
                    language="java"
                    theme="vs-dark"

                    value={this.state.code}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
                {cookie.load("result!!")}
                <button className="code_button" onClick={this.submit}>제출하기</button>
            </div>

        )

    }
}

export default Code_right;