const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');


router.post('/create', moviesApiController.create);
// localhost:3001/api/genres


module.exports = router;