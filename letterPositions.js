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







const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  //const string = sentence.replace(/\s+/g, '')
  const finalArray = sentence.split('')
  console.log(finalArray);
  for (const letter of finalArray) {
    const postionArr = [];
    for (let i = 0; i < finalArray.length; i++) {
      
      if (letter === finalArray[i]) {
        postionArr.push(i)
      }
      
    }
    
    results[letter] = postionArr;
    
  }
  return results;
};

module.exports = letterPositions;



// const test = letterPositions("lighthouse in the house");

// assertArraysEqual(test["i"], [ 1, 11 ]);
// assertArraysEqual(letterPositions("Lighthouse in the house").e, [9, 16, 22]);



