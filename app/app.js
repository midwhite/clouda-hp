import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home   = require('./views/home.js');
const Vision = require('./views/vision.js');

export default class Application extends Component {
  render(){
    return(
      <section id="application">
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="vision" component={Vision} />
        </Router>
      </section>
    );
  }
}
