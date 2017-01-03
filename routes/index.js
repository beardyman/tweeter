'use strict';
let express = require('express');
let router = express.Router();
let tweet = require('../generators/twitter/tweet');


function writeTweet(res) {
  let curTweet =  tweet.getTweet();
  res.write(curTweet, 'json');
}


module.exports = function (streamable) {
  /*
   * Make Twitter things!!!
   */
  router.get('/statuses/filter.json', streamable, function (req, res) {
    console.log('connection made');
    setInterval(function () {
      writeTweet(res);
    }, 1000);

    writeTweet(res);
  });

  router.post('/statuses/retweet/:id', function (req, res) {
    console.log('posting to ' + req.params.id);
    console.log(req.body);
    console.log('\n\n');

    res.status(200).send();
  });

  return router;
};