const mongoose = require('mongoose');

const MONGO_DB = "todo_db";
const MONGO_HOST = "localhost";

function _connect() {
  const URI = "mongodb://"+ MONGO_HOST + "/" + MONGO_DB;
  console.log(URI);
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
      console.log('connection db ready to use.');
    },
    (err) => {
      console.log('connection error - ', err);
    },
  );
}

module.exports = _connect;
