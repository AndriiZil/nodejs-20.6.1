'use strict';

const querystring = require('querystring');

const value = 'Hello, World!';
const encodedValue = querystring.escape(value);
const decodedValue = querystring.unescape(encodedValue);

console.log(encodedValue); // Output: 'Hello%2C%20World%21'
console.log(decodedValue); // Output: 'Hello, World!'
