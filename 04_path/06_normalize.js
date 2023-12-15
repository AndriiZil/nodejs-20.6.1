'use strict';

const path = require('path');

const normalizedPath = path.normalize('/path/to/../myfolder/./file.txt');
console.log(normalizedPath); // Outputs: '/path/myfolder/file.txt'
