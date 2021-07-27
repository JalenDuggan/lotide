const assertArraysEqual = require('./assertArraysEqual');




const middle = function (array) {
  let result = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0 ) {
    result.push(array[(Math.ceil(array.length / 2)) - 1])
    return result;
  }
  if (array.length % 2 === 0 ) {
    result.push(array[(array.length / 2) - 1])
    result.push(array[((array.length) / 2)])
    return result;
  }
}

module.exports = middle;


