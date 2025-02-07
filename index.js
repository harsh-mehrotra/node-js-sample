
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Default port to 3000 if not set

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello, Dockerized Node.js App!  I am techdock');
});

// Start the server
app.listen(PORT, function () {
  console.log(`Node app is running on port ${PORT}`);
});
