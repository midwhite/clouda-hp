import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Actions extends Component {
  render(){
    return(
      <div>
        <Header />
        <section id="actions" className="contentWrapper layout-1">
          <div className="css-wrapper css-bg-vision-1">
            <div className="css-content">
              <h2>プロジェクト活動</h2>
              <p className="css-title">ビジョン。ビジョン。ビジョン。</p>
              <div className="css-description">
                <p>説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。</p>
              </div>
            </div>
          </div>

          <div className="css-wrapper css-bg-vision-2">
            <div className="css-content">
              <h2>プロジェクト活動</h2>
              <p className="css-title">ビジョン。ビジョン。ビジョン。</p>
              <div className="css-description">
                <p>説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。</p>
              </div>
            </div>
          </div>

          <div className="css-wrapper css-bg-vision-3">
            <div className="css-content">
              <h2>プロジェクト活動</h2>
              <p className="css-title">ビジョン。ビジョン。ビジョン。</p>
              <div className="css-description">
                <p>説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

module.exports = Actions;