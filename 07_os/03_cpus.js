'use strict';

const os = require('node:os');

console.log(os.cpus());
// Output
/**
 * [
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 34142080, nice: 0, sys: 17261900, idle: 156385940, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 33701670, nice: 0, sys: 14427400, idle: 159819860, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 30581640, nice: 0, sys: 12334170, idle: 165234320, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 27188950, nice: 0, sys: 10732150, idle: 170396690, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 10966640, nice: 0, sys: 2554980, idle: 195213730, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 7425350, nice: 0, sys: 1503620, idle: 199892490, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 5391820, nice: 0, sys: 935140, idle: 202550060, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 3639910, nice: 0, sys: 581110, idle: 204715520, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 10810690, nice: 0, sys: 2454690, idle: 195483220, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 7384510, nice: 0, sys: 1464470, idle: 199978810, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 5334530, nice: 0, sys: 912210, idle: 202634760, irq: 0 }
 *   },
 *   {
 *     model: 'Apple M2 Max',
 *     speed: 24,
 *     times: { user: 3548840, nice: 0, sys: 568070, idle: 204821980, irq: 0 }
 *   }
 * ]
 */
