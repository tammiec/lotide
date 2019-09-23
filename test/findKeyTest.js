const findKey = require("../findkey");
const assert = require("chai").assert;
describe("#findKey", () => {
  
  const ob = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  it("should return noma...", () => {
    assert.equal(findKey(ob, x => x.stars === 2), "noma");
  });
  it("should return undefined if key doesn't exist", () => {
    assert.isUndefined(findKey(ob, x => x.stars === 5));
  });
  it("should return Akaleri...", () => {
    assert.equal(findKey(ob, x => x.stars > 2), "Akaleri");
  });
});