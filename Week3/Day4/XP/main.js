// Exercise 1: Simple If/Else Statement : 

let x = 5;
let y = 2;

function checkBigger() {
    if (x > y) {
        console.log(`x is the biggest number`);
    } else {
        console.log(`y is the biggest number`);
    }
}

checkBigger();

//  Exercise 2: Chihuahua :

let newDog = `Chihuahua`;

console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog = `Chihuahua`) {
    console.log(`I love Chihuahuas, it's my favorite dog breed`);
} else {
    console.log(`I dont care, I prefer cats`);
}


// Exercise 3: Even Or Odd :

 let userChoice = prompt(`Check if your number is even or odd : `)

function evenOrOdd() {
    if (userChoice % 2 == 0) {
        console.log(`${userChoice} is an even number!`);
    } else 
        console.log(`${userChoice} is an odd number!`);
    }

    evenOrOdd();


    // Exercise 4: Group Chat : 

    let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

    // function whoIsOnline() {
    //     switch (users.length) {
    //         case users.length = 0:
    //             console.log(`no one is online`);
    //             break;
    //         case users.length = 1:
    //             console.log(`${users.indexOf(0)} is online`);
    //             break;    
    //         case users.length = 2:
    //             console.log(`${users.indexOf(0)} and ${users.indexOf(1)} is online`);
    //             break;     
    //         case users.length > 2:
    //             console.log(`${users.indexOf(0)},${users.indexOf(1)} and ${users.length()} more are online `);
    //             break;     
    //             default:


    //             break;
    //     }
    // }

    // whoIsOnline();