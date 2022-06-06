const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router().get('/', (req, res) => {
  res.json(cats);
});
