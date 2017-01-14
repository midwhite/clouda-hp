import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Theme extends Component {
  constructor(){
    super();
    this.state = {
      themes: []
    }
  }
  componentDidMount(){
    this.setState({
      themes: Tool.ajax.get('/json/themes.json').reverse()
    });
  }
  render(){
    return(
      <div>
        <Header />
        <section id="theme" className="contentWrapper layout-2">
          <div className="css-wrapper css-bg-pencil">
            <div className="css-content">
              <h2>勉強会の活動実績</h2>
              <div className="css-description">
                <p>Cloud.Aで今まで実施した{this.state.themes.length}回分の勉強会のテーマを掲載しています。</p>
              </div>
            </div>
            {(()=>{
              if(this.state.themes.length == 0){
                return(
                  <div className="css-no-theme">Now Loading...</div>
                );
              } else {
                return(
                  <ThemeList themes={this.state.themes} />
                );
              }
            })()}
          </div>
        </section>
      </div>
    );
  }
}

class ThemeList extends Component {
  render(){
    const themesNode = this.props.themes.map((theme)=>{
      const bgImageStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: (theme.image) ? 'url("/image/ws/'+theme.image+'")' : 'url("/image/bg/workshop.png")'
      }
      return(
        <div key={theme.id} className="css-theme">
          <div className="css-image" style={bgImageStyle}></div>
          <div className="css-ws-content">
            <p className="css-date"><span className="css-number">{theme.id}</span> {theme.date}</p>
            <h3>{theme.title}</h3>
          </div>
          <div className="clear"></div>
        </div>
      );
    });
    return(
      <div className="css-themes">
        {themesNode}
      </div>
    );
  }
}

module.exports = Theme;