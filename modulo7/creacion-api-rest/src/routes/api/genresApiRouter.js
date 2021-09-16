const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresApiController');

router.get('/', genresController.list);
// localhost:3001/api/genres


module.exports = router;