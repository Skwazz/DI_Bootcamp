// Analyze the code below. What will be the output?
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);
// this will return I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

function displayStudentInfo(objUser) {
  //destructuring
  const { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
// -----------------couldnt do that----------------
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// ------------------------------------------------

// ex 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// output would be an Object

// ex 5

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Number 2 would be the correct one

// Ex 6

//  [2] === [2]
// false because they are in different place on memory
//  {} === {}
// false because they are in different place on memory

// Part II:

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
// console.log(object2.number) will log 4
// console.log(object3.number); will log 4
// console.log(object4.number); will log 5
//  Because we set object 1 = 4 so now object 1 will be = 4 and object 2 and 3 will be equal to new object1
//  object4 will be 5 because we redeclaring the number to 5

// part III

//1
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
//2
class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(sound) {
    return `${sound} I'm a ${this.type} named ${this.name} and i'm ${this.color}`;
  }
}
//3
const farmerCow = new Mamal("Lily", "Cow", "Brown and White");
console.log(farmerCow.sound("Moooooo"));
