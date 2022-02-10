const express = require('express');
const mainController = require('../controllers/main.controller');
const webController = require('../controllers/web.controller');

const router = express.Router();
// ------------- REDIS --------------
router
    .route('/api/redis/:data')
    .get(webController.getRedis)
    .post(webController.saveRedis);

router.get('/api', mainController.getAll);
router
    .route('/fact')
    .get(webController.getAllFact)
    .post(webController.postFact)
   
//router.post('/note', webController.postFact);
router
    .route('/')
    .get(webController.homePage)
    .post(webController.translate);

module.exports = router;
