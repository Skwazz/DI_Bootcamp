// Analyze these pieces of code before executing them. What will be the outputs ?

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);

//result : bread, carrot ,potato , chicken , apple , orange

const country = "USA";
console.log([...country]);

// result : U,S,A
let newArray = [...[, ,]];
console.log(newArray);

//result : undefined

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// Using the map() method, push into a new array the firstname of the user and a welcome message.
// You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = [];

const welcomeStudent = () => {
  users.map((user) => {
    welcomeStudents.push(`Hello ${user.firstName}`);
  });
  console.log(welcomeStudents);
};

welcomeStudent();

// . Using the filter() method, create a new array,
// containing only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents

const fsr = users.filter((user) => user.role === "Full Stack Resident");
console.log(fsr.map((user) => user.lastName));

// Use the reduce() method to combine all of these into a single string.
let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

console.log(epic.reduce((prev, curr) => prev + " " + curr));

let students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

//    Using the filter() method, create a new array,
// containing the students that passed the course.

const passed = students.filter((student) => student.isPassed === true);

const congratulate = (passed) => {
  passed.forEach((student) =>
    console.log(
      `goodjob ${student.name} you passed the course in ${student.course} `
    )
  );
};
congratulate(passed);
