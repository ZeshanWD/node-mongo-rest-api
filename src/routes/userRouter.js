const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log('user - ', req.body);
  return res.send("Signup");
});

module.exports = router;