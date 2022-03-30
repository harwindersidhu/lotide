const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(sentence) {
  let result = {};
  for (let character of sentence) {
    if (character !== " ") {
      if (result[character]) {
        result[character] += 1;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};

let resultCount = countLetters("lighthouse in the house");
console.log(resultCount);

assertEqual(resultCount["i"], 2);
assertEqual(resultCount["o"], 2);