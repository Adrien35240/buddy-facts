const controller = {

  main(req, res) {
    res.json({ message: 'Hello, World !' });
  },
  dummy(req, res) {
    res.json({ message: 'Dummy message ' });
  },
  dummyPost(req, res) {
    const { message } = req.body;
    if (message) {
      res.json({ message: 'Hello from dummy !' });
    }
  },
};

module.exports = controller;
