// ASSERTION FUNCTIONS
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

// MAP FUNCTION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST RESULTS
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual((map(words, word => word[0])), ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5];
assertArraysEqual((map(numbers, number => number * 2)), [2, 4, 6, 8, 10]);

const objects = [{firstName: 'Tammie', lastName: 'Chung'}, {firstName: 'Michelle', lastName: 'Chung'}, {firstName: 'Vicky', lastName: 'Fung'}];
assertArraysEqual((map(objects, object => object.firstName)), ['Tammie', 'Michelle', 'Vicky']);