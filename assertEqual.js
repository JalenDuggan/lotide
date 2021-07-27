const assertEqual = function(actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  if (actual === expected) {
    return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }
};

module.exports = assertEqual;


