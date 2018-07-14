const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const movieRouter = require('./server/movie_routes');
const userAuthRouter = require('./server/users/userAuthRoutes');
const configDBUSER = require('./server/config').dbuser;
const configDBPASS = require('./server/config').dbpass;

const app = express();
app.use(express.json());

const corsOptions = {
  origin: ('https://ramble-app.herokuapp.com', 'http://localhost:3000'),
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors(corsOptions));
app.options('*', cors());

app.use('/api/user/auth', userAuthRouter);
app.use(movieRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const dbuser = process.env.DBUSER || configDBUSER;
const dbpass = process.env.DBPASS || configDBPASS;

mongoose
  .connect(`mongodb://${dbuser}:${dbpass}@ds131971.mlab.com:31971/ramble`)
  .then((connected) => {
    console.log('=== connected to mongo ===', connected);
  })
  .catch((err) => {
    console.log('=== ERROR connecting to mongo ===', err);
  });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
