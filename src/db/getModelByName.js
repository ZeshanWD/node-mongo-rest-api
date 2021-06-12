const mongoose = require('mongoose');

require('../models/user');

function getModelByName(name) {
  return mongoose.model(name)
}

module.exports = getModelByName;