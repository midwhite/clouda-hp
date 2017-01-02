import React, {Component} from 'react';

const Header = require('./views/header.js');

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
      </div>
    );
  }
}