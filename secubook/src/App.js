import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Learn from './Learn/learn.js';
import Level from './Level/level.js';
import Problem from './Problem/problem.js'
import Talk from './Talk/talk.js';
import Login from './User/login.js';
import Register from './User/register.js'
import Code from './Code/code.js'
import Header from './components/header.js'
import Learn_Content from './Learn/learn_content.js'
import ProblemDetail from './Problem/ProblemDetail/problemDetail.js'

class App extends Component {

  render() {
    return (
      <div>

        <Router>

          <Switch>
            <Route path="/" exact component={Learn} />
            <Route path="/problem" exact component={Problem} />
            <Route path="/level" exact component={Level} />
            <Route path="/talk" exact component={Talk} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/code" exact component={Code} />
            <Route path="/learn_content" exact component={Learn_Content} />
            <Route path="/problem/content" exact component={ProblemDetail}/>
          </Switch>
        </Router>
      </div>

    );
  }

}

export default App;