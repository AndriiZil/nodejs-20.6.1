// Import the 10_events module
const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Create an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Define an event handler function
function eventHandler(message) {
  console.log('Event handled:', message);
}

// Register the event handler for a custom event
myEmitter.on('customEvent', eventHandler);

// Emit the custom event with a message
myEmitter.emit('customEvent', 'Hello, Node.js Events!');

// Remove the event handler
myEmitter.removeListener('customEvent', eventHandler);

// Emit the event again (no handler, so nothing will be printed)
myEmitter.emit('customEvent', 'This event will not be handled.');

// Register a one-time event handler
myEmitter.once('oneTimeEvent', () => {
  console.log('This event handler will only run once.');
});

// Emit the one-time event
myEmitter.emit('oneTimeEvent');
myEmitter.emit('oneTimeEvent'); // This will not trigger the handler again

// Example of asynchronous event handling
myEmitter.on('asyncEvent', (message) => {
  setTimeout(() => {
    console.log('Async Event handled:', message);
  }, 1000);
});

myEmitter.emit('asyncEvent', 'Async event with a delay');

console.log('Event handling in progress...');

// You can also listen for errors
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err);
});

// Emitting an error event (this will trigger the 'error' handler)
myEmitter.emit('error', new Error('Something went wrong!'));
