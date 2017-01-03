import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Home extends Component {
  render(){
    const firstviewClassname = `firstview firstview_${Tool.rand(2)+1} contentWrapper`;
    return(
      <div>
        <Header />
        <section id="home">
          <div className={firstviewClassname}></div>
        </section>
      </div>
    );
  }
}

module.exports = Home;