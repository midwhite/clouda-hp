import React, {Component} from 'react';

const Header = require('./views/header.js');
const TopPage = require('./views/top_page.js');

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  render(){
    return(
      <div>
        <Header />
        <div id="contentWrapper">
          <TopPage />
        </div>
      </div>
    );
  }
}