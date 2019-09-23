const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');
// TEST CASES
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(['apples', 'oranges', [3, 4, 5], 'bananas']));
console.log(flatten([1, [2, 3, 4], 5]));
assertArraysEqual(flatten([1, [2, 3, 4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([[1], 2, 3, [4, 5, 6]]), flatten([1, 2, [3, 4], 5, [6]]));