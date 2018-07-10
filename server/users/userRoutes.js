const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local'); //plugin for handling authentication
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const express = require('express');

const User = require('../users/User');
const secret = process.env.SECRET || require('../config').secret;
const router = express.Router();

const makeToken = user => {
  // uses data to make token
  const timestamp = new Date().getTime();
  const payload = {
    sub: user._id, //who the token is about(subject)
    iat: timestamp, //issued at time
    username: user.username,
    race: user.race,
    //any other info from user
  };
  const options = { expiresIn: '12h' }; //has a bunch of stuff, most important for now is exp date
  return jwt.sign(payload, secret, options); //return token after creation
};

const localStrategy = new LocalStrategy(function(username, password, done) {
  User.findOne({ username }, function(err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      done(null, false); //no user found
    }

    user.verifyPassword(password, function(err, isValid) {
      if (err) {
        return done(err);
      }

      if (isValid) {
        const { _id, username, race } = user; //destrucure off user
        return done(null, { _id, username, race });
      }
      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub)
    .select('-password') //don't select password prop on user
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err => {
      return done(err, false);
    });
});

passport.use(localStrategy);

const authenticate = passport.authenticate('local', { session: false }); //local refers to LocalStrategy class - used for login(docs for LocalStrategy define this)
const protected = passport.authenticate('jwt', { session: false });
//use jwt strategy to check if token present

router.route('/register').post((req, res) => {
  const credentials = req.body;
  const user = new User(credentials); //need username and pass
  user.save().then(inserted => {
    const token = makeToken(inserted);
    9;
    res.status(201).json({ token });
  });
});

//register
//login
//add review
//get reviews

module.exports = router;
