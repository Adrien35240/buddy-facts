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
    io.emit('message',getAllRedis);
}, 1000);

server.listen(port, () => {
  console.log(`listening on http://${host}:${port}`)
});
