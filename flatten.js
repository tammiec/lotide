// ACTUAL FUNCTION
const flatten = function(array) {
  let flat = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      flat = flat.concat(flatten(item));
      } else {
      flat.push(item);
    }
  });
  return flat;
};

module.exports = flatten;