let passport = require('passport');
let User = require('../models/user');

//Displays the login page
module.exports.displayLoginPage = function(req, res, next) {
  if (!req.user) {
    res.render('Auth/login', {
      title: 'Login',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

//Executes the authentication on login page
module.exports.processLoginPage = function(req, res, next) {
  passport.authenticate('local', {
    successRedirect: req.session.url || '/businesscontact',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
  delete req.session.url;
};

//Processes logout
module.exports.processLogout = function(req, res, next) {
  req.logout();
  res.redirect('/');
};