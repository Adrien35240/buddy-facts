const mainDatamapper = require('../models/main.model');

const controller = {
  async getAll(req, res) {
    const result = await mainDatamapper.getAll();
    res.json(result.rows);
  },
};
module.exports = controller;
