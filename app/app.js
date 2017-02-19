import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home     = require('./views/home.js');
const Vision   = require('./views/vision.js');
const About    = require('./views/about.js');
const Workshop = require('./views/workshop.js');
const Projects = require('./views/projects.js');
const Gallery  = require('./views/gallery.js');
const Members  = require('./views/members.js');
const Recruit  = require('./views/recruit.js');
const Prepare  = require('./views/in_preparation.js');
const NoMatch  = require('./views/not_found.js');

export default class Application extends Component {
  render(){
    return(
      <section id="application">
        <Router history={browserHistory}>
          <Route path="/"              component={Home} />
          <Route path="about"          component={About} />
          <Route path="vision"         component={Vision} />
          <Route path="about/workshop" component={Workshop} />
          <Route path="about/projects" component={Projects} />
          <Route path="gallery"        component={Gallery} />
          <Route path="members"        component={Members} />
          <Route path="recruit"        component={Recruit} />
          <Route path="*"              component={NoMatch} />
        </Router>
      </section>
    );
  }
}
