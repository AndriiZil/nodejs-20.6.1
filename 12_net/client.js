const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Connected to server');

  // Send data to the server
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log('Received data from server:', data.toString());
});

client.on('end', () => {
  console.log('Disconnected from server');
});
