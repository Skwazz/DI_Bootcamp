// EX 1
const sum = (a) => (b) => a + b;

console.log(sum(1)(2));
// EX 2
const kiloToGrams = (kg) => kg * 1000;

console.log(kiloToGrams(3));

// EX 3

(function () {
  let newP = document.createElement("p");
  let body = document.querySelector("body");
  child = "3";
  spouse = "Daniela";
  job = "Pro gamer";
  country = "Canada";
  newP.innerText = `You will be a ${job} in ${country}, and married to ${spouse} with ${child} kids.`;
  body.append(newP);
})();

// EX 5
const makeJuice = (size) => {
  let ingredients = [];
  const addIngredients = (a, b, c) => {
    console.log(ingredients);
    ingredients.push([a, b, c]);
    console.log(
      `The client wants a ${size} juice, containing ${a}, ${b},${c}.`
    );
    const displayJuice = () => {
      ingredients.forEach((e) => {
        console.log(`The client wants a ${size} juice, containing ${e}.`);
      });
    };
    displayJuice();
  };

  addIngredients("milk", "oil", "shprite");
  addIngredients("milrtyk", "oirtyl", "shprrtyite");
};

makeJuice(`big`);
