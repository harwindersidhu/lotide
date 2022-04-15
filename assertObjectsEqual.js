// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          console.log("key: ", key);
          console.log(object1[key]);
          console.log(object2[key]);
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
