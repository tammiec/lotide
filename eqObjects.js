const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArray');

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (typeof obj1[key] === 'object') {
      if (Array.isArray(obj1[key]) && !eqArrays(obj1[key], obj2[key])) {
        return false;
      } else {
        if (!eqObjects(obj1[key], obj2[key])) {
          return false;
        }
      }
    } else {
      if ((obj1[key]) !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;