// Exercise 1 : Information

// Part I:
//  Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).

function infoAboutMe() {
    console.log(`My name is Slava, age 25 and I like playing the bass guitar.`);
}

infoAboutMe();

// Part II: 

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} and your favorite color is ${personFavoriteColor}.`);

}

infoAboutPerson("David", 45, "blue");

infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips

// let finalBill = 0;
// let tip = 0;
// const calculateTip = () => {
//   let promptAmount = prompt("Please enter a bill amount");
//   let amount = Number(promptAmount);
//   if (amount < 50) {
//     tip = amount * 0.2;
//     finalBill = amount + tip;
//   } else if (amount > 50 && amount < 200) {
//     tip = amount * 0.15;
//     finalBill = amount + tip;
//   } else {
//     tip = amount * 0.2;
//     finalBill = amount + tip;
//   }
//   alert(`Final bill is ${finalBill}$ (Bill:${amount}$ + Tip:${tip}$)`);
// };
// calculateTip();
// Exercise 3 : Find The Numbers Divisible By 23
let outcome = []
let sum = 0
let isDivisible = () => {
    for (let index=0; index<=500; index++){
        if (index % 23 === 0){
          outcome.push(index);
        }
        if(index % 23 === 0){
            sum = index + sum;
        }
    }
}
isDivisible();
console.log(outcome.join(' '));
console.log(sum);
// Exercise 4 : Shopping List
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList = ["banana","orange","apple"];
let myBill = (shoppingList)=> {
    let total=0;
    for(let i=0;i<shoppingList.length;i++){
        let listItem= shoppingList[i];
        if (listItem in stock && stock[listItem] >1){
         total+= prices[listItem]&&stock[listItem -1];
       }
    }
    return total;
}
let result= myBill(shoppingList);
console.log(result);

// Exercise 5 : What’s In My Wallet ?

let totalChange = 0
let change = [0.25,0.10,0.05,0.01]
let arr = []

  function changeEnough (itemPrice, amountOfChange) {
    for (let index = 0; index < change.length; index++) {
        arr.push(amountOfChange[index] * change[index])
    }

    arr.reduce((prev , curr) => {
       return totalChange = prev + curr
    } , 0);

    console.log(totalChange)
  
    if (itemPrice > totalChange){
        console.log("You're broke")
    } else {
        console.log("You can affort it ")   
    }
}

changeEnough(2,[6.5,2,3,7])

//  Exercise 6 : Vacations Cost 

// Hotel cost:

let hotelCost = () =>{
let notViableAnswer
let numberOfNights
     
    do {
        numberOfNights = prompt(`How many nights would you like to stay in the hotel?`)
       
        notViableAnswer = !(/[0-9, ,-]+/.test(numberOfNights))
    } while (notViableAnswer);
    return 140 * Number(numberOfNights)

}

// Plane ride cost : 
let planeRideCost = () => {
let destination
let notViableAnswer
do {
    destination = prompt(`Where are you heading to ?`)
    notViableAnswer=!(/[A-z, ,-]+/.test(destination))
}
 while (notViableAnswer);
switch (destination.toLocaleLowerCase()) {
    case `london`: return 183
    case `paris` : return 220
    default: return 300
}
}

//  Car rental cost :
let rentalCost = () =>{
let notViableAnswer
let numberOfRentDays
     
    do {
        numberOfRentDays = prompt(`For how many days you would like a car?`)
       
        notViableAnswer = !(/[0-9, ,-]+/.test(numberOfRentDays))
    } while (notViableAnswer);
    numberOfRentDays = Number(numberOfRentDays)
    return numberOfRentDays > 10?40 *.95 * Number(numberOfRentDays): 40 * Number(numberOfRentDays)

}

// Total vacation cost : 
let totalVactionCost = () => {
    let rentalCostValue = rentalCost()
    let hotelCostValue = hotelCost()
    let planeRideCostValue = planeRideCost()
    console.log(`
        The car cost : ${rentalCostValue}$
        The hotel cost : ${hotelCostValue}$
        The plane ride cost :${planeRideCostValue}$
        The vacation cost is : ${rentalCostValue + hotelCostValue + planeRideCostValue}$
    `);
}
totalVactionCost();