const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `the result is : ${first},${second}`,
    // {flag:'a'}
)