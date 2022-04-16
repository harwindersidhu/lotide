const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#LetterPositions", () => {
  it("returns [1] for letter e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [3, 5, 15, 18] for letter h in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it("returns [1, 11] for letter i in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });

  it("returns [6, 19] for letter o in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").o, [6, 19]);
  });

  it("returns [9, 16, 22] for letter e in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  });
});

