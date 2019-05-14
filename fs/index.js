const fs = require('fs')

//first arg is the place where we want the file, the next arg is the data that we want to send
fs.writeFileSync('hello.txt', 'hello from Node.js')
