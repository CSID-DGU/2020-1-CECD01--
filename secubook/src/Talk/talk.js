import React, { Component } from 'react';
import Header from '../components/header.js'
import './talk.css'
import axios from 'axios';

class Talk extends Component {

    state = {
        list: []
    }

    check = (e) => {
        alert(1);
        axios.get('http://3.35.220.252/talk/',)
            .then((resp) => {
                console.log(resp.data);

                for (var i = 0; i < resp.data.results.length; i++) {
                    this.state.list.push({ title: resp.data.results[i].title, id: resp.data.results[i].id });
                }
            }
            ).catch((err) => {
                console.log(err)
            })

    }

    /*    elements = Array.map((item, index) => {
            return <div id={item.}>{item.</div>
        })*/

    render() {
        return (
            <div>
                <Header />
                <div className="connection-wrap">
                    <h1>Talk</h1>
                    <button onClick={this.check}>확인</button>

                </div>
            </div>
        )
    }

}

export default Talk;