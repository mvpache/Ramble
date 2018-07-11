const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  //reviews: {
  //this will be refIds to reviews
  //},

  //wishlist: {
  //array of movies you wishlisted
  //}

  // rated: {
  //array of the movies you rated and their rating?
  //will need to plan this one a bit more
  // },
});

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 8).then(hash => {
    this.password = hash;
    next();
  });
});

userSchema.methods.verifyPassword = function(guess, callback) {
  console.log();
  bcrypt.compare(guess, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }
    callback(null, isValid);
  });
};

module.exports = mongoose.model('User', userSchema);
