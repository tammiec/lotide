// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// TEST CODE
const ex1 = countLetters('lighthouse in the house');
const ex2 = countLetters('hello how are you');

assertEqual(ex1.h, 4);
assertEqual(ex2.e, 2);
assertEqual(ex1.m, undefined);