const { expect } = require('chai');
const request = require('request');

describe('Index Page', function() {
  it('Test that checks the response of localhost:7865', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done()
    })
  })
})

describe('Cart Page', function() {
  it('Test that checks the response of localhost:7865/cart/:id with id number', (done) => {
    request.get('http://localhost:7865/cart/5', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 5');
      done()
    })
  })

  it('Test that checks the response of localhost:7865/cart/:id with id letter', (done) => {
    request.get('http://localhost:7865/cart/a', (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done()
    })
  })

  it('Test that checks the response of localhost:7865/cart/:id with id mixed string', (done) => {
    request.get('http://localhost:7865/cart/a4c4s', (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done()
    })
  })
})
