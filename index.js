require('dotenv').config();
const http = require('http');

const app = require('./app/main');

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on http://${host}:${port}`)
});
