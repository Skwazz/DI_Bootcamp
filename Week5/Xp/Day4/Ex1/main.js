// Part I
let helloWorld = () => alert(`Hello World`);
setTimeout(() => {
  helloWorld();
}, 2000);

// part II
// let container = document.querySelector(`#container`);
// let createP = document.createElement(`p`);
// let createPar = document.createTextNode(`Hello World!`);
// let newPar = createP.appendChild(createPar);
let addParagaraph = () => {
  let container = document.querySelector(`#container`);
  let createP = document.createElement(`p`);
  let createPar = document.createTextNode(`Hello World!`);
  let newPar = createP.appendChild(createPar);
  container.appendChild(newPar);
};

// setTimeout(() => {
//   addParagaraph();
// }, 2000);

// part III

let addParagraphs = setInterval(() => {
  addParagaraph();
}, 2000);

let btn = document.querySelector(`button`);

let clear = () => {
  clearInterval(addParagraphs);
};

btn.addEventListener(`click`, clear);
