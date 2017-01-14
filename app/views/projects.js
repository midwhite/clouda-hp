import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentDidMount(){
    this.setState({
      projects: Tool.ajax.get('/json/projects.json')
    });
  }
  render(){
    return(
      <div>
        <Header />
        <section id="project" className="contentWrapper layout-2">
          <div className="css-wrapper css-bg-projects">
            <div className="css-content">
              <h2>プロジェクト紹介</h2>
              <div className="css-description">
                <p>Cloud.Aで稼働中のプロジェクトをご紹介します。</p>
              </div>
            </div>
            {(()=>{
              if(this.state.projects.length == 0){
                return(
                  <div className="css-no-theme">Now Loading...</div>
                );
              } else {
                return(
                  <ProjectList projects={this.state.projects} />
                );
              }
            })()}
          </div>
        </section>
      </div>
    );
  }
}

class ProjectList extends Component {
  render(){
    const projectsNode = this.props.projects.map((project)=>{
      const bgImageStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: (project.image) ? 'url("/image/pj/'+project.image+'")' : 'url("/image/bg/workshop.png")'
      }
      return(
        <div key={project.id} className="css-theme">
          <div className="css-image" style={bgImageStyle}></div>
          <div className="css-ws-content">
            <p className="css-date"><span className="css-number">{project.id}</span> {project.target}</p>
            <h3 className="css-pj-title">{project.title}</h3>
            <div className="css-pj-description">{project.description}</div>
          </div>
          <div className="clear"></div>
        </div>
      );
    });
    return(
      <div className="css-themes">
        {projectsNode}
      </div>
    );
  }
}

module.exports = Projects;