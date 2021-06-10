const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  return res.send("Hola");
});

app.listen(PORT, () => console.log('App listening on PORT ' + 3000))