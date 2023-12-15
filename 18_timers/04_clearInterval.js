'use strict';

const intervalId = setInterval(() => {
  console.log('This will be executed repeatedly');
}, 1000);

// Stop the interval timer after a certain condition
if (true) {
  clearInterval(intervalId);
}
