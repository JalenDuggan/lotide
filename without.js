const eqArrays = function (arry1, arry2) {
  
  for (let i = 0; i < arry1.length; i++) {
    if (arry1[i] === arry2[i]) {
      arry1.splice(i, 1)
      
    }
    
  }
  return arry1;
}

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

const without = function (source, itemsToRemove) {
  return eqArrays(source, itemsToRemove);

}

module.exports = without;


// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(words);