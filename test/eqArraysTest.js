const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for arrays [1, 2, 3] and [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for arrays [1, 2, 3] and [1, 2]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns false for arrays [1, 2, 3] and [1, 2, 4]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns true for arrays [] and []", () => {
    assert.equal(eqArrays([], []), true);
  });

  it("returns true for arrays [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for arrays [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false for arrays [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it("returns true for arrays [[2, 3], [4], [[3, 4], [6,7]]] and [[2, 3], [4], [[3, 4], [6, 7]]]", () => {
    assert.equal(eqArrays([[2, 3], [4], [[3, 4], [6,7]]], [[2, 3], [4], [[3, 4], [6, 7]]]), true);
  });
});
