const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('return [4,5,3,6,7] for [3,4,5,3,6,7]', () => {
    assert.deepEqual(tail([3,4,5,3,6,7]), [4,5,3,6,7]);
  });
  it("return [4,5,3,6,7] for [3,'4',5,'3',6,7]", () => {
    assert.deepEqual(tail([3,4,5,3,6,7]), [4,5,3,6,7]);
  });
  it("return [] for [3]", () => {
    assert.deepEqual(tail([3]), []);
  });
});

