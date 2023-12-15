'use strict';

const timeoutId = setTimeout(() => {
  console.log('This will never be executed');
}, 2000);

// Cancel the scheduled timeout
clearTimeout(timeoutId);
