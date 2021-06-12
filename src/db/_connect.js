const mongoose = require('mongoose');

function _connect() {
  const URI = "mongodb://"+ process.env.MONGO_HOST + "/" + process.env.MONGO_DB;
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
