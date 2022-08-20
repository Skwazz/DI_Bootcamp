// function winBattle() {
//   return true;
// }

// 1
let winBattle = (experiencePoints) => {
  return experiencePoints ? (experiencePoints = 10) : (experiencePoints = 1);
};

console.log(winBattle(true));
console.log(winBattle(false));
