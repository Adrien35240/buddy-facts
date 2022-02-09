const express = require('express');
const mainController = require('../controllers/main.controller');
const webController = require('../controllers/web.controller');

const router = express.Router();

router.get('/api', mainController.getAll);
router.get('/', webController.homePage);

module.exports = router;
