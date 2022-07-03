// Exercise 1 : List Of People

// 1.1

let people = ["Greg", "Mary", "Devon", "James"];

let peopleRemoveGreg = people.splice(people.indexOf("Greg"), 1);

console.log(people);

// 1.2

people[2] = people[2].replace(/James/g, `Jason`);

console.log(people);

// 1.3

people.push(`Slava`);

console.log(people);

// 1.4

let findMaryI = people.indexOf(`Mary`);

console.log(findMaryI);

// 1.5

let peopleCopy = people.slice(1, 3);

console.log(peopleCopy);

// 1.6 Write code that gives the index of “Foo”. Why does it return -1 ?
// Answer : Because "-1" means no match found. The reason it returns -1 and not "False" is that  needle at the beginning of the string would be at position 0, which is equivalent to false in Javascript. So returning -1 ensures that you know there is not actually a match.

let findFoo = people.indexOf("Foo");

console.log(findFoo);

// 1.7

let last = people.pop();

console.log(last);

//  Part II - Loops :

// part II.1

people.forEach((elemet) => {
  console.log(elemet);
});

// part II.2
for (let i = 0; i < people.length; i++) {
  const element = people[i];

  console.log(element);

  if (i === 1) break;
}

//  Exercise 2 : Your Favorite Colors

let colors = [`Green`, `Blue`, `Black`, `Red`, `White`];

for (let i = 0; i < colors.length; i++) {
  const element = colors[i];

  console.log(`My #${i + 1} choice is ${element}`);
}


// Exercise 3 : Repeat The Question

// do {
//     userChoice = Number(prompt());
// } while (userChoice < 10);

// Exercise 4 : Building Management : 

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

//  Ex 4.2

console.log(building.numberOfFloors);

// Ex 4.3

console.log(building.numberOfAptByFloor.firstFloor , building.numberOfAptByFloor.thirdFloor);



// Ex 4.4 

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

// Ex 4.5 

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    console.log(building.numberOfRoomsAndRent.dan[1] + 200);
}

// Exercise 5 : Family : 

let family = {
    dad: 'Valery',
    mom: 'Oksana',
    son: 'Slava',
}

for (const key in family) {
    console.log(Object.keys(family));
}

for (const key in family) {
    if (Object.hasOwnProperty.call(family, key)) {
        const element = family[key];
           console.log(element);
        }
    }

// // Exercise 6    

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer',
// }


// for (let i=0; i < details.length; i++) { 
//     console.log(details[i], details[keys[i]]);
//  }


// ^Couldn't figure that one out ^


// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let namesAlphabeticalOrder = names.sort()

for (let index = 0; index < namesAlphabeticalOrder.length; index++) {
    const element = namesAlphabeticalOrder[index];
    console.log(element.charAt(0));
}

