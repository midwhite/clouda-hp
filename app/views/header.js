import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      menu: window.screen.width > 500,
      menu_about: false,
      menu_history: false
    }
    this.toggleMenu        = this.toggleMenu.bind(this);
    this.toggleMenuAbout   = this.toggleMenuAbout.bind(this);
    this.toggleMenuHistory = this.toggleMenuHistory.bind(this);
    this.toggleMenuInfo    = this.toggleMenuInfo.bind(this);
  }
  toggleMenu(){
    this.setState({
      menu: !this.state.menu
    });
  }
  toggleMenuAbout(){
    this.setState({
      menu_about: !this.state.menu_about,
      menu_history: false,
      menu_info: false
    });
  }
  toggleMenuHistory(){
    this.setState({
      menu_about: false,
      menu_history: !this.state.menu_history,
      menu_info: false
    });
  }
  toggleMenuInfo(){
    this.setState({
      menu_about: false,
      menu_history: false,
      menu_info: !this.state.menu_info
    });
  }
  render(){
    return(
      <header id="header">
        <h1>Cloud.A<span> - Init Social Actions -</span></h1>
        <img src="/image/menu-btn.png" className="css-menu-icon" onClick={this.toggleMenu} />
        {(()=>{
          if(this.state.menu){
            return(
              <ul className="css-menu">
                <li className="css-menu-item">
                  <div className="css-menu-area">
                    <Link to="/" className="css-link">
                      <p className="css-title">Home</p>
                      <p className="css-description">トップページ</p>
                    </Link>
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area" onClick={this.toggleMenuAbout}>
                    <Link className="css-link">
                      <p className="css-title">About</p>
                      <p className="css-description">活動内容</p>
                    </Link>
                    {(()=>{
                      // Aboutメニュー子要素の表示
                      if(this.state.menu_about){
                        return(
                          <ul className="css-menu-children">
                            <li className="css-menu-child">
                              <Link to="/vision" className="css-link">
                                <p className="css-title">Vision</p>
                                <p className="css-description">設立理念</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/about" className="css-link">
                                <p className="css-title">Activity</p>
                                <p className="css-description">活動概要</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/about/workshop" className="css-link">
                                <p className="css-title">Workshop</p>
                                <p className="css-description">勉強会</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/about/actions" className="css-link">
                                <p className="css-title">Actions</p>
                                <p className="css-description">プロジェクト活動</p>
                              </Link>
                            </li>
                            <div className="clear"></div>
                          </ul>
                        );
                      }
                    })()}
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area" onClick={this.toggleMenuHistory}>
                    <Link className="css-link">
                      <p className="css-title">History</p>
                      <p className="css-description">活動実績</p>
                    </Link>
                    {(()=>{
                      // Historyメニュー子要素の表示
                      if(this.state.menu_history){
                        return(
                          <ul className="css-menu-children">
                            <li className="css-menu-child">
                              <Link to="/history/theme" className="css-link">
                                <p className="css-title">Theme</p>
                                <p className="css-description">勉強会テーマ</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/history/projects" className="css-link">
                                <p className="css-title">Projects</p>
                                <p className="css-description">プロジェクト紹介</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/history/photos" className="css-link">
                                <p className="css-title">Photo Gallary</p>
                                <p className="css-description">活動風景</p>
                              </Link>
                            </li>
                            <div className="clear"></div>
                          </ul>
                        );
                      }
                    })()}
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area" onClick={this.toggleMenuInfo}>
                    <Link className="css-link">
                      <p className="css-title">Information</p>
                      <p className="css-description">活動情報</p>
                    </Link>

                    {(()=>{
                      // Informationメニュー子要素の表示
                      if(this.state.menu_info){
                        return(
                          <ul className="css-menu-children">
                            <li className="css-menu-child">
                              <Link to="/members" className="css-link">
                                <p className="css-title">Members</p>
                                <p className="css-description">メンバー紹介</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link to="/recruit" className="css-link">
                                <p className="css-title">Recruit</p>
                                <p className="css-description">会員募集</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <a href="https://twitter.com/cloudacd/" className="css-link" target="_blank">
                                <p className="css-title">Twitter</p>
                                <p className="css-description">ツイッター</p>
                              </a>
                            </li>
                            <li className="css-menu-child">
                              <a href="https://www.facebook.com/Cloudaworkshop/" className="css-link" target="_blank">
                                <p className="css-title">Facebook</p>
                                <p className="css-description">フェイスブック</p>
                              </a>
                            </li>
                            <div className="clear"></div>
                          </ul>
                        );
                      }
                    })()}
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area">
                    <a href="http://blog.livedoor.jp/midwhite/" className="css-link" target="_blank">
                      <p className="css-title">Blog</p>
                      <p className="css-description">活動ブログ</p>
                    </a>
                  </div>
                </li>
              </ul>
            );
          }
        })()}
        <div className="clear"></div>
      </header>
    );
  }
}

module.exports = Header;