const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for arrays [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for arrays [1, 2, 3] and [1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns false for arrays [1, 2, 3] and [1, 2, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns true for arrays [] and []", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
});