const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(
  cors({
    origin: 'https://ramble-app.herokuapp.com/',
    credentials: true,
    methods: ['GET', 'PUT', 'POST'],
  })
);
app.options('*', cors());
//!!routes go here

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
