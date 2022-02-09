const client = require('../config/db');

const datamapper = {
  home() {
    return { message: 'Welcome home buddy !' };
  },
  async getAll() {
    const data = client.query('SELECT * FROM "table"');
    return data;
  },

};

module.exports = datamapper;
