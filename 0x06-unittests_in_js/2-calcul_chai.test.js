const { expect } = require('chai');
const calculateNumber = require('./2-calcul');

describe('Testing SUM', function() {
  it('SUM: Whole number and whole number', function() {
    expect(calculateNumber('SUM', 1, 4)).to.equal(5);
  });

  it('SUM: Whole number and decimal', function() {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('SUM: Decimal and decimal under 0.5', function() {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('SUM: Decimal and decimal over 0.5', function() {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('SUM: Negative number and Negative number', function() {
    expect(calculateNumber('SUM', -1, -4)).to.equal(-5);
  });

  it('SUM: Negative number and Negative decimal', function() {
    expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
  });

  it('SUM: Negative decimal and Negative decimal over 0.5', function() {
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('SUM: Negative decimal and Negative decimal under 0.5', function() {
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('SUM: Negative decimal and whole number', function() {
    expect(calculateNumber('SUM', -1, 3)).to.equal(2);
  });
});

describe('Testing SUBTRACT', function() {
  it('SUBTRACT: Whole number and whole number', function() {
    expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
  });

  it('SUBTRACT: Whole number and decimal', function() {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('SUBTRACT: Decimal and decimal under 0.5', function() {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('SUBTRACT: Decimal and decimal over 0.5', function() {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });

  it('SUBTRACT: Negative number and Negative number', function() {
    expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
  });

  it('SUBTRACT: Negative number and Negative decimal', function() {
    expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
  });

  it('SUBTRACT: Negative decimal and Negative decimal under 0.5', function() {
    expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
  });

  it('SUBTRACT: Negative decimal and whole number', function() {
    expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
  });
});

describe('Testing DIVIDE', function() {
  it('DIVIDE: Whole number and whole number', function() {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });

  it('DIVIDE: Decimal and Decimal', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('DIVIDE: Whole number and decimal', function() {
    expect(calculateNumber('DIVIDE', 1, 4.5)).to.equal(0.2);
  });

  it('DIVIDE: Negative number and Negative number', function() {
    expect(calculateNumber('DIVIDE', -1, -4.5)).to.equal(0.25);
  });

  it('DIVIDE: Negative number and Whole number', function() {
    expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
  });

  it('DIVIDE: Whole number and Negative number', function() {
    expect(calculateNumber('DIVIDE', 1, -4.5)).to.equal(-0.25);
  });

  it('DIVIDE: Divide by zero', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('DIVIDE: Divide by a number that round to zero', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
  });

  it('DIVIDE: Divide by a negative number that round to zero', function() {
    expect(calculateNumber('DIVIDE', 1.4, -0.2)).to.equal('Error');
  });

  it('DIVIDE: Divide zero by decimal', function() {
    expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
  });
});
