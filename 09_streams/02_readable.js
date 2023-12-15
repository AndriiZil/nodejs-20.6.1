'use strict';

const fs = require('fs');

const readStream = fs.createReadStream('./data/largeFile.txt');

readStream.on('data', (chunk) => {
  console.log('n\--- READABLE STREAM START');
  console.log(chunk.toString()); // Buffer
  console.log('n\--- READABLE STREAM END');
});
