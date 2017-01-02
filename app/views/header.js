import React, {Component} from 'react';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      menu: window.screen.width > 500,
      menu_about: false,
      menu_history: false
    }
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
        <h1>Cloud.A<span> - Init Social Actions with Intelligence -</span></h1>
        <img src="static/image/menu-btn.png" className="css-menu-icon" onClick={this.toggleMenu.bind(this)} />
        {(()=>{
          if(this.state.menu){
            return(
              <ul className="css-menu">
                <li className="css-menu-item">
                  <div className="css-menu-area">
                    <p className="title">Home</p>
                    <p className="description">トップページ</p>
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area" onClick={this.toggleMenuAbout.bind(this)}>
                    <p className="title">About</p>
                    <p className="description">活動内容</p>
                    {(()=>{
                      // Aboutメニュー子要素の表示
                      if(this.state.menu_about){
                        return(
                          <ul className="css-menu-children">
                            <li className="css-menu-child">
                              <p className="title">Vision</p>
                              <p className="description">設立理念</p>
                            </li>
                            <li className="css-menu-child">
                              <p className="title">Activity</p>
                              <p className="description">活動紹介</p>
                            </li>
                            <li className="css-menu-child">
                              <p className="title">Discussion</p>
                              <p className="description">ディスカッション</p>
                            </li>
                            <li className="css-menu-child">
                              <p className="title">Actions</p>
                              <p className="description">プロジェクト紹介</p>
                            </li>
                            <li className="css-menu-child">
                              <p className="title">Community</p>
                              <p className="description">お楽しみ企画</p>
                            </li>
                            <div className="clear"></div>
                          </ul>
                        );
                      }
                    })()}
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area" onClick={this.toggleMenuHistory.bind(this)}>
                    <p className="title">History</p>
                    <p className="description">活動実績</p>
                  {(()=>{
                    // Historyメニュー子要素の表示
                    if(this.state.menu_history){
                      return(
                        <ul className="css-menu-children">
                          <li className="css-menu-child">
                            <p className="title">Discussion</p>
                            <p className="description">ディスカッション</p>
                          </li>
                          <li className="css-menu-child">
                            <p className="title">Actions</p>
                            <p className="description">プロジェクト紹介</p>
                          </li>
                          <li className="css-menu-child">
                            <p className="title">Photo Gallary</p>
                            <p className="description">活動風景</p>
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
                    <p className="title">Member</p>
                    <p className="description">メンバー紹介</p>
                  </div>
                </li>
                <li className="css-menu-item">
                  <div className="css-menu-area">
                    <p className="title">Recruit</p>
                    <p className="description">会員募集</p>
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