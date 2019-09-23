const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Labs']", () => {
    assert.deepEqual(tail(['Labs']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should not alter the original array", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});