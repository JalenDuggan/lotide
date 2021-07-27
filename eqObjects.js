const assertEqual = function(actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  if (actual === expected) {
    return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected] `);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let i = 0;
  let y = 0;

  if ((Object.keys(object1).length !== Object.keys(object2).length)) {
    return false;
  }
  
  for (const key in object1) {
    

    if(eqArrays(object1[key], object2[key]) === true) {
      i += 1;
      
    }
    y+=1; 
    
  }
  
  

  if (y === i) {
    return true
  } else {
    return false
  }

  
};

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



module.exports = eqObjects;




// const ab = {
//   a: 1,
//   b: 2
// }

// const ba = {
//   b: 2,
//   a: 1
// }

// const abc = {
//   a: 2,
//   b: 1,
//   c: 5
// }



// assertEqual(eqObjects(ab, ba), true)

// assertEqual(eqObjects(ab, abc), false)

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
