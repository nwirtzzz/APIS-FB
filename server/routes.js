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
router.get('/equipos', (req, res) => res.render('equipos/equipos'));
router.get('/jugadores', (req, res) => res.render('jugadores/jugadores'));
router.get('/jugadores-top', (req, res) => res.render('jugadores/jugadores-top'));
router.get('/detalle-jugadores', (req, res) => res.render('jugadores/details'));
router.get('/team', (req, res) => res.render('equipos/team'));

module.exports = router
