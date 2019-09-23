const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CODE
const ex1 = letterPositions('lighthouse in the house');
const ex2 = letterPositions('hello');

console.log(ex1);
console.log(ex2);

assertArraysEqual(letterPositions(ex2.h), [1]);
assertArraysEqual(letterPositions(ex2.e), [1]);
assertArraysEqual(letterPositions(ex2.l), [2]);
assertArraysEqual(letterPositions(ex2.o), [1]);
assertArraysEqual(letterPositions(ex1.i), [2]);
assertArraysEqual(letterPositions(ex1.h), [4]);