const http = require('http');
const url = require('url');
const porta = 3000; 
const host = '127.0.0.1';

const server = http.createServer((req,res)=>{

res.writeHead(200,{'content-type':'text/html'});
res.write(req.url)
const p = url.parse(req.url,true).query;
res.write(p.nome)
res.write(p.curso)
res.end();
});


server.listen(porta,host,()=>{
    console.log(`server esta rodando porta:${porta}`);
});