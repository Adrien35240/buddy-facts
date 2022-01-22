require('dotenv').config();
const http = require('http');

const app = require('./app/main');

const port = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
