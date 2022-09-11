const express = require('express');

const app = express();

app.listen(3000, () =>{
    console.log('run on port 3000');
});

app.use('/', express.static(__dirname+'/public'));

app.get('/getuser',(req,res)=>{
    const user ={
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user)
})
