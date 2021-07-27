const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

// router.get('/login', mainController.login);

// router.get('/register', mainController.register);

// router.get('/product/:id', mainController.producto);


module.exports = router;