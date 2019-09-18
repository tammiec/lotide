const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of object1Keys) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if ((object1[key]) !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`🙌🙌🙌 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);