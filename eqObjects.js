const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍🙅🏻‍🙅🏻‍ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (typeof obj1[key] === 'object') {
      if (Array.isArray(obj1[key]) && !eqArrays(obj1[key], obj2[key])) {
        return false;
      } else {
        if (!eqObjects(obj1[key], obj2[key])) {
          return false;
        }
      }
    } else {
      if ((obj1[key]) !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

// TEST CODE
const ab = { a: { z: 1 }, b: 2 };
const ba = { a: { z: 2 }, b: 2 };
assertEqual(eqObjects(ab, ba), false);

const abc = { a: { y: 0, z: 1 }, b: 2, c: 5};
assertEqual(eqObjects(ab, abc), false);

const test = { a: { y: 0, z : { xx: 2}}, b: 2, c: { dd: 4, ee: 5}};
const test2 = { b: 2, c: { dd: 4, ee: 5}, a: { y: 0, z : { xx: 2}} };
assertEqual(eqObjects(test, test2), true);

const test3 = { a: { y: 0, z : { xx: 2}}, b: 2, c: { dd: 4, ee: 5}};
const test4 = { b: 2, c: { dd: 4, ee: 4}, a: { y: 0, z : { xx: 2}} };
assertEqual(eqObjects(test3, test4), false);

const test5 = { a: { y: 0, z : [1, 2]}, b: 2, c: { dd: 4, ee: 5}};
const test6 = { b: 2, c: { dd: 4, ee: 5}, a: { y: 0, z : [1, 2]}};
assertEqual(eqObjects(test5, test6), true);