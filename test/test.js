var assert = require('assert');
var ac = require('../index.js');

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log('# ac.import inports a list of words');
ac.import(function(words){
  console.log("words.txt had " + words.length + "words in it");
  assert.equal(words.length, 99172);
});

console.log("# attempt to invoke ac.import without a valid  callback");
var error = ac.import('string');
// console.log(error);
assert.equal(error.message, 'callback MUST be a function' );
console.log('# ac.findWord finds a string in words array');
ac.import(function(){
  ac.findWord('awes', function(err, found){
    assert.equal(err, null);
    console.log(found);
    assert.equal(found.length, 5);
  });
});
