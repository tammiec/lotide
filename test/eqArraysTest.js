const eqArrays = require('../eqArray');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true for [1, 2, 3] & [1, 2, 3]', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false for ["1", "2", "3"] & ["1", "2", 3]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it('should return true for [[2, 3], [4, [6, 7]]] & [[2, 3], [4, [6, 7]]]', () => {
    assert.equal(eqArrays([[2, 3], [4, [6, 7]]], [[2, 3], [4, [6, 7]]]), true);
  });
  it('should return false for [[2, 3], [4, [6, 7]]] & [[2, 3], [4, [6, 7]]]', () => {
    const nested1 = [1, [2, 3, 4], 5, 6, [7, [8, 9]]];
    const nested1Twin = [1, [2, 3, 4], 5, "6", [7, [8, 9]]];
    assert.equal(eqArrays(nested1, nested1Twin), false);
  });
});