const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('Using sinon.spy and stub checks sendPaymentRequestToApi is same as Utils.calculateNumber', () => {
    const sinonSpy = sinon.spy(console);
    const sinonStub = sinon.stub(Utils);
    sinonStub.calculateNumber.returns(10);
    sendPaymentRequestToAPI(100, 20);
    expect(sinonStub.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonSpy.log.calledWith('The total is: 10')).to.be.true;
    sinonSpy.log.restore();
    sinonStub.calculateNumber.restore();
  })
})
