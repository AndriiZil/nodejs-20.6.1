const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  console.log(`Received message from main thread: ${message.data}`);
  // Perform computation or tasks here.
  // Send a response back to the main thread if needed.
  parentPort.postMessage({ data: 'Hello from worker thread' });
});
