### Streams

In Node.js, streams are a fundamental concept for working with I/O operations efficiently, 
whether reading from or writing to files, handling network communication, or processing large amounts of data. 
Streams provide an abstract interface for moving data from one place to another, typically in a streaming or pipelined fashion. 
Node.js has several built-in types of streams, which are part of the stream module.

`Readable Streams`:
Readable streams are used for reading data from a source, such as a file or an HTTP request.
You can create readable streams using classes like fs.createReadStream for file reading or by implementing your custom readable stream.

`Writable Streams`:
Writable streams are used for writing data to a destination, such as a file or an HTTP response.
You can create writable streams using classes like fs.createWriteStream for file writing or by implementing your custom writable stream.

`Duplex Streams`:
Duplex streams are both readable and writable, allowing bidirectional data flow.
You can create duplex streams using classes like net.Socket for network sockets or by implementing custom duplex streams.

`Transform Streams`:
Transform streams are a type of duplex stream that can modify data as it passes through them. They are useful for data manipulation.
You can create transform streams by extending the stream.Transform class or using modules like stream.Transform provided by Node.js.
