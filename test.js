const assert = require('assert');

describe('Test group 1', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
  describe('sum is 4', () => {
    it('should return 4', () => {
      assert.equal(4, 2 + 2);
    });
    it('should return true', () => {
      assert.equal(true, true);
    });
  });
});