### OS

`os.platform()`: Returns a string identifying the operating system platform for which the Node.js binary was compiled. 
The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

`os.arch()`: Returns the operating system CPU architecture for which the Node.js binary was compiled. 
Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.

`os.cpus()`: Returns an array of objects containing information about each logical CPU core. 
The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

`os.totalmem()`: Returns the amount of free system memory in bytes as an integer.

`os.freemem()`: Returns the amount of free system memory in bytes as an integer.

`os.hostname()`: Returns the host name of the operating system as a string.

`os.networkInterfaces()`: Returns an object containing network interfaces that have been assigned a network address. 

`os.userInfo()`: Returns information about the currently effective user. On POSIX platforms, this is typically a subset of the password file. 
The returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid and gid fields are -1, and shell is null.

`os.homedir()`: Returns the string path of the current user's home directory.

`os.machine()`: Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.

`os.tmpdir()`: Returns the operating system's default directory for temporary files as a string.

`os.type()`: Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin'
on macOS, and 'Windows_NT' on Windows.

`os.version()`: Returns a string identifying the kernel version.

`os.uptime()`: Returns the system uptime in number of seconds
