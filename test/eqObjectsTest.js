const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true...", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("should return true...", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cdcd = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd2, cdcd), true);
  });
  it("should return true...", () => {
    const test5 = { a: { y: 0, z : [1, 2]}, b: 2, c: { dd: 4, ee: 5}};
    const test6 = { b: 2, c: { dd: 4, ee: 5}, a: { y: 0, z : [1, 2]}};
    assert.deepEqual(eqObjects(test5, test6), true);
  });
  it("should return false...", () => {
    const test3 = { a: { y: 0, z : { xx: 2}}, b: 2, c: { dd: 4, ee: 5}};
    const test4 = { b: 2, c: { dd: 4, ee: 4}, a: { y: 0, z : { xx: 2}} };
    assert.notDeepEqual(eqObjects(test3, test4), true);
  });
});
