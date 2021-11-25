// Entry file
const express = require("express");
const serverSocket = require("socket.io");

// App setup
const app = express();

// Create server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`listening to request on port ${port}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = serverSocket(server);

// After connection
io.on("connection", (socket) => {
  console.log("made socket connection");
});
