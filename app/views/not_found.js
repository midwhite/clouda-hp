import React, {Component} from 'react';
import { Link } from 'react-router';

const Header = require('./header.js');
const Tool = require('./tool.js');

class Theme extends Component {
  render(){
    return(
      <div id="404NotFound">
        <Header />
        <div className="css-404-error contentWrapper">
          <h1>404 Not Found</h1>
          <p>お探しのページは見つかりませんでした。</p>
          <Link to="/">TOPに戻る</Link>
        </div>
      </div>
    );
  }
}

module.exports = Theme;