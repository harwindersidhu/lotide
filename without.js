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

const assertArraysEqual  = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
  
};

const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let src of source) {
    let itemPresent = false;
    for (let item of itemsToRemove) {
      if (src === item) {
        itemPresent = true;
      }
    }
    if (!itemPresent) {
      withoutArray.push(src);
    }
  }
  return withoutArray;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;