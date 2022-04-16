// The following flatten don't work for nested arrays.
const flatten = function(array) {
  let flattenArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let elm of element) {
        flattenArray.push(elm);
      }
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
};


// //Following flatten works for nested arrays as well.
// const flattenArray = [];
// const flatten = function(array) {
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       flatten(item);
//     } else {
//       flattenArray.push(item);
//     }
//   });
//   return flattenArray;
// };

module.exports = flatten;