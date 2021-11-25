// Entry file
const express = require("express");

// App setup
const app = express();

// Create server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`listening to request on port ${port}`);
});

// Static files
app.use(express.static("public"));
