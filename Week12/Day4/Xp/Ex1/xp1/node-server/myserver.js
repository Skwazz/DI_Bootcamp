const http = require( 'http');

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("<h1>first sentance</h1><h2>second sentance</h2><h3>third sentance</h3>")
})

server.listen(3000);