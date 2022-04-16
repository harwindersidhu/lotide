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

const words = ["ground", "control", "to", "major", "tom"];

//Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const wordsTwo = ["play", "run", "walk", "jog"];
const results2 = map(wordsTwo, word => word[0]);
assertArraysEqual(results2, ['p', 'r', 'w', 'j']);

const wordsThree = ["sleep", "sit", "stand", "rest"];
const results3 = map(wordsThree, word => word[0]);
assertArraysEqual(results3, ['s', 's', 's', 'r']);

module.exports = map;
