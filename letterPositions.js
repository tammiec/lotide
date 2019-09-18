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

// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

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