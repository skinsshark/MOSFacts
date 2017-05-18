var express = require('express');
var bodyParser = require('body-parser');

//var mos = require('./facts.json');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send('Hello WOrld');
});

app.listen(port, function() {
  console.log('listenin ' + port);
});

app.post('/mosfetshaha', function(req, res, next) {
  var userName = req.body.user_name;
  //var randoFactNum = Math.floor(Math.random() * mos.fact.length);
  
  return res.status(200).json('yooo');
  if (userName !== 'slackbot') {
    return res.status(200).json('yo');
  } else {
    return res.status(200).end();
  }
  
});
