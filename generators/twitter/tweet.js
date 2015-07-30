/**
 * Created by jnornhold on 7/13/15.
 */

/*
 * important fields:
 * id_str
 * in_reply_to_user_id_str
 * place
 * text
 * retweeted
 *
 */

var tweets = require('../../actions.js').tweets
  , _ = require('lodash')
  , tArray = _.pluck(tweets, 'action');

module.exports = {
  getTweet: function () {
    var index = Math.floor(tArray.length * Math.random());
    return tArray[index];
  }
};