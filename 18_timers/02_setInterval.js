'use strict';

const intervalId = setInterval(() => {
  console.log('Repeated function executed');
}, 1000); // Execute every second

// To stop the interval after a certain period
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped');
}, 5000); // Stop after 5 seconds
