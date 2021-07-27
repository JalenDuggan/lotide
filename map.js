const assertArraysEqual = function(actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  if (actual.length !== expected.length) {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
    }
    
  }
  return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);

};



// const words = ["ground", "control", "to", "major", "tom"];


const map = function (array, callbacks) {
  const results = []

  //termporay code
  for (const item of array) {
    results.push(callbacks(item));
  }

  return results
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;

