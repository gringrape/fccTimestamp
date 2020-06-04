// 1. url check
// 2. method check -> dispatch
// 3. in handler 
//  3-1. parse path variable
//  3-2. validation
//  3-3. return result 

// 1. url check 
// - bad url check

const assert = require('assert');

function isMatched(url, pattern) {
  if (url == null) {
    return false;
  }
}

assert.equal(isMatched('', '/api')); // false
