'use strict';

const os = require('node:os');

console.log(os.userInfo());
// Output:
/**
 * {
 *   uid: 501,
 *   gid: 20,
 *   username: 'andriizilnyk',
 *   homedir: '/Users/andriizilnyk',
 *   shell: '/bin/zsh'
 * }
 */
