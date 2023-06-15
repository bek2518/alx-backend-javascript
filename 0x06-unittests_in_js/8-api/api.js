const express = require('express');

const app = express();
const hostname = '0.0.0.0';
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, hostname, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
