
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => should Fail