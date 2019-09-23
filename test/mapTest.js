const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// TEST RESULTS
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual((map(words, word => word[0])), ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5];
assertArraysEqual((map(numbers, number => number * 2)), [2, 4, 6, 8, 10]);

const objects = [{firstName: 'Tammie', lastName: 'Chung'}, {firstName: 'Michelle', lastName: 'Chung'}, {firstName: 'Vicky', lastName: 'Fung'}];
assertArraysEqual((map(objects, object => object.firstName)), ['Tammie', 'Michelle', 'Vicky']);