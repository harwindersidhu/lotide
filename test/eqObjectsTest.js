const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

const de = { d: ["2", 3], e: [2, 3]};
const ed = { e: [3, 4], d: ["2", 3]};

const efgh = { e: ["2", 3], f: [2, 3], g: [3, 5], h: "hh"};
const fehg = { f: [2, 3], e: ["2", 3], h: "hh", g: [3, 5]};

describe("#eqObjects", () => {
  it("returns true for objects ab and ba", () => {
    assert.equal(eqObjects(ab, ba), true);
  });

  it("returns false for objects ab and abc", () => {
    assert.equal(eqObjects(ab, abc), false);
  });

  it("returns true for objects cd and dc", () => {
    assert.equal(eqObjects(cd, dc), true);
  });

  it("returns false for objects cd and cd2", () => {
    assert.equal(eqObjects(cd, cd2), false);
  });

  it("returns false for objects de and ed", () => {
    assert.equal(eqObjects(de, ed), false);
  });

  it("returns true for objects efgh and fehg", () => {
    assert.equal(eqObjects(efgh, fehg), true);
  });
});

