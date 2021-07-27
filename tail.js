const assertArraysEqual = require('./assertArraysEqual');

const tail = function(array) {
  if (array.length === 1 || array === []) {
    return [];
  }
  
  
  let tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;




