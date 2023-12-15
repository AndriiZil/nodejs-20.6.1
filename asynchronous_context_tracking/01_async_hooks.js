const { AsyncLocalStorage } = require('async_hooks');
const asyncLocalStorage = new AsyncLocalStorage();

function logWithContext(message) {
  const contextValue = asyncLocalStorage.getStore();
  console.log(contextValue, `${message}`);
}

asyncLocalStorage.run({ context: 'Request-123' }, () => {
  logWithContext('Log message within context');
  setTimeout(() => {
    logWithContext('Log message within context after delay');
  }, 100);
});
