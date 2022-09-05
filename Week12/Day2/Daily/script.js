// Part I :

const required = require('./main');

const b =5;

console.log(required.largeNumber + b);

// Part II :

const requireHttp = require("http");
const server = requireHttp.createServer(function (req,res){
    res.setHeader("Content-Type", "text/html");
    console.log("I'm listening");
    res.end(`<p>My module is:</p> <p>${required.largeNumber + b}</p> <h1> Hi there at the frontend</h1>`);
})

server.listen(3000);

// Part III:

const reqHttp = require("http");
const dateServer = reqHttp.createServer(function(req,res){
    res.setHeader("Content-Type", "text/html");
    res.end(`<p>The Date and Time are currently ${required.date}</p>`)
})

dateServer.listen(8080);
console.log(required.date);