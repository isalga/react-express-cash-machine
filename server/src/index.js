const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { makeChange } = require('./utils');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/notes', (req, res) => {
  const search = req.query.search;

  if (search < 0) {
    res.send(400, 'InvalidArgumentException');
  }

  if (search % 10 !== 0) {
    res.send(400, 'NoteUnavailableException');
  }

  const change = makeChange(search);

  res.send({ notes: change });
});
