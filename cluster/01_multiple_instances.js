'use strict';

const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

/**
 * Primary 2752 is running
 * Worker 2755 started
 * Worker 2760 started
 * Worker 2754 started
 * Worker 2764 started
 * Worker 2757 started
 * Worker 2758 started
 * Worker 2759 started
 * Worker 2756 started
 * Worker 2762 started
 * Worker 2761 started
 * Worker 2763 started
 * Worker 2765 started
 */
