const Tool = {
  rand: (num)=>{
    return Math.floor(Math.random()*num);
  },
  ajax: {
    get: (url)=>{
      let json;
      if(navigator.userAgent.toLowerCase().indexOf('safari') == -1){
        fetch('/json/themes.json').then((res)=>{
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

var Ajax = {
};

module.exports = Tool;