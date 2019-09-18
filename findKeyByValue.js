// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  const allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  police: 'Brooklyn Nine-Nine',
  foreign: 'Cable Girls',
  reality: 'The Bachelor'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'police'); // this should fail
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Cable Girls'), 'foreign');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Survivor'), undefined);