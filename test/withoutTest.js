const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should return [2, 3] when input is [1, 2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should not alter the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"])
  });
  it('should not contain any elements from itemsToRemove', () => {
    const words = [1, 2, 3, 4, 5];
    assert.notSameMembers(without(words, [3, 4]), [3, 4]);
  });
  it('should remove all instances of the item to remove', () => {
    const nums = [1, 2, 1, 5, 7, 5];
    assert.deepEqual(without(nums, [1, 5]), [2, 7]);
  })
});