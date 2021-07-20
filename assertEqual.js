const assertEqual = function(actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  if (actual === expected) {
    console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);