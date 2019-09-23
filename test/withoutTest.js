const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
// TEST CASES
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const numbers = [1, 2, 3, 4, 5];
console.log(without(numbers, [4]));
assertArraysEqual(numbers, [1, 2, 3, 4, 5]);
assertArraysEqual(without(numbers, [4]), [1, 2, 3, 4, 5]);

const numbers2 = [1, 2, 1, 5, 7, 5];
console.log(without(numbers2, [1, 5]));