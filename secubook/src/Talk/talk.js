import React, { Component } from 'react';
import Header from '../components/header.js'
import './talk.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'

import cookie from 'react-cookies';

class Talk extends Component {

    state = {
        list: [],
        index: ''
    }

    write = (e) => {
        document.location.href = "/write";
    }

    componentDidMount() {
        axios.get("http://3.35.220.252/")
            //axios.get("http://localhost:8001/talk")
            .then((resp) => {
                console.log(resp.data.results);
                var temp = [];
                for (var i = 0; i < resp.data.results.length; i++) {
                    temp.push({
                        title: resp.data.results[i].title, id: resp.data.results[i].id, name: resp.data.results[i].user.name, date: resp.data
                            .results[i].createdAt.substr(0, 10)
                    });
                }
                this.setState({
                    list: temp,
                });
            }).catch((err) => {
                console.log(err)
            })
    }

    move = (e) => {

        alert(this.state.index);
        //console.log(currentTarget.value) // e.currentTarget.value would be equivalent
    }

    handleCategory = (e) => {
        /*const { index } = this.state;
        index = e.target.id;
        alert(index);*/
    }

    render() {
        let items = [];
        var count = 0;
        const talkList = this.state.list.map(

            (talk) => (
                //id = "0" onClick = { this.handleCategory }
                <tbody onClick={() => {
                    cookie.save("talk_id", talk.id);

                    document.location.href = "/talk_"

                }}>

                    <td>{talk.id}</td>
                    <td>{talk.title}</td>
                    <td>{talk.name}</td>
                    <td>{talk.date}</td>
                </tbody >
            )
        );

        return (
            <div>
                <Header />
                <div className="connection-wrap text-center">


                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>날짜</th>
                            </tr>
                        </thead>

                        {talkList}

                    </table>
                    <button className="talk_button" onClick={this.write}>글쓰기</button>
                    <Pagination>{items}</Pagination>
                </div>

            </div>
        )
    }


}
export default Talk;