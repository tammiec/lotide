const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: working around array issue
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 3: An array with only one element should yield an empty array for its tail
const empty = tail(["Hello"]);
assertEqual(empty.length, 0);

// Test Case 4: An empty array should yield an empty array for its tail
const empty2 = tail([]);
assertEqual(empty2.length, 0);