const mainDatamapper = require('../models/main.model');

const controller = {
  async getAll(req, res) {
    const result = await mainDatamapper.getFact();
    res.json(result.rows);
  },
};
module.exports = controller;
