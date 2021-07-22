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


console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual((middle([1,2,3])), [2]);