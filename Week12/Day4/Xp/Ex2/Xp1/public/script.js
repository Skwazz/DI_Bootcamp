function user() {
    fetch('http://localhost:3000/getuser')
    .then(res => res.json())
    .then(ret=>{
        console.log(ret);
    })
    .catch(e=>{
        console.log(e);
    })
}

user();