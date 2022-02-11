const express = require('express');
const webController = require('../controllers/web.controller');
const router = express.Router();
// ------------- REDIS --------------
router
    .route('/api/redis/:data')
    .get(webController.getRedis)
    .post(webController.saveRedis);
// ------------- Postgres
router
    .route('/fact')
    .get(webController.getAllFact)
    .post(webController.postFact)
// ------------ Home Page
router
    .route('/')
    .get(/*webSocket.Emitter,*/webController.homePage)
    .post(webController.translate);

module.exports = router;
