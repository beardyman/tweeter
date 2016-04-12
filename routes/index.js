var express = require('express');
var router = express.Router();
var tweet = require('../generators/twitter/tweet');

module.exports = function (streamable) {
  /*
   * Make Twitter things!!!
   */
  router.get('/statuses/filter.json', streamable, function (req, res) {
    console.log('connection made');
    setInterval(function () {
      res.write(tweet.getTweet(), 'json');
    }, 1000);

    res.write(tweet.getTweet(), 'json');
  });

  router.post('/statuses/retweet/:id', function (req, res) {
    console.log('posting to ' + req.params.id);
    console.log(req.body);
    console.log('\n\n');

    res.status(200).send();
  });

  return router;
};