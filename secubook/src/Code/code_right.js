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
        result: ''
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
        //axios.post('http://3.35.220.252/auth/logout', { problemNumber: cookie.load("number"), time: endTime - cookie.load("starttime"), userCode: this.state.code }, { withCredentials: true, }
        axios.post('http://localhost:8001/problem/check', { problemNumber: cookie.load("number"), time: endTime - cookie.load("starttime"), userCode: this.state.code }, { withCredentials: true, }
        )
            .then(function (response) {
                this.setState({
                    result: response.data.results
                })
                //document.location.href = "/";
            })
            .catch(error => {
                console.log('error : ', error.response)

                //document.location.href = "/login";
            });
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
                {this.state.result}
                <button className="code_button" onClick={this.submit}>제출하기</button>
            </div>

        )

    }
}

export default Code_right;