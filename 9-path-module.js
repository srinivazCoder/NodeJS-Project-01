const path = require('path')

// console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt');

console.log("filePath",filePath)

const base = path.basename(filePath)

// console.log("BASE",base)
console.log("----------------");

const absoulte = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absoulte)