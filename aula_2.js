// vamos criar servidor 

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

   res.write('Test serve');
   res.end();

}).listen(1337);