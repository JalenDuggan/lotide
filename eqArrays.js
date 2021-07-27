const assertEqual = require('./assertEqual');


const eqArrays = function (arry1, arry2) {
  if (arry1.length !== arry2.length) {
    return false;
  }
  for (let i = 0; i < arry1.length; i++) {
    if (arry1[i] !== arry2[i]) {
      return false;
    }
    
  }
  return true;
}


module.exports = eqArrays;
