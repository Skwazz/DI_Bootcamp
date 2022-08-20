// EX I
// Convert the below promise into async await:


// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));


const awaitConv = async () => {
  let fetcher = await fetch("https://www.swapi.tech/api/starships/9/")
  let data = await fetcher.json();
  return data;
}

awaitConv()
.then((res) => {
    console.log(res);
})
.catch((e)=>{
    console.log(e);
})


// EX II
function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// When running the function asyncCall it will first console log 'calling'
// and after the 'calling' it will initiate the function 'resolveAfter2Seconds()'
// and return a new promise
// then it will wait for 2 seconds and log resolved as this is the value we get to the 'resolve' paramater


