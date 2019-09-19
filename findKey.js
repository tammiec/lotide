// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FIND KEY FUNCTION
const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};


// TEST CODE
// simple test
const test1 = findKey({
  BlueHill:  1,
  Akaleri:   3,
  noma:      2,
  elBulli:   3,
}, x => x === 2);
assertEqual(test1, 'noma');

// if the key doesn't exist
const test2 = findKey({
  BlueHill:  1,
  Akaleri:   3,
  noma:      2,
  elBulli:   3,
}, x => x === 5);
assertEqual(test2, undefined);

// if there are multiple keys with the same value
const test3 = findKey({
  BlueHill:  1,
  Akaleri:   3,
  noma:      2,
  elBulli:   2,
}, x => x === 2);
assertEqual(test3, 'noma');

// if each value is an object
const test4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(test4, 'noma');

// if the value is a different primitive type
const test5 = findKey({
  BlueHill:  1,
  Akaleri:   3,
  noma:      2,
  elBulli:   3,
}, x => x === 'test');
assertEqual(test5, undefined);

// if the callback function is not a '==='
const test6 = findKey({
  BlueHill:  1,
  noma:      2,
  Akaleri:   3,
  elBulli:   3,
}, x => x > 2);
assertEqual(test6, 'Akaleri');