require('dotenv').config();
const http = require('http');
const app = require('./app/main');
const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost'
const datamapper = require('./app/models/main.model')

const server = http.createServer(app)
const io = require('socket.io')(server)

setInterval(async function () {
  const getAllRedis = await datamapper.getAllRedis()
  let n = getAllRedis.length - 1
  if (n < 0) {
    n=0
  }
  io.emit('message',n);
}, 1000);

server.listen(port, () => {
  console.log(`listening on http://${host}:${port}`)
});
