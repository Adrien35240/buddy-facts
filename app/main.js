const express = require('express');

const app = express();
const router = require('./routers/mainRouter');

app.use(express.json());

app.use(router);

module.exports = app;
