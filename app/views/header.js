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
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuAbout = this.toggleMenuAbout.bind(this);
    this.toggleMenuHistory = this.toggleMenuHistory.bind(this);
  }
  toggleMenu(){
    this.setState({
      menu: !this.state.menu
    });
  }
  toggleMenuAbout(){
    this.setState({
      menu_about: !this.state.menu_about,
      menu_history: false
    });
  }
  toggleMenuHistory(){
    this.setState({
      menu_about: false,
      menu_history: !this.state.menu_history
    });
  }
  render(){
    return(
      <header id="header">
        <h1>Cloud.A<span> - Init Social Actions -</span></h1>
        <img src="./image/menu-btn.png" className="css-menu-icon" onClick={this.toggleMenu} />
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
                              <Link to="vision" className="css-link">
                                <p className="css-title">Vision</p>
                                <p className="css-description">設立理念</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
                                <p className="css-title">Activity</p>
                                <p className="css-description">活動概要</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
                                <p className="css-title">Workshop</p>
                                <p className="css-description">勉強会</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
                                <p className="css-title">Actions</p>
                                <p className="css-description">プロジェクト活動</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
                                <p className="css-title">Community</p>
                                <p className="css-description">お楽しみ企画</p>
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
                              <Link className="css-link">
                                <p className="css-title">Discussion</p>
                                <p className="css-description">ディスカッション</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
                                <p className="css-title">Actions</p>
                                <p className="css-description">プロジェクト紹介</p>
                              </Link>
                            </li>
                            <li className="css-menu-child">
                              <Link className="css-link">
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
                  <div className="css-menu-area">
                    <Link className="css-link">
                      <p className="css-title">Member</p>
                      <p className="css-description">メンバー紹介</p>
                    </Link>
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area">
                    <Link className="css-link">
                      <p className="css-title">Recruit</p>
                      <p className="css-description">会員募集</p>
                    </Link>
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