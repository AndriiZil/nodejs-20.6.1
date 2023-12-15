### DNS

In Node.js, the dns module is a built-in module that provides methods for working with Domain Name System (DNS) 
resolution and manipulation. It allows you to perform various DNS-related operations, such as hostname resolution, 
reverse DNS lookup, and more. Here's an overview of some of the key functions and concepts in the dns module:

`dns.lookup(hostname, options, callback)`: This function performs a DNS lookup for the given hostname. 
It resolves the hostname to an IPv4 or IPv6 address and calls the callback with the result. 
The options parameter can be used to specify whether to resolve to IPv4 or IPv6 addresses.

`dns.lookupService(address, port, callback)`: This function performs a reverse DNS lookup to find the 
hostname associated with the given address and port. It calls the callback with the hostname and service information.

`dns.resolve(hostname, rrtype, callback)`: This function performs a DNS query for the specified resource 
record type (rrtype) associated with the given hostname. The callback is called with an array of results.

`dns.reverse(ip, callback)`: This function performs a reverse DNS lookup to find the hostnames associated 
with the given IP address. The callback is called with an array of hostnames.
