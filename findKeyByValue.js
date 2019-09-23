//ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  const allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;