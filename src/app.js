const express = require('express');
const _connect = require('./db/_connect');
const Comment = require('./db/Comment');

// mongo connection
_connect();

const comment = new Comment();
comment.save()
  .then(() => console.log('saved'));

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  return res.send("Hola");
});

app.listen(PORT, () => console.log('App listening on PORT ' + 3000))