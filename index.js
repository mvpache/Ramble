const express = require('express');
const path = require('path');
const cors = require('cors');

const movieRouter = require('./server/movie_routes');

const app = express();

const corsOptions = {
  origin: ('https://ramble-app.herokuapp.com', 'http://localhost:5000'),
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors(corsOptions));
app.options('*', cors());
//!!routes go here
app.use(movieRouter);
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
