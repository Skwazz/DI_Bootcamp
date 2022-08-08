let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let orderColors = () => {
  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    console.log(`${index + 1}# choice is ${color}`);
  }
};
orderColors();

const checkViolet = () => {
  colors.includes("Violet") ? console.log(`Yeah`) : console.log(`No...`);
};
checkViolet();
