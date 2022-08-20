<<<<<<< HEAD
let startGame = () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let selectLeftDice = document.querySelectorAll(`img`)[0];
  let selectRightDice = document.querySelectorAll(`img`)[1];
  let randomLeftDice = `images/dice${randomNumber1}.png`;
  let randomRightDice = `images/dice${randomNumber2}.png`;
  selectLeftDice.setAttribute(`src`, randomLeftDice);
  selectRightDice.setAttribute(`src`, randomRightDice);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(`h2`).innerText = `Player 1 Wins!`;
    document.querySelector(`h2`).style.color = `#00A36C`
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(`h2`).innerText = `Player 2 Wins!`;
    document.querySelector(`h2`).style.color = `#e79a58`;
  } else {
    document.querySelector(`h2`).innerText = `Draw!`;
    document.querySelector(`h2`).style.color = `#e1d5d2`;
  }
};
let buttonThrow = document
  .querySelector(`button`)
  .addEventListener(`click`, (e) => {
    e.target.style.backgroundColor = `#8B0000`;
    e.target.style.color = `white`;
   
    startGame(e);
    let countDown = setInterval(() => {
        
    }, 5000);
    let i = 5;
    document
    .querySelector(`button`).innerText = `Wait for ${i}`
    if(i === 0) {
        clearInterval(countDown);
        document.querySelector(`button`).innerText = `Try Again`
    }else {
        i--;
    }
  });

 
 
 
=======
let startGame = () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let selectLeftDice = document.querySelectorAll(`img`)[0];
  let selectRightDice = document.querySelectorAll(`img`)[1];
  let randomLeftDice = `images/dice${randomNumber1}.png`;
  let randomRightDice = `images/dice${randomNumber2}.png`;
  selectLeftDice.setAttribute(`src`, randomLeftDice);
  selectRightDice.setAttribute(`src`, randomRightDice);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(`h2`).innerText = `Player 1 Wins!`;
    document.querySelector(`h2`).style.color = `#00A36C`;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(`h2`).innerText = `Player 2 Wins!`;
    document.querySelector(`h2`).style.color = `#e79a58`;
  } else {
    document.querySelector(`h2`).innerText = `Draw!`;
    document.querySelector(`h2`).style.color = `#e1d5d2`;
  }
};
let buttonThrow = document
  .querySelector(`button`)
  .addEventListener(`click`, (e) => {
    e.target.style.backgroundColor = `#8B0000`;
    e.target.style.color = `white`;

    startGame(e);
    document.querySelector(`button`).innerText = `Click To Throw Again`;
  });

let refreshButton = document
  .querySelector(`.refresh`)
  .addEventListener(`click`, (e) => {
    e.target.style.backgroundColor = "#8B0000";
    window.location.reload();
  });
>>>>>>> e21ff801a56441205a72357a86d21a36a10c4fae
