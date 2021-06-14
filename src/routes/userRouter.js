const express = require('express');
const { isAuthenticated } = require('../middlewares');
const userController = require("../controllers/userController");

const router = express.Router();

router.post('/signup', userController.signup);
router.get('/confirm/:token', userController.confirmAccount);
router.post('/login', userController.login);
router.post('/current_user', isAuthenticated, userController.current_user);

module.exports = router;