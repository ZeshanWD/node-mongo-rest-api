const express = require('express');
const getModelByName = require('../db/getModelByName');

const router = express.Router();

router.post('/signup', (req, res) => {
  if (!req.body.user) return res.status(200).send({ success: false, error: "user info not found" });

  const User = getModelByName('user');

  try {
    User.signup(req.body.user)
      .then(() => {
        res.status(200).send({ success: true, message: 'user created successfully' });
      }).catch(error => res.status(200).send({ success: false, error: error.message }))
  } catch(error) {
    res.status(200).send({ success: false, error: error.message })
  }
});

module.exports = router;