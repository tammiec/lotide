const takeUntil = require("../takeUntil");
const assert = require("chai").assert;
describe("#takeUntil", () => {
  it("should return an array...", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("should return the whole array if callback never returns truthy", () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4], x => x > 4), [1, 2, 3, 4]);
  });
  it("should return an empty array when passed an empty array", () => {
    assert.deepEqual(takeUntil([], x => x > 4), []);
  });
  it("should return ", () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4], x => x > 0), []);
  });
});