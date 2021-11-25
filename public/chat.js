// Make connection
// We have access to io variable

const port = 4000;
const clientSocket = io(`http://localhost:${port}`);

// Get references DOM
let message = document.getElementById("message"); // input
let handle = document.getElementById("handle"); // input
let btn = document.getElementById("send");
let output = document.getElementById("output");

// Emit events
// 1) Listen to click
btn.addEventListener("click", () => {
  const data = {
    message: message.value,
    handle: handle.value,
  };

  clientSocket.emit("chat", data); // Emit message to server
});

// 3) Listen for events
clientSocket.on("chat", (data) => {
  // Get data from server
  output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
});
