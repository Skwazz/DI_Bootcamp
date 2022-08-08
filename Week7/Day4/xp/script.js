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
