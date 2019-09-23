const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;