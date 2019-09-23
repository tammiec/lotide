const assert = require("chai").assert;
const letterPositions = require("../letterPositions");
describe("#letterPosition", () => {
  it("should return [2,3] for letter l...", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("should return [0,4] for letter j...", () => {
    assert.deepEqual(letterPositions("johnJOHN").j, [0, 4]);
  });
  it("should return [3,11] for letter n...", () => {
    assert.deepEqual(letterPositions("john TOM AlleN").n, [3, 13]);
  });
});