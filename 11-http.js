const http = require('http');

console.log(http)

const server = http.createServer((req,res)=>{
    // res.write("all the page")
    // res.end()
   if(req.url === "/"){
    res.end("wellcome to home page") 
    return
   }
   if(req.url === "/about"){
    res.end("wellcome to about page")
    return
   }

   res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home page</a>
   `)
   return
})

server.listen(5000);