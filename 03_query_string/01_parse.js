'use strict';

const querystring = require('querystring');

const queryString = 'name=John&age=30&city=New+York';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);
// Output: { name: 'John', age: '30', city: 'New York' }
