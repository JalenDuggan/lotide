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

  
  
  for (const key in biggerObject(object1, object2)) {

    if(object1[key] === object2[key]) {
      i += 1;
    }
    y+=1; 
    
  }
  //console.log(y);
  //console.log(i);

  if (y === i) {
    return true
  } else {
    return false
  }

  
};

const biggerObject = (object1, object2) => {
    if (Object.keys(object1).length > Object.keys(object2).length) {
      let temp = object1;
      //console.log(temp);
      return temp;
  
    } else {
      let temp = object2;
      //console.log(temp);
      return temp;
    }
    
  };





const ab = {
  a: 1,
  b: 2
}

const ba = {
  b: 2,
  a: 1
}

const abc = {
  a: 2,
  b: 1,
  c: 5
}

assertEqual(eqObjects(ab, ba), true)


assertEqual(eqObjects(ab, abc), false)
