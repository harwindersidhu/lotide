const eqArrays = require('./eqArrays');

//Function that takes in 2 arrays and returns true if they are equal and false otherwise.
const assertArraysEqual  = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
  
};

module.exports = assertArraysEqual;