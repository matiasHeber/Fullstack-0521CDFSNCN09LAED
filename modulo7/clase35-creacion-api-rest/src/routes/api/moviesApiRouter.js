const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');


router.post('/create', moviesApiController.create);

router.post('/delete/:id', moviesApiController.destroy)


module.exports = router;