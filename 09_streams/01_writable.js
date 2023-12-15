'use strict';

const fs = require('fs');

const readStream = fs.createReadStream('./data/largeFile.txt');
const writeStream = fs.createWriteStream('./data/new-file.txt'); // Directory should be exists

readStream.on('data', (chunk) => {
  console.log('\n---WRITABLE STREAM START');
  console.info(chunk.toString()); // Buffer
  writeStream.write(chunk);
  console.log('\n---WRITABLE STREAM END');
});
