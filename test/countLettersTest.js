const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
// TEST CODE
const ex1 = countLetters('lighthouse in the house');
const ex2 = countLetters('hello how are you');

assertEqual(ex1.h, 4);
assertEqual(ex2.e, 2);
assertEqual(ex1.m, undefined);