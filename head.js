// const assertEqual = function(actual, expected) {
//   const check = String.fromCodePoint(0x2705);
//   const x = String.fromCodePoint(0x274c);
//   if (actual === expected) {
//     return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
//   }
//   if (actual !== expected) {
//     return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return ("undefined");
  }
  return array[0];

};

module.exports = head;
