const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Basic Test', function() {
  it('Whole number and whole number', function() {
    assert.equal(calculateNumber(1, 4), 5);
  });

  it('Whole number and decimal', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('Decimal and decimal under 0.5', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('Decimal and decimal over 0.5', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('Negative number and Negative number', function() {
    assert.equal(calculateNumber(-1, -4), -5);
  });

  it('Negative number and Negative decimal', function() {
    assert.equal(calculateNumber(-1, -3.7), -5);
  });

  it('Negative decimal and Negative decimal over 0.5', function() {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });

  it('Negative decimal and Negative decimal under 0.5', function() {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });

  it('Negative decimal and whole number', function() {
    assert.equal(calculateNumber(-1, 3), 2);
  });
});
