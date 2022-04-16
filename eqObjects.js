const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      //If value of key in both objects is object (not array), do recursion for checking the equality
      if (((typeof object1[key] === 'object') && !(Array.isArray(object1[key]))) && ((typeof object2[key] === 'object') && !(Array.isArray(object2[key])))) {
        if (!(eqObjects(object1[key], object2[key]))) {
          return false;
        }
      } else if (((typeof object1[key] === 'object') && !(Array.isArray(object1[key]))) || ((typeof object2[key] === 'object') && !(Array.isArray(object2[key])))) {
        return false; // Returns false if value of key in both objects is object but one is array;
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //If value of key on both objects is array, check equality for array
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqObjects;