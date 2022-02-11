require('dotenv').config();
const http = require('http');
const app = require('./app/main');
const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost'

const server = http.createServer(app)
const io = require('socket.io')(server)

setInterval(function () {
  var msg = Math.random();
  io.emit('message', msg);
  console.log(msg);

}, 1000);

server.listen(port, () => {
  console.log(`listening on http://${host}:${port}`)
});
