const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/admin')


router.get('/', controller.index);
router.get('/admin', adminMiddleware, controller.admin);

module.exports = router;