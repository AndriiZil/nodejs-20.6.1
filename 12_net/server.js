const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // Send data to the client
  socket.write('Welcome to the server!\n');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
