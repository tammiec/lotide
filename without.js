// TEST & ASSERTIONS
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

const without = function(source, itemsToRemove) {
  let removed = [];
  for (let j = 0; j < source.length; j++) {
    if (itemsToRemove.includes(source[j]) === false) {
      removed.push(source[j]);
    }
  }
  return removed;
};

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
