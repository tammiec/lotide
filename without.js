const without = function(source, itemsToRemove) {
  let removed = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      removed.push(item);
    }
  }
  return removed;
};

module.exports = without;