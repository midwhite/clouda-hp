import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      docs: [],
      docId: null
    }
  }
  componentDidMount(){
    this.setState({
      docs: Tool.ajax.get('/json/docs.json')
    });
  }
  displayModal(id){
    this.setState({
      docId: id
    });
  }
  onClickModalWrapper(){
    this.setState({
      docId: null
    });
  }
  render(){
    const docsNodes = this.state.docs.map((doc)=>{
      return(
        <div key={doc.id} className="css-content-wrapper">
          <div className="css-content" onClick={this.displayModal.bind(this, doc.id)}>
            <p>第{doc.num}回</p>
            <p>{doc.title}</p>
          </div>
        </div>
      );
    });
    return(
      <div>
        <Header />
        <section id="gallery" className="contentWrapper layout-4">
          <div className="css-wrapper css-bg-shelf">
            <h2>資料集</h2>
            <div className="css-contents">
              {(()=>{
                if(this.state.docs.length == 0){
                  return(
                    <div>Now Loading...</div>
                  );
                } else {
                  return docsNodes;
                }
              })()}
            </div>
            <div className="clear"></div>
          </div>
          {(()=>{
            if(this.state.docId){
              return(
                <div className="css-modal-wrapper" onClick={this.onClickModalWrapper.bind(this)}>
                  <div className="css-modal" style={{height: (window.screen.width > 600) ? 400 : (window.screen.width * 3 / 4)}}>
                    <iframe src={"https://docs.google.com/presentation/d/"+this.state.docId+"/embed?start=false&loop=true"} frameBorder="0" width={(window.screen.width > 600) ? "600px" : "100%"} height={(window.screen.width > 600) ? "400px" : (window.screen.width * 3 / 4)+"px"} allowFullScreen="true"></iframe>
                  </div>
                </div>
              );
            }
          })()}
        </section>
      </div>
    );
  }
}

module.exports = Gallery;