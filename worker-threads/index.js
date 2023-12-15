const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  // This is the main thread.
  // You can create and manage worker threads here.
  const worker = new Worker('./worker.js');

  worker.postMessage({ data: 'Hello from main thread' });

  worker.on('message', (message) => {
    console.log(`Received message from worker: ${message.data}`);
  });
} else {
  // This is a worker thread.
  // Perform your computation here.
}
