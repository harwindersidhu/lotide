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

module.exports = letterPositions;