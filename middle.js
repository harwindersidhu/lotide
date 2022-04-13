const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    let middleIndex = Math.floor(array.length / 2);
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};

module.exports = middle;