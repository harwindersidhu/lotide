//Function that takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue  = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;