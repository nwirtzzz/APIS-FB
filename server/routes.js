const express = require('express')
const userController = require('./user/user.js')

const router = express.Router()

// Register route
router.get('/register', userController.renderRegister);
router.post('/register', userController.register);

// Login route
router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

router.get('/home', (req, res) => res.render('home/home'));

module.exports = router
