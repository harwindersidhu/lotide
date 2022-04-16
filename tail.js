//function that takes in an array and returns everything except the first element of the array.
const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;