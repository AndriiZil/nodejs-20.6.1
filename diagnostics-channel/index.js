const { Channel } = require('diagnostics_channel');

const myChannel = new Channel('my-channel');

function performTimeConsumingTask() {
  const startTime = process.hrtime.bigint();

  // Simulate a time-consuming task
  for (let i = 0; i < 100000000; i++) {
    // Do some work
  }

  const endTime = process.hrtime.bigint();
  const elapsedTime = endTime - startTime;

    myChannel.publish({
      some: 'message',
    });
}

myChannel.subscribe((event) => {
  console.log(event);
});

performTimeConsumingTask();
