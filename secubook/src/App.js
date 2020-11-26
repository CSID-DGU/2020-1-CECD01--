import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Learn from './Learn/learn.js';
import Level from './Level/level.js';
import Problem from './Problem/problem.js'
import Talk from './Talk/talk.js';
import Talk_ from './Talk/talk_.js'
import Login from './User/login.js';
import Register from './User/register.js'
import Code from './Code/code.js'
import Learn_Content from './Learn/learn_content.js'
import Learn_Problem from './Learn/learn_problem.js'
import MyPage from './User/myPage.js'
import Level_Content from './Level/level_content.js'
import Learn_0 from './Learn/0.js'
import Learn_1 from './Learn/1.js'
import Learn_2 from './Learn/2.js'
import Learn_3 from './Learn/3.js'
import Learn_4 from './Learn/4.js'
import Learn_5 from './Learn/5.js'
import Learn_6 from './Learn/6.js'
import Learn_7 from './Learn/7.js'
import Learn_8 from './Learn/8.js'
import Learn_9 from './Learn/9.js'
import Learn_10 from './Learn/10.js'
import Learn_11 from './Learn/11.js'
import Learn_0_ from './Learn/0_.js'
import Learn_1_ from './Learn/1_.js'
import Learn_2_ from './Learn/2_.js'
import Learn_3_ from './Learn/3_.js'
import Learn_4_ from './Learn/4_.js'
import Learn_5_ from './Learn/5_.js'
import Learn_6_ from './Learn/6_.js'
import Learn_7_ from './Learn/7_.js'
import Learn_8_ from './Learn/8_.js'
import Learn_9_ from './Learn/9_.js'
import Learn_10_ from './Learn/10_.js'
import Learn_11_ from './Learn/11_.js'
import Write from './Talk/write.js'
import Level1 from './Level/level1.js'
import Level2 from './Level/level2.js'
import Level3 from './Level/level3.js'

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
            <Route path="/learn_problem" exact component={Learn_Problem} />
            <Route path="/mypage" exact component={MyPage} />
            <Route path="/level_content" exact component={Level_Content} />
            <Route path="/learn_0" exact component={Learn_0} />
            <Route path="/learn_1" exact component={Learn_1} />
            <Route path="/learn_2" exact component={Learn_2} />
            <Route path="/learn_3" exact component={Learn_3} />
            <Route path="/learn_4" exact component={Learn_4} />
            <Route path="/learn_5" exact component={Learn_5} />
            <Route path="/learn_6" exact component={Learn_6} />
            <Route path="/learn_7" exact component={Learn_7} />
            <Route path="/learn_8" exact component={Learn_8} />
            <Route path="/learn_9" exact component={Learn_9} />
            <Route path="/learn_10" exact component={Learn_10} />
            <Route path="/learn_11" exact component={Learn_11} />
            <Route path="/learn_0_" exact component={Learn_0_} />
            <Route path="/learn_1_" exact component={Learn_1_} />
            <Route path="/learn_2_" exact component={Learn_2_} />
            <Route path="/learn_3_" exact component={Learn_3_} />
            <Route path="/learn_4_" exact component={Learn_4_} />
            <Route path="/learn_5_" exact component={Learn_5_} />
            <Route path="/learn_6_" exact component={Learn_6_} />
            <Route path="/learn_7_" exact component={Learn_7_} />
            <Route path="/learn_8_" exact component={Learn_8_} />
            <Route path="/learn_9_" exact component={Learn_9_} />
            <Route path="/learn_10_" exact component={Learn_10_} />
            <Route path="/learn_11_" exact component={Learn_11_} />
            <Route path="/write" exact component={Write} />
            <Route path="/level1" exact component={Level1} />
            <Route path="/level2" exact component={Level2} />
            <Route path="/level3" exact component={Level3} />
            <Route path="/talk_" exact component={Talk_} />
          </Switch>
        </Router>
      </div>

    );
  }

}

export default App;