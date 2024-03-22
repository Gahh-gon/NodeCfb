const http = require('http');
const porta = 3000; 
const host = '127.0.0.1';

const server = http.createServer((req,res)=>{

res.writeHead(200,{'content-type':'text/html'});
if(req.url == '/'){
    res.write('<h1>Bem vindo</h1>');
}else if(req.url == '/canal'){
    res.write('<h1> bem vindo ao canal </h1>');
}else if(req.url == '/curso'){
    res.write(
        '<h1>Bem vindo area de cursos </h1> <p>Qual você deseja basta colocar no caminho da url</p>'
    );
}else if(req.url == '/curso/node'){
    res.write('<h1> bem vindo ao curso de node </h1>');
}
res.end();
});


server.listen(porta,host,()=>{
    console.log(`server esta rodando porta:${porta}`);
});