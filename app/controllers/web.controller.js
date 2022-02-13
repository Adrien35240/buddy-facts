const datamapper = require('../models/main.model')
module.exports = {
  async homePage(req, res) {
   

    const fact = await datamapper.getRandomFact()
    const allFacts = await datamapper.getFact();
    const getAllRedis = await datamapper.getAllRedis();
    console.log(getAllRedis)
    const key = "key" + (getAllRedis.length + 1)
    await datamapper.saveRedis(key, fact.data.value)
    res.render('index', {env:process.env.NODE_ENV, data: fact.data.value, factsSaved: allFacts, factsRedis: getAllRedis });
  },
  async translate(req, res) {
    const result = await datamapper.getTranslate(req.body.fact)
    const allFacts = await datamapper.getFact()
    const getAllRedis = await datamapper.getAllRedis()
    res.render('index', { translate: true, data: result.data, factsSaved: allFacts, factsRedis: getAllRedis })
  },
  async postFact(req, res) {
    const result = await datamapper.postFact(req.body.fact)
    if (result) {
      const fact = await datamapper.getRandomFact()
      const allFacts = await datamapper.getFact()
      const getAllRedis = await datamapper.getAllRedis()
      const key = "key" + (getAllRedis.length + 1)
      await datamapper.saveRedis(key, fact.data.value)
      res.render('index', {
        data: fact.data, factsSaved: allFacts, factsRedis: getAllRedis
      });
    }
  },
  async getAllFact(req, res) {
    const allFacts = await datamapper.getFact()
    res.json(allFacts)
  },
  // ---------------- REDIS -----------------
  async getRedis(req, res, next) {
    const result = await datamapper.getRedis(req.params.data);
    if (!result) {
      next();
    }
    return res.json({ result });
  },
  async saveRedis(req, res) {
    if (!req.body.data) {
      res.status(400).json({ error: 'data is required in body' });
    }
    const result = await datamapper.createRedis(req.params.data, req.body.data);
    res.json({ result });
  },
};
