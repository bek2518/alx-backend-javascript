const express = require('express');

const app = express();

const hostname = '0.0.0.0';
const port = 1245;

app.listen(port, hostname);
app.use('/', './routes/index');
app.use('/students', './routes/index');
app.use('/students/:major', './routes/index');

export default app;
