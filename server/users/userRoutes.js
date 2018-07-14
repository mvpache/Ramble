const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const express = require('express');
const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../users/User');
const configSecret = require('../config').secret;

const secret = process.env.SECRET || configSecret;

const router = express.Router();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .select('-password') // don't select password prop on user
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err, false));
});

passport.use(jwtStrategy);

const protectedRoute = passport.authenticate('jwt', { session: false });
// use jwt strategy to check if token present

router.use(protectedRoute);

r;
