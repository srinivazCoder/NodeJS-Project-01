const {readFile } = require('fs')
const file = require("../content/big");

console.log('started file task');
console.log(file);

readFile("../content/big",'utf8',(err,res)=>{
    if(err){
        console.log(err);
        return 
    }
 
    console.log(res)
    console.log('completed first task')

})
console.log('starting next task')