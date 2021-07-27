const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.all);

router.get('/detail/:id/:offer?', productController.productDetail);


module.exports = router;