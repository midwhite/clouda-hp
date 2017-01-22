import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Recruit extends Component {
  render(){
    return(
      <div>
        <Header />
        <div id="recruit">
          <h2>募集ポスト</h2>
          <h3>Administration Team</h3>
          <ul>
            <li>広報</li>
            <li>学術サポート</li>
            <li>プロジェクトサポート</li>
            <li>交流会企画</li>
          </ul>
          <h3>Project Team</h3>
          <ul>
            <li>マネージャー</li>
            <li>リサーチャー</li>
            <li>マーケター</li>
            <li>エンジニア</li>
          </ul>
          <h3>会員</h3>
        </div>
      </div>
    );
  }
}

module.exports = Recruit;