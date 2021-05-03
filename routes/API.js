const router = require("express").Router()
const passport = require("passport")
var LocalStrategy = require('passport-local').Strategy;
const { User } = require("../models")


passport.use(new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  }
));


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

// Register User
router.post('/api/register', function (req, res) {
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.createUser(newUser, function (err, user) {
    if (err) throw err;
    res.send(user).end()
  });

});


// Endpoint to login
router.post('/api/login',
  passport.authenticate('local'),
  function (req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/api/user', function (req, res) {
  res.send(req.user);
})


// Endpoint to logout
router.get('/api/logout', function (req, res) {
  req.logout();
  res.send(null)
});





module.exports = router