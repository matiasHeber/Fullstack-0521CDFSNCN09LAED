var express = require('express');
var router = express.Router();
const apiCharacterController = require('../../controllers/api/apiCharacterController');

router.get('/', apiCharacterController.all);

module.exports = router;
