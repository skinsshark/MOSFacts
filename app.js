var express = require('express');
var bodyParser = require('body-parser');

var facts = require('./facts.json');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send(facts[1] + ' Hello WOrldd ' + facts);
});

app.listen(port, function() {
  console.log('listenin ' + port);
});

app.post('/mosfetshaha', function(req, res, next) {
  var userName = req.body.user_name;
  var randoFact = {
    text: 'gate and base is same same but git diff'
  };

  if (userName !== 'slackbot') {
    return res.status(200).json(randoFact);
  } else {
    return res.status(200).end();
  }
});
