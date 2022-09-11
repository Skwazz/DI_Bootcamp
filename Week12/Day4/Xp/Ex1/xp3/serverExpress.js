const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.writeHead(200);
    res.end("<p>Html tag here</p>")
})

app.listen(3000);
