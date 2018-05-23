const express    = require('express');
const router     = express.Router();
const Restaurant = require('../models/Restaurant');
const User       = require('../models/User');
const multer     = require('multer');
const upload     = multer({dest: './public/images/restaurants'});

const isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated() && req.user.role === 'MASTERMIND') return next();
    res.send('Get outta here rat');
};

router.get('/', isAuthenticated, (req, res, next) => {
  res.send('welcome master');
});

router.post('/newRestaurant', isAuthenticated, upload.single('photo'), (req, res, next) => {
  req.body.photo = `${req.protocol}://${req.headers.host}/images/restaurants/` + req.file.filename;
  Restaurant.create(req.body)
  .then(restaurant => {
    res.json(restaurant);
  })
  .catch(e => res.send(e));
});

router.get('/restaurants', isAuthenticated, (req, res, next) => {
  Restaurant.find()
  .then(restaurants => {
    res.json(restaurants);
  })
  .catch(e => res.send(e));
});

router.get('/users', isAuthenticated, (req, res, next) => {
  User.find()
  .then(users => {
    res.json(users);
  })
  .catch(e => res.send(e));
});

module.exports = router;