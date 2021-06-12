const express = require('express');
const _connect = require('./db/_connect');

// configurar dotenv
require('dotenv').config()

// mongo connection
_connect();

const app = express();

app.get('/', (req, res) => {
  return res.send("Hola");
});

app.listen(process.env.PORT, () => console.log('App listening on PORT ' + process.env.PORT))