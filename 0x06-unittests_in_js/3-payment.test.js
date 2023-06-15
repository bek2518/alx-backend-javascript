const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Using sinon.spy checks sendPaymentRequestToApi is same as Utils.calculateNumber', () => {
    const sinonSpy = sinon.spy(Utils);
    sendPaymentRequestToAPI(100, 20);
    expect(sinonSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    sinonSpy.calculateNumber.restore();
  })
})
