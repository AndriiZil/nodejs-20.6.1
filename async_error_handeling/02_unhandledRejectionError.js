'use strict';

process.on('unhandledRejection', e => {
  console.error('unhandled promise rejections', e)
}); //unhandled promise rejections

Promise.reject('Reject example error');

/**
 * Try to run code
 */
