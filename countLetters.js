const assertEqual = function(actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const x = String.fromCodePoint(0x274c);
  if (actual === expected) {
    return console.log(`${check} ${check} ${check} Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`${x} ${x} ${x} Assertion Failed: [actual] !== [expected]`);
  }
};


const countLetters = function (string) {
    const count = {};
    const validString = string.replace(/\s+/g, '')
    for (const letter of validString) {
      if (count[letter]) {
        count[letter] += 1;
      } else{
        count[letter] = 1;
      }
    }

    return count;

}


const letCount = countLetters('LHL')

assertEqual(letCount["L"], 2);