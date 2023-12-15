const http = require('http');
const EventEmitter = require('events');

// Create a custom event emitter for HTTP requests
class RequestEmitter extends EventEmitter {}

// Create an instance of the custom event emitter
const requestEmitter = new RequestEmitter();

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Emit a custom event for each incoming request
  requestEmitter.emit('requestReceived', req);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js HTTP Server!\n');
});

// Start the HTTP server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Subscribers can listen for the 'requestReceived' event
requestEmitter.on('requestReceived', (req) => {
  console.log(`Request received from ${req.socket.remoteAddress}`);
});

// Subscribers can also perform custom actions based on the event
requestEmitter.on('requestReceived', (req) => {
  if (req.url === '/special') {
    console.log('Special request detected!');
  }
});
