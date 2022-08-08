let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

let orderOfColors = () => {
  color.forEach((color, index) => {
    index > 2
      ? console.log(`My ${index + 1}${ordinal[0]} choice is ${color}`)
      : console.log(`My ${index + 1}${ordinal[index + 1]} choice is ${color}`);
  });
};

orderOfColors();
