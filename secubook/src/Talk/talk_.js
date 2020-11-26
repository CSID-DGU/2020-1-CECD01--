import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header.js'
import Arrow from '../assets/play.svg'
import axios from 'axios';

import cookie from 'react-cookies';

class Talk_ extends Component {

    state = {
        title: '',
        content: '',
        createdAt: '',
        comment: [],
        temp: ''

    };

    componentDidMount() {
        //        
        //axios.get("http://3.35.220.252/talk/detail/" + cookie.load("talk_id"), { withCredentials: true, })

        axios.get("http://localhost:8001/talk/detail/" + cookie.load("talk_id"), { withCredentials: true, })
            .then((resp) => {
                console.log(resp.data.results.title);
                var c = [];
                //console.log(resp.data.results.comments[0].createdAt);
                for (var i = 0; i < resp.data.results.comments.length; i++) {
                    c.push({
                        id: resp.data.results.comments[i].host, content: resp.data.results.comments[i].content, createdAt: resp.data.results.comments[i].createdAt.substr(0, 10)
                    })
                }

                this.setState({
                    title: resp.data.results.title,
                    content: resp.data.results.content,
                    createdAt: resp.data.results.createdAt.substr(0, 10),
                    comment: c

                });

            })
            .catch((err) => {
                console.log(err)
            })
    }

    send = () => {
        //3.35.220.252

        //axios.post('http://3.35.220.252/talk/comment', { boardId: cookie.load("talk_id"), content: this.state.temp }, { withCredentials: true, }
        axios.post('http://localhost:8001/talk/comment', { boardId: cookie.load("talk_id"), content: this.state.temp }, { withCredentials: true, }
        )
            .then(function (response) {
                document.location.href = "/talk_";
            }).catch(error => {
                alert("error")
                console.log('error : ', error.response)

            });

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const commentList = this.state.comment.map(

            (comment) => (
                <div className="content" onClick={this.move} >
                    <div className="problem_num">{comment.content}</div><br></br>
                    <br></br>

                </div>

            )
        );
        return (
            <div>
                <Header />
                <div className="connection-wrap-content ">

                    <div>
                        <div className="content"><h3>Title </h3></div>
                        <div className="content">{this.state.title}<br></br></div><br></br>
                        <div className="content"><h3>Content </h3></div>
                        <div className="content">{this.state.content}<br></br></div><br></br>
                        <div className="content"><h3>Comment </h3></div>

                        {commentList}

                    </div><br></br><br></br>

                    <div className="comment_content">
                        <input className="talk_content" id="temp" name="temp" value={this.state.temp} onChange={this.handleChange} className="form-control" placeholder="댓글" required="" autoFocus="" />

                        <button className="content_button" onClick={this.send}>댓글달기</button>
                    </div>


                </div >
            </div >
        )
    }

}

export default Talk_;