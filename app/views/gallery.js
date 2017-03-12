import React, {Component} from 'react';
const Header = require('./header.js');
const Tool = require('./tool.js');

class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      docs: [],
      docId: null,
      tags: [],
      selectedTags: [],
      tagNames: {}
    }
  }
  componentDidMount(){
    const json = Tool.ajax.get('/json/docs.json');
    const docs = json.docs;

    let tags = [];
    docs.forEach((doc, i)=>{
      doc.tags.forEach((tag, j)=>{
        tags.push(tag);
      });
    });
    tags = tags.filter((tag, i)=>{
      return tags.indexOf(tag) === i
    });

    this.setState({
      docs: docs,
      tags: tags,
      tagNames: json.tagNames
    });
  }
  displayModal(id){
    this.setState({
      docId: id
    });
  }
  selectTag(tag, e){
    e.stopPropagation();
    const selectedTags = this.state.selectedTags;
    if(selectedTags.indexOf(tag) == -1){
      // タグを選択する
      selectedTags.push(tag);
    } else {
      // タグを選択から除外する
      selectedTags.splice(selectedTags.indexOf(tag),1);
    }
    this.setState({
      selectedTags: selectedTags
    });
  }
  render(){
    return(
      <div>
        <Header />
        <section id="gallery" className="contentWrapper layout-4">
          <div className="css-wrapper css-bg-shelf">
            <div className="css-header css-tags-box">
              <h2>資料集</h2>
              <div className="css-tags">
              {(()=>{
                return this.state.tags.map((tag)=>{
                  return <p key={tag} className={(this.state.selectedTags.indexOf(tag)>-1) ? "css-tag css-selected-tag css-tag-"+tag : "css-tag css-tag-"+tag} onClick={this.selectTag.bind(this, tag)}>{this.state.tagNames[tag]}</p>;
                });
              })()}
              </div>
            </div>
            <div className="css-contents">
              {(()=>{
                if(this.state.docs.length == 0){
                  return <div>Now Loading...</div>;
                } else {
                  const selectedTags = this.state.selectedTags;
                  return this.state.docs.filter((doc, i)=>{
                    // カテゴリの絞り込み
                    return selectedTags.length == 0 || selectedTags.every((tag)=>{ return doc.tags.indexOf(tag)>-1});
                  }).map((doc)=>{
                    return(
                      <div key={doc.id} className="css-content-wrapper">
                        <div className="css-content css-tags-box" onClick={this.displayModal.bind(this, doc.id)}>
                          <p>第{doc.num}回</p>
                          <p>{doc.title}</p>
                          <div className="css-tags">
                          {(()=>{
                            return doc.tags.map((tag)=>{
                              return <div key={Tool.rand(10000)} className={(this.state.selectedTags.indexOf(tag)>-1) ? "css-tag css-selected-tag css-tag-"+tag : "css-tag css-tag-"+tag} onClick={this.selectTag.bind(this, tag)}>{this.state.tagNames[tag]}</div>
                            });
                          })()}
                          </div>
                        </div>
                      </div>
                    );
                  });
                }
              })()}
            </div>
            <div className="clear"></div>
          </div>
          {(()=>{
            if(this.state.docId){
              return(
                <div className="css-modal-wrapper" onClick={this.displayModal.bind(this, null)}>
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