const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

// TEST CODE
assertArraysEqual(middle([1]), middle([1, 2])); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4])); //false
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3])); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5])); //false