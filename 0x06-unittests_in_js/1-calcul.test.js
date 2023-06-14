const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Testing SUM', function() {
  it('SUM: Whole number and whole number', function() {
    assert.equal(calculateNumber('SUM', 1, 4), 5);
  });

  it('SUM: Whole number and decimal', function() {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('SUM: Decimal and decimal under 0.5', function() {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('SUM: Decimal and decimal over 0.5', function() {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('SUM: Negative number and Negative number', function() {
    assert.equal(calculateNumber('SUM', -1, -4), -5);
  });

  it('SUM: Negative number and Negative decimal', function() {
    assert.equal(calculateNumber('SUM', -1, -3.7), -5);
  });

  it('SUM: Negative decimal and Negative decimal over 0.5', function() {
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });

  it('SUM: Negative decimal and Negative decimal under 0.5', function() {
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });

  it('SUM: Negative decimal and whole number', function() {
    assert.equal(calculateNumber('SUM', -1, 3), 2);
  });
});

describe('Testing SUBTRACT', function() {
  it('SUBTRACT: Whole number and whole number', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 4), 3);
  });

  it('SUBTRACT: Whole number and decimal', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), 3);
  });

  it('SUBTRACT: Decimal and decimal under 0.5', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), 3);
  });

  it('SUBTRACT: Decimal and decimal over 0.5', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), 2);
  });

  it('SUBTRACT: Negative number and Negative number', function() {
    assert.equal(calculateNumber('SUBTRACT', -1, -4), -3);
  });

  it('SUBTRACT: Negative number and Negative decimal', function() {
    assert.equal(calculateNumber('SUBTRACT', -1, -3.7), -3);
  });

  it('SUBTRACT: Negative decimal and Negative decimal under 0.5', function() {
    assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), -3);
  });

  it('SUBTRACT: Negative decimal and whole number', function() {
    assert.equal(calculateNumber('SUBTRACT', -1, 3), 4);
  });
});

describe('Testing DIVIDE', function() {
  it('DIVIDE: Whole number and whole number', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });

  it('DIVIDE: Decimal and Decimal', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('DIVIDE: Whole number and decimal', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 4.5), 0.2);
  });

  it('DIVIDE: Negative number and Negative number', function() {
    assert.equal(calculateNumber('DIVIDE', -1, -4.5), 0.25);
  });

  it('DIVIDE: Negative number and Whole number', function() {
    assert.equal(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
  });

  it('DIVIDE: Whole number and Negative number', function() {
    assert.equal(calculateNumber('DIVIDE', 1, -4.5), -0.25);
  });

  it('DIVIDE: Divide by zero', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('DIVIDE: Divide by a number that round to zero', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
  });

  it('DIVIDE: Divide by a negative number that round to zero', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, -0.2), 'Error');
  });

  it('DIVIDE: Divide zero by decimal', function() {
    assert.equal(calculateNumber('DIVIDE', 0, 4.5), 0);
  });
});
