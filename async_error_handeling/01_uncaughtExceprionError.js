'use strict';

const http = require('http');

process.on('uncaughtException', e => {
  console.error('unhandled errors', e);
}); // unhandled errors

http.createServer((req, res) => {
  let raw="";
  req.on('data', chunk => raw+=chunk);
  req.on('end', () => {
    const d=JSON.parse(raw);
    res.statusCode=200;
    res.end();
  });
}).listen(4000);

/**
 * Try to execute curl http://localhost:4000
 */
