// Make connection
// We have access to io variable

const port = 4000;
const clientSocket = io(`http://localhost:${port}`);

// Get references DOM
let message = document.getElementById("message"); // input
let handle = document.getElementById("handle"); // input
let btn = document.getElementById("send");
let output = document.getElementById("output");
let feedback = document.getElementById("feedback");

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
  feedback.innerHTML = "";
  output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
});

// 4) Listen to keypress
message.addEventListener("keypress", () => {
  // When something is being typed
  clientSocket.emit("typing", handle.value); // Send the name of the person typing
});

// 6) Listen for typing message
clientSocket.on("typing", (data) => {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});
