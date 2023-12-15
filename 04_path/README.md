### Path

In Node.js, the path module is a built-in module that provides utilities for working with file and directory paths. 
It is a fundamental module used for tasks related to path manipulation and normalization. Here are some of the key 
functions and concepts in the path module:

The path module is particularly useful when working with file I/O operations, such as reading and writing files, 
or when constructing file paths dynamically. It ensures that your code works correctly across different 
operating systems by handling platform-specific path separator differences.

`path.join([...paths])`: This function joins one or more path segments together using the appropriate platform-specific 
separator (e.g., "\" on Windows or "/" on Unix-like systems). It returns a normalized path string.

`path.resolve([...paths])`: This function resolves an absolute path from the given path segments. 
It starts from the current working directory and iteratively appends each path segment to it.

`path.basename(path[, ext])`: This function returns the last portion of a path, effectively extracting the filename. 
You can also specify an optional file extension to remove.

`path.dirname(path)`: This function returns the directory name of a path, effectively extracting the directory portion.

`path.extname(path)`: This function returns the file extension of a path.

`path.normalize(path)`: This function normalizes a path by resolving ".." and "." segments to their actual directory names.

The `path.parse()` method returns an object whose properties represent significant elements of the path. 
