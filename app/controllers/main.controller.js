const mainDatamapper = require('../models/main.model');

const controller = {
  async home(req, res) {
    try {
      const result = await mainDatamapper.home();
      res.json(result);
    } catch (error) {
      console.log('home route error :', error);
    }
  },
  async getAll(req, res) {
    const result = await mainDatamapper.getAll();
    res.json(result.rows);
  },
};
module.exports = controller;
