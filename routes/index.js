const express = require('express');
const debug = require('debug')('onlineshop:application');
const ItemsService = require('../libs/itemsService');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const itemsService = new ItemsService(req);

  itemsService.getItems()
    .then(items => res.render('index', { title: 'たにやまショッピング', items}))
    .catch(debug);
});

module.exports = router;
