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
const flatten = function(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      }
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
};

// TEST CASES
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(['apples', 'oranges', [3, 4, 5], 'bananas']));
console.log(flatten([1, [2, 3, 4], 5]));
assertArraysEqual(flatten([1, [2, 3, 4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([[1], 2, 3, [4, 5, 6]]), flatten([1, 2, [3, 4], 5, [6]]));