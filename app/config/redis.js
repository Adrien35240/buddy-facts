const { createClient } = require('redis');

const client = createClient({
    url: process.env.REDIS_URL,
});

client.on('error', (err) => {
    console.log('Redis Client Error', err)
    return err
});

(async () => {
    await client.connect();
})();

module.exports = client;