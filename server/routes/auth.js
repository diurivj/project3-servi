const router   = require('express').Router();
const passport = require('passport');
const User     = require('../models/User');

const isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) return next();
    res.send('Is not logged');
};

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password, (err, user) => {
    if (err) return res.json(err);
      res.json(user);
  });
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.json(req.user);
});

router.get('/profile', isAuthenticated, (req, res) => {
  User.findById(req.user._id)
  .then(user => {
    res.json(user);
  })
  .catch(e => next(e));
});

router.get('/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.send('Adios papud');
});

module.exports = router;
