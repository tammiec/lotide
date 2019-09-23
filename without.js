const without = function(source, itemsToRemove) {
  let removed = [];
  for (let j = 0; j < source.length; j++) {
    if (itemsToRemove.includes(source[j]) === false) {
      removed.push(source[j]);
    }
  }
  return removed;
};

module.exports = without;