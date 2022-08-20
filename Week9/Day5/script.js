let randomNum = 1;
console.log(randomNum);
const fetchApi = async (url) =>{
        let res = await fetch(url)
        let data = res.json();
       return data;
   
}


let btnFnction = document.querySelector(`#btn`).addEventListener(`click`,()=>{
 randomNum = Math.floor(Math.random()*82 + 1)
    fetchApi(`https://www.swapi.tech/api/people/${randomNum}`)
.then((data)=>{
 document.querySelector('#name').textContent = `${data.result.properties.name}`
 document.querySelector('#height').textContent = `${data.result.properties.height}`
 document.querySelector('#gender').textContent = `${data.result.properties.gender}`
 document.querySelector('#birthYear').textContent = `${data.result.properties.birth_year}`
//  document.querySelector('#homeWorld').textContent = `${data.result.properties.homeworld}`
}).catch((err)=>{
    console.log(err);
})
fetchApi(`https://www.swapi.tech/api/planets/${randomNum}`)
.then((data)=>{
 console.log(data);
 document.querySelector('#homeWorld').textContent = `${data.result.properties.name}`
}).catch((err)=>{
    console.log(err);
})

})