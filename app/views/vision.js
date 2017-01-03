import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Vision extends Component {
  render(){
    return(
      <div>
        <Header />
        <section id="vision" className="contentWrapper">
          <h2>Vision</h2>
        </section>
      </div>
    );
  }
}

module.exports = Vision;