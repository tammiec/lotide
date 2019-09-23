const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

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