// TEST & ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🙌🙌🙌 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let mid = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      mid.push(array[midIndex]);
    }
    if (array.length % 2 === 0) {
      mid.push(array[midIndex - 1]);
      mid.push(array[midIndex]);
    }
  }
  return mid;
};

// TEST CODE
assertArraysEqual(middle([1]), middle([1, 2])); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4])); //false
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3])); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5])); //false