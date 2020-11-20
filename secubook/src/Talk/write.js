import React, { Component } from 'react';
import Header from '../components/header.js'
import './talk.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

class Write extends Component {

    state = {
        title: '',
        content: ''
    };

    write = (e) => {

        //
        //axios.post('http://3.35.220.252/talk/add', { title: this.state.title, content: this.state.content }, { withCredentials: true, }

        axios.post('http://localhost:8001/talk/add', { title: this.state.title, content: this.state.content }, { withCredentials: true, }
        )
            .then(function (response) {
                document.location.href = "/talk";
            }).catch(error => {
                alert("error")
                console.log('error : ', error.response)

            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <div className="content">제목 </div>

                    <input name="title" value={this.state.title} onChange={this.handleChange} className="title_input" type="text"></input>
                    <br></br>
                    <br></br>
                    <div className="content">내용</div>
                    <input name="content" value={this.state.content} onChange={this.handleChange} className="content_input" type="text"></input>
                </div>
                <button className="write_button" onClick={this.write}>작성하기</button>
            </div >
        )
    }
}

export default Write;