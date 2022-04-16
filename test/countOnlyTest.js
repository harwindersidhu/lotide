const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#CountOnly", () => {
  it("returns 1 for ['Jason']", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("returns undefined for ['Karima']", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("returns 2 for ['Fang']", () => {
    assert.equal(result1["Fang"], 2);
  });

  it("returns undefined for ['Agouhanna']", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });
});