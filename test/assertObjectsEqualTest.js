const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);