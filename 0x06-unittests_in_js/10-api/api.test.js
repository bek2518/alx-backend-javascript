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

describe('Available Payments Page', function() {
  it('Test that checks the response of localhost:7865/available_payments', (done) => {
    const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect( JSON.parse(body)).to.be.deep.equal(payments);
      done()
    })
  })
})

describe('Login Page', function() {
  it('Test that checks the response of POST localhost:7865/login', (done) => {
    request.post('http://localhost:7865/login', {json: {userName: 'Bek'}}, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Bek');
      done()
    })
  })
})
