//Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(array) {
  let flattenArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArray = flattenArray.concat(flatten(item));
    } else {
      flattenArray.push(item);
    }
  });
  return flattenArray;
};

module.exports = flatten;