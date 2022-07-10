// Ex1
// 1.1
let div = document.querySelector(`div`);
console.log(div);

// 1.2
let changePeteToRichard = document.querySelector(`ul :nth-child(2)`);
changePeteToRichard.innerText = `Richard`;
console.log(changePeteToRichard);

// 1.3
let changeFirstToSlava = document.querySelector(`ul :nth-child(1)`);
let changeSecondToSlava = document.getElementsByTagName(`li`)[2];

changeFirstToSlava.innerText = `Slava`;
changeSecondToSlava.innerText = `Slava`;

let deleteSarah = document.getElementsByTagName(`li`)[3];

deleteSarah.parentNode.removeChild(deleteSarah);
