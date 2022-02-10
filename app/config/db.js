const { Pool } = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL,
    // comment line below for local hosting
     ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(config);