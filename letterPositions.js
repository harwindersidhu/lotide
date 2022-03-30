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

const assertArraysEqual  = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i in sentence) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        let arrayIndices = results[sentence[i]];
        arrayIndices.push(Number(i));
        results[sentence[i]] = arrayIndices;
      } else {
        results[sentence[i]] = [Number(i)];
      }
    }
  }
  return results;
};

const resultLetterPositions = letterPositions("lighthouse in the house");
console.log(resultLetterPositions);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

