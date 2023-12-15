'use strict';

const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(socket); // Echo data received back to the client
});

server.listen(3000);
