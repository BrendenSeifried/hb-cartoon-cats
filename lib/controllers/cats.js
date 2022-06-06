const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const singleCat = cats.find((item) => item.id === id);
    res.json(singleCat);
  })
  .get('/', (req, res) => {
    const listCats = cats.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    res.json(listCats);
  });
