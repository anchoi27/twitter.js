var _ = require('lodash');

var data = [];

function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);

}
function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}



var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = { add: add, list: list, find: find };

// var getFakeName = function() {
var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };

// var getFakeTweet = function() {
//   var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };

for (var k = 0; k < 3; k++) {
  var theName = fakeFirsts[k];// + " " + fakeLasts[k];
  var theTweet = "Grace Hopper Academy is so much better. duh! " + awesome_adj[k];
  add(theName, theTweet);
}

console.log(data);
/*

for (var i = 0; i < 5; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}

*/




