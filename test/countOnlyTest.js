const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Agouhanna"
  ];

  const namesToCount = { "Jason": true, "Karima": true, "Fang": true, 'Agouhanna': true};

  it("should return 1 when for Jason's count", () => {
    assert.strictEqual((countOnly(firstNames, namesToCount)['Jason']), 1);
  });
  it('should return undefined for Karima', () => {
    assert.strictEqual(countOnly(firstNames, namesToCount).Karima, undefined);
  });
  it('should return 2 for Fang', () => {
    assert.strictEqual(countOnly(firstNames, namesToCount).Fang, 2);
  });
});