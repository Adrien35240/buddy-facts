const { Pool } = require('pg');
let config
if (process.env.NODE_ENV === 'development') {
    config = {
        connectionString: process.env.DATABASE_URL_DEV,
    };
} else {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    };
}


module.exports = new Pool(config);