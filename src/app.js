const express = require('express');
const bodyParser = require('body-parser')
const _connect = require('./db/_connect');
const userRoutes = require('./routes/userRouter');

// configurar dotenv
require('dotenv').config()

// mongo connection
_connect();

const app = express();

// setup
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  return res.send("Hola");
});

app.use('/account', userRoutes);

app.listen(process.env.PORT, () => console.log('App listening on PORT ' + process.env.PORT))