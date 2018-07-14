const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local'); // plugin for handling authentication

const express = require('express');

const User = require('../users/User');
const configSecret = require('../config').secret;

const secret = process.env.SECRET || configSecret;

const router = express.Router();

const makeToken = (user) => {
  // uses data to make token
  const timestamp = new Date().getTime();
  const payload = {
    sub: user._id, // who the token is about(subject)
    iat: timestamp, // issued at time
    username: user.username,
  };
  const options = { expiresIn: '12h' }; // has a bunch of stuff, most important for now is exp date
  return jwt.sign(payload, secret, options); // return token after creation
};

const localStrategy = new LocalStrategy((username, password, done) => {
  console.log('inside local', username, password);
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false); // no user found
    }

    return user.verifyPassword(password, (err, isValid) => {
      if (err) {
        return done(err);
      }

      if (isValid) {
        const { _id, username } = user; // destrucure off user
        return done(null, { _id, username });
      }
      return done(null, false);
    });
  });
});

passport.use(localStrategy);

const authenticate = passport.authenticate('local', { session: false }); // local refers to LocalStrategy class - used for login(docs for LocalStrategy define this)

router.route('/register').post((req, res) => {
  const credentials = req.body;
  const user = new User(credentials); // need username and pass
  user.save().then((inserted) => {
    const token = makeToken(inserted);
    res.status(201).json({ token });
  });
});

router.use(authenticate);

router.route('/login').post((req, res) => {
  console.log('inside login');
  res.json({ token: makeToken(req.body.username), user: req.body.username });
});

// register
// login
// add review
// get reviews

module.exports = router;
