// const assertEqual = function(actual, expected) {
//   const check = String.fromCodePoint(0x2705);
//   const x = String.fromCodePoint(0x274c);
//   if (actual === expected) {
//     return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
//   } else {
//     return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
//   }
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  let i = 0;
  let y = 0;

  if ((Object.keys(object1).length !== Object.keys(object2).length)) {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }
  
  for (const key in object1) {
    //console.log(object1[key]);
    //console.log(object2[key]);  

    // if(object1[key] === object2[key]) {
    //   if(eqArrays(object1[key], object2[key]) === true) {
    //     i += 1;
    //   }
      
    // }
    //console.log(eqArrays(object1[key], object2[key]));

    if(eqArrays(object1[key], object2[key]) === true) {
      i += 1;
      
    }
    y+=1; 
    //console.log(i);
  }
  //console.log(y);
  

  if (y === i) {
    return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }

  
};

const eqArrays = function (arry1, arry2) {
  //console.log(arry1);
  //console.log(arry2);
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


// const biggerObject = (object1, object2) => {
//     if (Object.keys(object1).length > Object.keys(object2).length) {
//       let temp = object1;
//       //console.log(temp);
//       return temp;
  
//     } else {
//       let temp = object2;
//       //console.log(temp);
//       return temp;
//     }
    
//   };






// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  eqObjects(actual, expected);

};


// const assertArraysEqual = function(actual, expected) {
//   const check = String.fromCodePoint(0x2705);
//   const x = String.fromCodePoint(0x274c);
//   if (actual.length !== expected.length) {
//     return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
//     }
    
//   }
//   return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);

// };











