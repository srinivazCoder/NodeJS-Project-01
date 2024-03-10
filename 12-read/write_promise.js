const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText=(path)=>{
//     return new Promise((reslove,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//                 return;

//             }else{
//                reslove(data) 
//             }
//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFile("./content/first.txt", 'utf8');
        const second = await readFile("./content/second.txt", 'utf8');

        await writeFile("./content/result-mid-grenade.txt", "THIS IS AWESOME TEST from Promise:" + first + second,{flag:'a'});
        console.log(first, second); 
    }
    catch (error) {
        console.log(error)
    }
}
start()
// getText("./content/first.txt").then((result)=>console.log(result)).catch((err)=>console.log(err))

