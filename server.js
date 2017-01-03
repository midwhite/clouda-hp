const express = require('express');
const app = express();
const routes = [
  '/',
  '/vision',
  '/activity',
  '/about/workshop',
  '/about/actions',
  '/about/community',
  '/history',
  '/projects',
  '/photos',
  '/members',
  '/recruit'
];

app.use(express.static(__dirname+'/public'));

for(let i=0; i<routes.length; i++){
  const route = routes[i];
  app.get(route, (req, res)=>{
    res.sendFile(__dirname+'/index.html');
  });
}

app.listen(3000);
console.log('Server Listening...');