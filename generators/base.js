/**
 * Created by jnornhold on 7/13/15.
 */

module.exports.randomInt = function (digets) {
  var size = Math.pow(10, (digets));
  console.log(size);
  return Math.floor(Math.random() * size);
};

module.exports.randomTweetText = function () {

};