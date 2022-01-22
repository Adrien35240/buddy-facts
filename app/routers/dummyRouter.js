const express = require('express');
const dummyController = require('../controllers/dummyController');

const router = express.Router();

router.get('/', dummyController.main);

router.route('/dummy')
  .get(dummyController.dummy)
  .post(dummyController.dummyPost);

module.exports = router;
