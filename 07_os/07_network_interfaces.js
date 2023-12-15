'use strict';

const os = require('node:os');

console.log(os.networkInterfaces());
// Output:
/**
 * {
 *   lo0: [
 *     {
 *       address: '127.0.0.1',
 *       netmask: '255.0.0.0',
 *       family: 'IPv4',
 *       mac: '00:00:00:00:00:00',
 *       internal: true,
 *       cidr: '127.0.0.1/8'
 *     },
 *     {
 *       address: '::1',
 *       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: true,
 *       cidr: '::1/128',
 *       scopeid: 0
 *     },
 *     {
 *       address: 'fe80::1',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: true,
 *       cidr: 'fe80::1/64',
 *       scopeid: 1
 *     }
 *   ],
 *   anpi0: [
 *     {
 *       address: 'fe80::e050:ddff:fe3d:eecd',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: 'e2:50:dd:3d:ee:cd',
 *       internal: false,
 *       cidr: 'fe80::e050:ddff:fe3d:eecd/64',
 *       scopeid: 4
 *     }
 *   ],
 *   anpi2: [
 *     {
 *       address: 'fe80::e050:ddff:fe3d:eecf',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: 'e2:50:dd:3d:ee:cf',
 *       internal: false,
 *       cidr: 'fe80::e050:ddff:fe3d:eecf/64',
 *       scopeid: 5
 *     }
 *   ],
 *   anpi1: [
 *     {
 *       address: 'fe80::e050:ddff:fe3d:eece',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: 'e2:50:dd:3d:ee:ce',
 *       internal: false,
 *       cidr: 'fe80::e050:ddff:fe3d:eece/64',
 *       scopeid: 6
 *     }
 *   ],
 *   ap1: [
 *     {
 *       address: 'fe80::7ce9:1eff:fe88:ec70',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '7e:e9:1e:88:ec:70',
 *       internal: false,
 *       cidr: 'fe80::7ce9:1eff:fe88:ec70/64',
 *       scopeid: 14
 *     }
 *   ],
 *   en0: [
 *     {
 *       address: 'fe80::14c0:95a8:48d1:a1a2',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '5c:e9:1e:88:ec:70',
 *       internal: false,
 *       cidr: 'fe80::14c0:95a8:48d1:a1a2/64',
 *       scopeid: 15
 *     },
 *     {
 *       address: '192.168.0.102',
 *       netmask: '255.255.255.0',
 *       family: 'IPv4',
 *       mac: '5c:e9:1e:88:ec:70',
 *       internal: false,
 *       cidr: '192.168.0.102/24'
 *     }
 *   ],
 *   awdl0: [
 *     {
 *       address: 'fe80::488:13ff:febb:b998',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '06:88:13:bb:b9:98',
 *       internal: false,
 *       cidr: 'fe80::488:13ff:febb:b998/64',
 *       scopeid: 16
 *     }
 *   ],
 *   llw0: [
 *     {
 *       address: 'fe80::488:13ff:febb:b998',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '06:88:13:bb:b9:98',
 *       internal: false,
 *       cidr: 'fe80::488:13ff:febb:b998/64',
 *       scopeid: 17
 *     }
 *   ],
 *   utun0: [
 *     {
 *       address: 'fe80::d20e:a3ff:4c30:27f5',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: false,
 *       cidr: 'fe80::d20e:a3ff:4c30:27f5/64',
 *       scopeid: 18
 *     }
 *   ],
 *   utun1: [
 *     {
 *       address: 'fe80::ab8b:719e:61e3:2168',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: false,
 *       cidr: 'fe80::ab8b:719e:61e3:2168/64',
 *       scopeid: 19
 *     }
 *   ],
 *   utun2: [
 *     {
 *       address: 'fe80::ce81:b1c:bd2c:69e',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: false,
 *       cidr: 'fe80::ce81:b1c:bd2c:69e/64',
 *       scopeid: 20
 *     }
 *   ],
 *   utun3: [
 *     {
 *       address: 'fe80::df0d:6dfa:ed1c:8441',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: false,
 *       cidr: 'fe80::df0d:6dfa:ed1c:8441/64',
 *       scopeid: 21
 *     }
 *   ],
 *   utun4: [
 *     {
 *       address: 'fe80::df15:da21:8487:b26f',
 *       netmask: 'ffff:ffff:ffff:ffff::',
 *       family: 'IPv6',
 *       mac: '00:00:00:00:00:00',
 *       internal: false,
 *       cidr: 'fe80::df15:da21:8487:b26f/64',
 *       scopeid: 22
 *     }
 *   ]
 * }
 */
