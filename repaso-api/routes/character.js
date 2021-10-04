var express = require('express');
var router = express.Router();
const characterController = require('../controllers/characterController');


router.get('/', characterController.all);

module.exports = router;
