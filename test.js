/* eslint-disable */
const assert = require('assert');
const Convert = require('./Convert.js')

describe('Test the conversion functions', () => {
  describe('cToF', () => {
    it('should convert -40 celsius to -40 fahrenheit', () => {
      assert.equal(-40, Convert.cToF(-40));
    });
    it('should convert 0 celsius to 32 fahrenheit', () => {
      assert.equal(32, Convert.cToF(0));
    });
    it('should return undefined if no temperature is input', () => {
      assert.equal(undefined, Convert.cToF(''));
    });
  });
  describe('fToC', () => {

  });
});