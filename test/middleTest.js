
const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('return [2] for [1,2,3]', () => {
    assert.deepEqual((middle([1,2,3])), [2]);
  });
  it('return [56] for [24,6,56,36,6]', () => {
    assert.deepEqual((middle([24,6,56,36,6])), [56]);
  });
  it('return [2,3] for [1,2,3,5]', () => {
    assert.deepEqual((middle([1,2,3,5])), [2,3]);
  });
});



// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// assertArraysEqual((middle([1,2,3])), [2]);