const letterPositions = function(sentence) {
  const allLower = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < allLower.length; i++) {
    let letter = allLower[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;