import React, {Component} from 'react';
const Tool = require('./tool.js');

class TopPage extends Component {
  render(){
    const firstviewClassname = `firstview firstview_${Tool.rand(2)+1}`;
    return(
      <div id="home">
        <div className={firstviewClassname}></div>
      </div>
    );
  }
}

module.exports = TopPage;