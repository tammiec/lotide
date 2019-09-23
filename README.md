# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tammiec/lotide`

**Require it:**

`const _ = require('@tammiec/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: it will log an assertion statement. Used to two compare arrays
* `assertEqual(x, y)`: returns true if its two parameters are the same.
* `assertObjectEqual(object1, object2)`: returns true if the objects passed in are identical, otherwise returns false.
* `countLetters(string)`: takes in a string, and returns an object with the number of occurances ofeach letter found in the string.
* `countOnly(array, object)`: takes in an array of strings, and an object whose key values are boolean. It returns an object that shows how many occurances of each key that is TRUE was found in the array.
* `eqArrays(array1 array2)`: returns true the arrays passed into it are identical. otherwise returns false
* `eqObjects(object1, object2)`: returns true the objects passed into it are identical. otherwise returns false
* `findKey(object, callback)`: takes in an object and a callback function. It returns the first key for which the callback returns truthy. If no key is found, it returns undefined.
* `findKeyByValue(object, value)`: takes in an object and a value returns the first key whose value matches the second argument. If no match is found, it returns undefined.
* `flatten(multidimensionalArray)`: returns a "flattened array" from the multidimensional array passed into it
* `head(array)`: returns the first element of the array passed into it.
* `letterPositions(string)`: Takes in a string. returns an object whose keys are each unique letter in the string. The values are an array of indices where each letter is found.
* `tail(array)`: returns an array that contains all elements, except the first, of the array that is passed into it as its parameter.
* `map(array, callback)`: Takes in an array and a callback function. It returns a new array based on the results of the callback function. (my own version of the .map() method).
* `takeUntil(array, callback)`: Takes in an array and a callback function. Returns an array with all the items of the given array (from index [0]) until the callback returns a truthy value. The callback's argument is the item in the array.
* `without(array1, array2)`: Takes in two arrays. And returns a new array with only the elements of the first array that are not present in the second array

## Collaborators
* [@TYLER-JM](https://github.com/TYLER-JM)
* [@tammiec](https://github.com/tammiec)