//  Exercise 1 : Change The Article : 

// 1.1 

console.log(document.querySelector(`h1`));


// 1.2

let selectLastP = document.getElementsByTagName(`p`)[3];

let removeLastP = selectLastP.remove();

// 1.3

let selectH2 = document.querySelector(`h2`);
let changeBgRed = selectH2.addEventListener(`click`, (element) => {
    element.target.style.backgroundColor = `red`;
})

// 1.4 

let selectH3 = document.querySelector(`h3`);
console.log(selectH3);
let displayNone = selectH3.addEventListener(`click`, (element) => {
    element.target.style.display = `none`;
})

// 1.5

let selectBtn = document.querySelector(`button`)
console.log(selectBtn);
let btnToBold = selectBtn.addEventListener(`click`, (element) => {
    document.body.style.fontWeight = `bold`;
})
