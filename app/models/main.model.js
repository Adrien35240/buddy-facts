const axios = require('axios')
const FormData = require('form-data');
const client = require('../config/postgres')
const clientRedis = require('../config/redis')
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
    const form = new FormData()
    form.append('q', fact);
    form.append('source', 'en');
    form.append('target', 'fr');
    form.append('format', 'text');
    form.append('api_key', 'text');
    const result = await axios.post('https://libretranslate.de/translate', form, { headers: form.getHeaders() })
    return result
  },
  async postFact(fact) {
    try {
      const query = {
        text: 'INSERT INTO fact(content) VALUES ($1)',
        values: [fact]
      }
      const result = await client.query(query)
      console.log(result.status)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  // ------------- REDIS ----------------
  async saveRedis(key, data) {
    try {
      const keyData = await clientRedis.set(key, data);
      await clientRedis.expire(key, 30)
      return keyData
    } catch (error) {
      return error
    }
    // return clientRedis.set(`${process.env.REDIS_PREFIX}${data}`);
  },
  async getAllRedis() {
    try {
      const hisKeyExist = await clientRedis.keys('*key*')
      console.log('hisExist', hisKeyExist)
      if (hisKeyExist.length > 0) {
        const getAll = await clientRedis.mGet(hisKeyExist)
        console.log("get all", getAll)
        return getAll
      } else {
        return []
      }
    } catch (error) {
      return error
    }
    // return clientRedis.get(`${process.env.REDIS_PREFIX}${data}`);
  },

};

module.exports = datamapper;
