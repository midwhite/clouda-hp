import React, {Component} from 'react';
import { Link } from 'react-router';

const Header = require('./header.js');

class InPreparation extends Component {
  render(){
    return(
      <div id="404NotFound">
        <Header />
        <div className="css-404-error contentWrapper">
          <h1>準備中</h1>
          <p>申し訳ありません。こちらのページは準備中です。</p>
          <Link to="/">TOPに戻る</Link>
        </div>
      </div>
    );
  }
}

module.exports = InPreparation;