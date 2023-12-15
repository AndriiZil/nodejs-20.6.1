'use strict';

const querystring = require('querystring');

const data = { name: 'Alice', age: 25, city: 'London' };
const queryString = querystring.stringify(data);

console.log(queryString);
// Output: 'name=Alice&age=25&city=London'
