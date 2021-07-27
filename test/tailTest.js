const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


assertArraysEqual(tail([3,4,5,3,6,7]), [4,5,3,6,7]);
assertArraysEqual(tail([3,'4',5,'3',6,7]), [4,5,3,6,7]);
assertArraysEqual(tail([3]), []);