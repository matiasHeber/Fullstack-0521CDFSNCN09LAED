var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

// Ruta principal de productos
router.get('/', productsController.todos);

router.get('/detalle/:id', productsController.detalle)

router.get('/nuevoProducto', productsController.nuevo)

module.exports = router;
