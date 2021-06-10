const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;