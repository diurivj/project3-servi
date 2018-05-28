const express    = require('express');
const router     = express.Router();
const Restaurant = require('../models/Restaurant');
const User       = require('../models/User');

const isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) return next();
    res.send('Is not logged');
};

router.get('/restaurants', (req, res, next) => {
  Restaurant.find()
  .then(restaurants => {
    res.json(restaurants);
  })
  .catch(e => res.send(e));
});

module.exports = router;