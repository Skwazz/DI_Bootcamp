5 >= 1;
// Prediction : true because 5 is bigger then 1
// Answer :true
0 === 1;
// Prediction : false because 0 isn't equal to 0 not on value and on index
// Answer : false
4 <= 1;
// Prediction : false because the value 4 isn't equal or smaller then value  1
// Answer : false
1 != 1;
// Prediction : false because 1 is equal to 1
// Answer : false
"A" > "B";
// Prediction : false  because  on the ASCI table the value of B is bigger then value of A
// Answer : false
"B" < "C";
// Prediction :   true because on the ASCI table the value of B is smaller then value of C
// Answer : true
"a" > "A";
// Prediction :  true because on the ASCI table the value of a is bigger then value of A
// Answer : true
"b" < "A";
// Prediction : false because on the ASCI table the value of b is bigger then value of A
// Answer : false
true === false;
// Prediction : false because true isn't equal to false not on the value nor the index
// Answer : false
true != true;
// Prediction : false because true is equal to true
// Answer : false

// Exercise 2 : Ask For Numbers

// Exercise 3 : Find Nemo :

// let nemo = prompt(`Provide a sentance with the word : "Nemo"`);

// function findNemo() {

//   let position = nemo.split(" ").indexOf("Nemo");

//   if (nemo.split(" ").indexOf("Nemo") + 1) {
//     alert(`I found Nemo at ${position}`);
//   } else {
//     console.log("I can't find Nemo");
//   }
// }

// findNemo();

// Exercise 4 : Boom :

let boom = prompt(`Boom game!
Enter your number: `);

function boomGame() {

  if (boom < 2) {
    console.log('boom');}
   if (boom >= 2) {
    console.log(`b${"o".repeat(boom)}m`);
   }if(boom % 2 === 0 ){
    console.log(`b${"o".repeat(boom)}m!`);
    if (boom % 5 === 0 ) {
     console.log(`B${"O".repeat(boom)}M`);
   }
}
}


boomGame();
