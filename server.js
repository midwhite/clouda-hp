const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

// 静的ファイルにマッチしなければ全Routingにおいてindex.htmlを返す
app.use(function(req, res, next) {
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000);
console.log('Server Listening...');