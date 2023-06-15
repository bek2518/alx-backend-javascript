const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let sinonSpy;
  beforeEach(() => {
    sinonSpy = sinon.spy(console, 'log');
  })

  afterEach(() => {
    expect(sinonSpy.calledOnce).to.be.true;
    sinonSpy.restore();
  })
  it('Test that calls sendPaymentRequestToApi with 100 and 20 and verify the console log and called once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledWith('The total is: 120')).to.be.true;
  })

  it('Test that calls sendPaymentRequestToApi with 10 and 10 and verify the console log and called once', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.calledWith('The total is: 20')).to.be.true;
  })
})
