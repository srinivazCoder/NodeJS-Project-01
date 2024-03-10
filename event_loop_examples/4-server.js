const http = require('http');
// console.log(http)
const server = http.createServer((req,res)=>{
    console.log("request event");
    if(req.url==="/"){
        res.end("Home Page")
        return;
    }
    if(req.url==="/about"){
        res.end("about page")
        return;
    }
    res.end("error page");

   return;
});
server.listen(5000,()=>{
    console.log('Server Listening on port : 5000...')
})