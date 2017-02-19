import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Members extends Component {
  constructor(){
    super();
    this.state = {
      members: []
    }
  }
  componentDidMount(){
    const json = Tool.ajax.get('/json/members.json');
    this.setState({
      members: json.members,
      universities: json.universities
    });
  }
  render(){
    return(
      <div>
        <Header />
        <section id="theme" className="contentWrapper layout-2">
          <div className="css-wrapper css-bg-members">

            <div className="css-content">
              <h2>運営紹介</h2>
              <div className="css-description">
                <p>Cloud.A運営チームのメンバーをご紹介します。</p>
              </div>
            </div>

            {(()=>{
              if(this.state.members.length == 0){
                return(
                  <div className="css-no-theme">Now Loading...</div>
                );
              } else {
                return(
                  <MemberList members={this.state.members} />
                );
              }
            })()}

            <div className="css-content">
              <h2>大学別参加者実績</h2>
              <div className="css-description">
                <p>Cloud.Aの勉強会参加者の大学別実績です。</p>
                <table className="css-table">
                  {(()=>{
                    if(this.state.members.length == 0){
                      return(
                        <tbody>
                          <tr>
                            <td>Now Loading...</td>
                          </tr>
                        </tbody>
                      );
                    } else {
                      return(
                        <UnivList universities={this.state.universities} />
                      );
                    }
                  })()}
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class MemberList extends Component {
  render(){

    const membersNode = this.props.members.map((member)=>{
      const tagsNode = member.tags.map((tag)=>{
        return(
          <p key={tag} className="css-tag">{tag}</p>
        );
      });
      const bgImageStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: (member.image) ? 'url("/image/ws/'+member.image+'")' : 'url("/image/bg/workshop.png")'
      }
      return(
        <div key={member.id} className="css-theme">
          <div className="css-image" style={bgImageStyle}></div>
          <div className="css-ws-content">
            <p className="css-date">{member.position}</p>
            <p className="css-date">{member.univ}</p>
            <div className="css-pj-description">{Tool.simpleFormat(member.introduction)}</div>
            <div className="css-tags">{tagsNode}</div>
          </div>
          <div className="clear"></div>
        </div>
      );
    });
    return(
      <div className="css-themes">
        {membersNode}
      </div>
    );
  }
}

class UnivList extends Component {
  render(){
    const UniversitiesNode = this.props.universities.map((univ)=>{
      return(
        <tr key={univ.id}>
          <td>{univ.name}</td>
        </tr>
      );
    });
    return(
      <tbody>
        {UniversitiesNode}
      </tbody>
    );
  }
}

module.exports = Members;