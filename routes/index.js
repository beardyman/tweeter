var express = require('express');
var router = express.Router();
var tweet = require('../generators/twitter/tweet');

module.exports = function (streamable) {
  /*
   * Make Twitter things!!!
   */
  router.get('/statuses/filter.json', streamable, function (req, res, next) {
    setInterval(function () {
      res.write(tweet.getTweet(), 'json');
    }, 1000);

    res.write(tweet.getTweet(), 'json');
  });

  return router;
};