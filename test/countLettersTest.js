const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('should return 4 for letter h in lighthouse in the house', () => {
    assert.strictEqual(countLetters('lighthouse in the house').h, 4);
  });
  it('should return undefined for letter m in hello', () => {
    assert.isUndefined(countLetters('hello').m);
  });
  it("should return object for the function's return value", () => {
    assert.isObject(countLetters('hello'));
  });
  it("should not count spaces", () => {
    assert.doesNotHaveAnyKeys(countLetters('hello how are you'), [' ']);
  });
});

// const assertEqual = require('../assertEqual');
// 
// // TEST CODE
// const ex1 = countLetters('lighthouse in the house');
// const ex2 = countLetters('hello how are you');

// assertEqual(ex1.h, 4);
// assertEqual(ex2.e, 2);
// assertEqual(ex1.m, undefined);