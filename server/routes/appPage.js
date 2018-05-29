const express     = require('express');
const router      = express.Router();
const Restaurant  = require('../models/Restaurant');
const User        = require('../models/User');
const Reservation = require('../models/Reservation');

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

router.post('/',  (req, res, next) => {
  Reservation.create(req.body)
  .then(reservation => {
    return res.json(reservation);
  })
  .catch(e => res.send(e));
});

router.get('/menu/:id', (req, res) => {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    res.json(restaurant);
  })
  .catch(e => res.send(e));
});

module.exports = router;