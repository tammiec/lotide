const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it("should return ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], x => x[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("should return ['HOW', 'MANY', 'LETTERS', 'IN', 'THESE', 'WORDS']", () => {
    const results2 = map(["how", "many", "letters", "in", "these", "words"], word => word.toUpperCase());
    assert.deepEqual(results2, ['HOW', 'MANY', 'LETTERS', 'IN', 'THESE', 'WORDS']);
  });
  it('should throw an error if the first parameter is not an array', () => {
    const test = {a: 2, b: 1, c: 5};
    assert.throws(() => map(test, x => x++), Error);
  });
});