const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    police: "Brooklyn Nine-Nine"
  };
  
  const nums = {
    one: 1,
    two: 2,
    three: 3
  };
  it("should return 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined for 'That 70's Show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
  it("should return comedy for Brooklyn Nine-Nine", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("shouldn't return police for Brooklyn Nine-Nine", () => {
    assert.notStrictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "police");
  });
  it("should return 'two' for 2", () => {
    assert.strictEqual(findKeyByValue(nums, 2), "two");
  });
});