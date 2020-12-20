import React, { Component } from 'react';
import Header from '../components/header.js'
import './talk.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'

class Talk extends Component {

    state = {
        list: []
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
        alert(e.target.id);
    }

    render() {
        let items = [];

        var count = 0
        const talkList = this.state.list.map(

            (talk) => (
                <tbody id={count++} onClick={this.move}>
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
                        {/** <tbody>
                            <td>147</td>
                            <td>1000번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>146</td>
                            <td>1000번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>145</td>
                            <td>1001번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>144</td>
                            <td>1022번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>143</td>
                            <td>1022번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>142</td>
                            <td>1022번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>

                        <tbody>
                            <td>141</td>
                            <td>1022번 질문 있습니다.</td>
                            <td>이승민</td>
                            <td>2020.11.06</td>
                        </tbody>*/}

                    </table>

                    <Pagination>{items}</Pagination>
                </div>
            </div>
        )
    }


}
export default Talk;