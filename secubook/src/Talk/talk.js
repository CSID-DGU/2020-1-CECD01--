import React, { Component } from 'react';
import Header from '../components/header.js'
import './talk.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'

class Talk extends Component {

    state = {
        list: [],
        index: ''
    }

    write = (e) => {
        document.location.href = "/write";
    }

    componentDidMount() {
        //axios.get("http://3.35.220.252/")
        axios.get("http://localhost:8001/talk")
            .then((resp) => {
                console.log(resp.data.results);

                for (var i = 0; i < resp.data.results.length; i++) {
                    this.state.list.push({
                        title: resp.data.results[i].title, id: resp.data.results[i].id, name: resp.data.results[i].user.name, date: resp.data
                            .results[i].createdAt.substr(0, 10)
                    });
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    move = (e) => {
        alert(1)
    }

    render() {
        let items = [];
        var count = 0;
        const talkList = this.state.list.map(

            (talk) => (
                <tbody onClick={this.move} name={count++}>
                    <td>{talk.id}</td>
                    <td>{talk.title}</td>
                    <td>{talk.name}</td>
                    <td>{talk.date}</td>
                </tbody>
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