const axios = require('axios')
const FormData = require('form-data');
const client = require('../config/db')
const datamapper = {

  async getRandomFact() {
    const result = axios.get('https://oceanfacts.herokuapp.com/api/random/')
    return result
  },
  async getFact() {
    const result = await client.query('SELECT * FROM fact')
    return result.rows
  },
  async getTranslate(fact) {
    const form = new FormData();
    form.append('q', fact);
    form.append('source', 'en');
    form.append('target', 'fr');
    form.append('format', 'text');
    form.append('api_key', 'text');
   const result =await axios.post('https://libretranslate.de/translate', form, { headers: form.getHeaders() })
    return result
  },
  async postFact(fact) {
    const query = {
      text: 'INSERT INTO fact(content) VALUES ($1)',
      values:[fact]
    }
    const result = await client.query(query)
    return result
  }

};

module.exports = datamapper;
