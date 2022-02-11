const { createClient } = require('redis');

let config
if (process.env.NODE_ENV === 'development') {
    config = {
        url: process.env.REDIS_URL_DEV,
    };
} else if (process.env.NODE_ENV === 'staging') {
    config = {
        url: process.env.REDIS_URL_STAGING
    }
} else if (process.env.NODE_ENV === 'production') {
    config = {
        url: process.env.REDIS_URL_PRODUCTION
    };
}



const client = createClient(config);

client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

(async () => {
    await client.connect();
})();

module.exports = client;