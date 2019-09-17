const assertArraysEqual = function(array1, array2) {
  let assertion = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      assertion = false;
    }
  }
  if (assertion === false) {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`🙌🙌🙌 Assertion Passed: ${array1} === ${array2}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);