'use strict';

const path = require('path');

console.log(path.parse('/home/user/dir/file.txt'));

/**
 * {
 *   root: '/',
 *   dir: '/home/user/dir',
 *   base: 'file.txt',
 *   ext: '.txt',
 *   name: 'file'
 * }
 */
