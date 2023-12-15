'use strict';

const controller = new AbortController();
const signal = controller.signal;

const timeoutId = setTimeout(() => {
  console.log('Timeout completed');
}, 5000);

// Listen for abort signal
signal.addEventListener('abort', () => {
  clearTimeout(timeoutId);
  console.log('Timeout canceled');
}, { once: true });

// Simulate canceling the timeout after 2 seconds
setTimeout(() => {
  controller.abort();
}, 2000);

/**
 * Timeout canceled
 */
