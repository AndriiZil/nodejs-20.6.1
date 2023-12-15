'use strict';

const buf1 = Buffer.alloc(10); // Create a buffer of 10 bytes filled with zeros
const buf2 = Buffer.from([1, 2, 3, 4, 5]); // Create a buffer from an array
const buf3 = Buffer.from('Hello, Node.js', 'utf-8'); // Create a buffer from a string

const buf = Buffer.alloc(4);

buf.writeUInt8(42, 0); // Write the value 42 to the first byte
buf.writeUInt16LE(1000, 1); // Write the value 1000 as a 16-bit little-endian integer to the second and third bytes

console.log(buf.readUInt8(0)); // Read the first byte (42)
console.log(buf.readUInt16LE(1)); // Read the 16-bit little-endian value (1000)
