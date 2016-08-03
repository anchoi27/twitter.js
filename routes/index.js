var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { list: tweets } ); //this shows all the tweets on the main page. http://localhost:3000
});

router.get('/users/:username', function(req, res) {
  var specificUser = req.params.username;
  var tweet = tweetBank.find( {name: specificUser} );
  res.render( 'index', { list: tweet, userName: specificUser }); //you can pass multiple properties here to use in index.html
});


module.exports = router;