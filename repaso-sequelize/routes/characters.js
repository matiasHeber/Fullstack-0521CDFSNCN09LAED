const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');


router.get('/', characterController.all);

router.get('/name/:name', characterController.getByName);

router.get('/create', characterController.create);

router.get('/update', characterController.update);

router.get('/delete', characterController.delete);

router.get('/:id', characterController.getOne);

module.exports = router;