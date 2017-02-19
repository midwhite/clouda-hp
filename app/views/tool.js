import React, {Component} from 'react';

const Tool = {
  rand: (num)=>{
    return Math.floor(Math.random()*num);
  },
  simpleFormat: (text)=>{
    const regex = /(\n)/g
    return text.split(regex).map(function(line){
      if(line.match(regex)){
        return <br key={Tool.rand(1000000000)} />;
      } else {
        return line;
      }
    });
  },
  ajax: {
    get: (url)=>{
      let json;
      if(navigator.userAgent.toLowerCase().indexOf('safari') == -1){
        fetch(url).then((res)=>{
          return res.json();
        }).then((data)=>{
          json = data;
        });
      } else {
        const request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();
        if(request.status === 200){
          json = request.responseText;
        }
      }
      return JSON.parse(json);
    }
  }
}

module.exports = Tool;