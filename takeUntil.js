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




const takeUntil = function (array, callback) {
  const results = [] 
  for (const element of array) {
    if (callback(element)) {
      return results
    } else {
      results.push(element)
    }

  }
  return results
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const cleanData = [1,2,3,4,5]

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

assertArraysEqual(takeUntil(cleanData, x => x < 0), [ 1, 2, 3, 4, 5 ]);