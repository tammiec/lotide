const tail = function(array) {
  let arrayTail = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      arrayTail.push(array[i]);
    }
  }
  return arrayTail;
};

module.exports = tail;
