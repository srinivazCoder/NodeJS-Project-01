const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    // console.log(res)
    res.end('Wellcome')
})

server.listen(5000,()=>{
    console.log('listening 5000') 
})