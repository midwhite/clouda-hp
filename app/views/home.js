import React, {Component} from 'react';
import { Link } from 'react-router';

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
          <h2>News</h2>
          <div className="css-news-container">
            <div className="css-news">
              <h3>新歓お花見</h3>
              <p>4月2日に<a href="https://www.facebook.com/events/1656012578027733/" target="_blank">新歓お花見</a>を開催します。新入生の方は是非お気軽に雰囲気を覗きに来てください！</p>
              <p>新歓イベント情報については<Link to="/recruit">こちら</Link>からご覧いただけます。</p>
            </div>
          </div>
          <h2>Menu</h2>
          <div className="css-top-menu-container">
            <div className="css-top-menu">
              <Link to="/vision" className="css-link">
                <div className="css-icon css-icon-vision"></div>
                <div className="css-top-menu-content">
                  <h3>Vision</h3>
                  <p>Cloud.Aは「学術と社会活動を融合する」を理念として2011年4月に設立されました。設立時の代表の想いについてはこちらをご覧ください。</p>
                  <div className="clear"></div>
                </div>
              </Link>
            </div>

            <div className="css-top-menu">
              <Link to="/about" className="css-link">
                <div className="css-icon css-icon-about"></div>
                <div className="css-top-menu-content">
                  <h3>About</h3>
                  <p>Cloud.Aは「勉強会」と「プロジェクト活動」の2本柱で活動しています。それぞれについての活動指針と概要を知りたい方はこちらをご覧ください。</p>
                  <div className="clear"></div>
                </div>
              </Link>
            </div>

            <div className="css-top-menu">
              <Link to="/about/workshop" className="css-link">
                <div className="css-icon css-icon-ws"></div>
                <div className="css-top-menu-content">
                  <h3>Workshop</h3>
                  <p>過去に開催した全ての勉強会のテーマはこちらをご覧ください。政治経済や国際関係、哲学や言語教育など、幅広い分野の開催実績があります。</p>
                  <div className="clear"></div>
                </div>
              </Link>
            </div>

            <div className="css-top-menu">
              <Link to="/about/projects" className="css-link">
                <div className="css-icon css-icon-projects"></div>
                <div className="css-top-menu-content">
                  <h3>Projects</h3>
                  <p>現在、活動中のプロジェクト一覧はこちらをご覧ください。記載の他にも、立ち上げ検討中のプロジェクトもあります。</p>
                  <div className="clear"></div>
                </div>
              </Link>
            </div>

            <div className="css-top-menu">
              <Link to="/recruit" className="css-link">
                <div className="css-icon css-icon-recruit"></div>
                <div className="css-top-menu-content">
                  <h3>Recruit</h3>
                  <p>{new Date().getFullYear()}年の新歓情報はこちらをご覧ください。自分の大学や学部の中に留まらず、幅広い視野と仲間を得たい方は是非ご参加ください！</p>
                  <div className="clear"></div>
                </div>
              </Link>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

module.exports = Home;