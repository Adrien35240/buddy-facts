const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routers/main.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;
