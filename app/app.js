import React, {Component} from 'react';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  render(){
    return (
      <h1>Cloud.A: Init Social Actions</h1>
    );
  }
}