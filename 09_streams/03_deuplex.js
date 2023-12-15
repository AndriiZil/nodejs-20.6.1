'use strict';

const fs = require('fs');

const readStream = fs.createReadStream('./data/largeFile.txt');
const writeStream = fs.createWriteStream('./data/new-file.txt');

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
}

readStream
  .on('error', handleError)
  .pipe(writeStream)
  .on('error', handleError);
