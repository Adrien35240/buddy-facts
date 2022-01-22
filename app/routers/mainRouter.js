const express = require('express');

const router = express.Router();
const dummyRouter = require('./dummyRouter');

router.use('/api/v1/', dummyRouter);
// router.use('/', websiteRouter);

module.exports = router;
