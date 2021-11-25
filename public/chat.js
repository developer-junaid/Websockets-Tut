// Make connection
// We have access to io variable

const port = 4000;
const clientSocket = io(`http://localhost:${port}`);
