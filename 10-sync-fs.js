const { readFileSync,writeFileSync }=require('fs')
console.log("start")

const first=readFileSync('./content/subfolder/first.txt','utf8')
const second=readFileSync('./content/subfolder/second.txt','utf8')

console.log("done with reading the files")
//{flag:'a'} is used to only the mentioned text or else 
//it will erase the existing content and write the only given content

const result=writeFileSync('./content/subfolder/result.txt',
`this is the result file ${first} and ${second}`,
{flag:'a'})

console.log("starting next task")