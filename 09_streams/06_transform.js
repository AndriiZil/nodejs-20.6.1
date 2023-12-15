'use strict';

const { Transform } = require('stream');

// Create a custom Transform stream
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert the chunk (buffer) to a string, transform it to uppercase, and then push it to the output
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    callback();
  }
});

// Pipe data through the custom Transform stream
process.stdin.pipe(uppercaseTransform).pipe(process.stdout);

// Listen for the 'finish' event to know when the transformation is complete
uppercaseTransform.on('finish', () => {
  console.log('Transformation complete.');
});
