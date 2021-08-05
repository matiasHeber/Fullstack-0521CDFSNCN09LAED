// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + '../../../public/images/products'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
}) 
let upload = multer({ storage: storage })

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/store', upload.single('images') ,productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.post('/delete/:id', productsController.destroy); 


module.exports = router;
