const datamapper = require('../models/main.model')
module.exports = {
  async homePage(req, res) {
    const fact = await datamapper.getRandomFact()
    const allFacts = await datamapper.getFact();
    res.render('index', { data: fact.data, factsSaved: allFacts});
  },
  async translate(req, res) {
    const result = await datamapper.getTranslate(req.body.fact)
    const allFacts = await datamapper.getFact()
    res.render('index', { translate: true, data: result.data, factsSaved: allFacts})
},
  async postFact(req, res) {
    console.log(req.body.fact)
    const result = await datamapper.postFact(req.body.fact)
    if (result)
    {
      const fact = await datamapper.getRandomFact()
      const allFacts = await datamapper.getFact()
      res.render('index', {
        data: fact.data, factsSaved: allFacts
});
      }
  },
  async getAllFact(req, res) {
    const allFacts = await datamapper.getFact()
    res.json(allFacts)
  }
};
