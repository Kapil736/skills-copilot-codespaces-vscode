// Create web server
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world! This is my web server.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
