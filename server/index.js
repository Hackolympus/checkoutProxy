const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.json());

app.use((req,res, next) => {
  console.log(req.url);
  let proxy = 'http://ec2-3-83-149-86.compute-1.amazonaws.com:3016' + req.url;
  console.log(proxy);
  request(proxy).pipe(res);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('proxy listening on port 3000');
});
