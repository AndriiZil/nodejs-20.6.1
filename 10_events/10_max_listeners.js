const { EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  console.log(ee.getMaxListeners()); // 10 by default
  ee.setMaxListeners(14);
  console.log(ee.getMaxListeners()); // 14
}
