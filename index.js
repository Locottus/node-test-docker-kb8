const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('entrando a get test');
  res.send(`
    <h1>Hello World!, from this NodeJS app! </h1>
    <p>Try sending a rquest to /error and see what happens</p>
    <h2>http://localhost:8080</h2>
    <p>displays a message</p>
    <h2>http://localhost:8080/error</h2>
    <p>makes the app crash to test recovery </p>
  `);
});

app.get('/error', (req, res) => {
  console.log('we made the app crash');
  process.exit(1);
});

app.listen(8080);
