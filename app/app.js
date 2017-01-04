import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home     = require('./views/home.js');
const Vision   = require('./views/vision.js');
const Activity = require('./views/activity.js');
const Workshop = require('./views/workshop.js');
const Actions  = require('./views/actions.js');
const Theme    = require('./views/theme.js');
const Projects = require('./views/projects.js');
const Photos   = require('./views/photos.js');
const Members  = require('./views/members.js');
const Recruit  = require('./views/recruit.js');
const NoMatch  = require('./views/not_found.js');

export default class Application extends Component {
  render(){
    return(
      <section id="application">
        <Router history={browserHistory}>
          <Route path="/"                component={Home}     />
          <Route path="vision"           component={Vision}   />
          <Route path="about"            component={Activity} />
          <Route path="about/workshop"   component={Workshop} />
          <Route path="about/actions"    component={Actions} />
          <Route path="history/theme"    component={Theme} />
          <Route path="history/projects" component={Projects} />
          <Route path="history/photos"   component={Photos} />
          <Route path="members"          component={Members} />
          <Route path="recruit"          component={Recruit} />
          <Route path="*"                component={NoMatch}/>
        </Router>
      </section>
    );
  }
}
